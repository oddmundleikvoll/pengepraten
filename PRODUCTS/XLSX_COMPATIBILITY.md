# XLSX-kompatibilitetsregler for Pengepraten

**Dato:** 2026-04-09  
**Lærdom:** Excel-filer laget med openpyxl kan ha XML-strukturelle avvik som fører til at enkelte programmer (spesielt LibreOffice, mobil-apper, preview-motorer) nekter å åpne fila.

---

## Kjente problemer

### 1. Ugydig datostempel i core.xml
**Problemet:** `openpyxl` skriver W3CDTF-datoer med både offset OG Z:
```
2026-04-09T14:54:53+00:00Z   ← ugyldig
```

**Korrekt format:** Ren UTC med suffiks Z, ELLER dato med offset uten Z:
```
2026-04-09T14:54:53Z          ← gyldig (UTC)
2026-04-09T14:54:53+00:00     ← gyldig (offset, men Excel bruker Z)
```

**Fix:** Rediger `docProps/core.xml` direkte etter lagring:
```python
import re
content = re.sub(r'(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})\+00:00Z', r'\1Z', content)
```

---

### 2. Tomme inlineStr-celler
**Problemet:** Celler med `t="inlineStr"` men uten faktisk tekstinnhold:
```
<c r="C7" t="inlineStr"></c>   ← ugyldig
<c r="C7" t="inlineStr"/>      ← ugyldig
```

**Fix:** Behandle som ekte tomme celler:
```python
import re
content = re.sub(r'(<c r="[^"]+")[^>]*(t="inlineStr")[^>]*(></c>)', r'\1\3', content)
content = re.sub(r'<c r="([^"]+)"[^>]*t="inlineStr"[^>]*/>', r'<c r="\1"/>', content)
```

**Bedre løsning:** Unngå `inlineStr` helt. Bruk `sharedStrings` eller bare tekst uten type-attributt.

---

### 3. Tomme numeriske celler med type-attributt
**Problemet:** Celler merket `t="n"` (numeric) men uten verdi-element:
```
<c r="B5" t="n"></c>           ← kan gi problemer
```

**Fix:** Fjern type-attributtet fra tomme celler:
```python
import re
content = re.sub(r'(<c r="[^"]+")[^>]*(t="n")[^>]*(></c>)', r'\1\3', content)
content = re.sub(r'<c r="([^"]+)"[^>]*t="n"[^>]*/>', r'<c r="\1"/>', content)
```

---

### 4. Formelceller med tom cache-verdi
**Problemet:** Formelceller med tom `<v/>`:
```
<c r="D4"><f>B4-C4</f><v/></c>  ← tom cache
```

**Fix:** Excel regenererer cached verdier ved åpning, men for kompatibilitet:
- Sett faktiske verdier i `<v>` ved lagring
- ELLER: La Excel beregne ved åpning (vanligvis OK)

---

## Anbefalt produksjons-flyt for maler

### Steg 1: Lag fila med openpyxl
```python
import openpyxl
wb = openpyxl.Workbook()
# ... legg til innhold ...
wb.save('mal.xlsx')
```

### Steg 2: Fix XML direkte (alltid)
```python
import zipfile
import re
import shutil
import os

def fix_xlsx_compatibility(src, dst):
    # Extract
    extract_dir = '/tmp/xlsx_fix_tmp'
    if os.path.exists(extract_dir):
        shutil.rmtree(extract_dir)
    with zipfile.ZipFile(src, 'r') as z:
        z.extractall(extract_dir)
    
    # Fix core.xml dates
    core_path = os.path.join(extract_dir, 'docProps', 'core.xml')
    with open(core_path, 'r') as f:
        content = f.read()
    content = re.sub(r'(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})\+00:00Z', r'\1Z', content)
    with open(core_path, 'w') as f:
        f.write(content)
    
    # Fix empty cells in all sheets
    for f in os.listdir(os.path.join(extract_dir, 'xl', 'worksheets')):
        if f.startswith('sheet') and f.endswith('.xml'):
            sheet_path = os.path.join(extract_dir, 'xl', 'worksheets', f)
            with open(sheet_path, 'r') as sf:
                c = sf.read()
            c = re.sub(r'(<c r="[^"]+")[^>]*(t="n")[^>]*(></c>)', r'\1\3', c)
            c = re.sub(r'<c r="([^"]+)"[^>]*t="n"[^>]*/>', r'<c r="\1"/>', c)
            c = re.sub(r'(<c r="[^"]+")[^>]*(t="inlineStr")[^>]*(></c>)', r'\1\3', c)
            c = re.sub(r'<c r="([^"]+)"[^>]*t="inlineStr"[^>]*/>', r'<c r="\1"/>', c)
            with open(sheet_path, 'w') as sf:
                sf.write(c)
    
    # Repack
    with zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(extract_dir):
            for file in files:
                fp = os.path.join(root, file)
                arcname = os.path.relpath(fp, extract_dir)
                zf.write(fp, arcname)
    
    shutil.rmtree(extract_dir)
    print(f"Fiksert xlsx lagret: {dst}")

# Bruk:
fix_xlsx_compatibility('mal.xlsx', 'mal_fixed.xlsx')
```

---

## Alternativ: Unngå openpyxl-problemer helt

For enkle maler kan du i stedet:
1. **Lagre som CSV** — universelt kompatibelt, men mister formattering
2. **Bruk XLSX-generator** med bedre XML-kontroll (f.eks. `xlsxwriter` som har færre slike bugs)
3. **Lagre som ODS** — LibreOffice-format, ofte mer stabilt for enkle tabeller

---

## Test-protokoll

Før hver mal leveres:
1. Åpne i LibreOffice Calc
2. Åpne i Excel (online eller desktop hvis tilgjengelig)
3. Åpne på mobil (Google Sheets-app)
4. Sjekk at alle arkfaner, formler og formatering er intakt

Hvis ett av disse feiler → kjør fix-skriptet over.
