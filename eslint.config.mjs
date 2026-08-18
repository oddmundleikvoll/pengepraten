import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  {
    name: 'pengepraten/browser-storage-hydration',
    rules: {
      // These client components intentionally hydrate localStorage-backed state
      // after mount so server and browser rendering stay deterministic.
      'react-hooks/set-state-in-effect': 'off',
      // CategoryIcon resolves a stable Lucide component from a module-level map.
      'react-hooks/static-components': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])
