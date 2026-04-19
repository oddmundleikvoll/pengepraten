#!/usr/bin/env python3
"""
Create TikTok slideshow slides for 52-ukers Spareutfordringen.
Uses cairo for proper text rendering (Norwegian characters supported).
"""
import cairo
import math
import os

WIDTH = 1080
HEIGHT = 1920

SLIDES = [
    {
        "num": 1,
        "name": "HOOK",
        "bg_type": "gradient_gold_dark",
        "main_text": "68 900 kr\npå 52 uker?",
        "sub_text": "Du starter med bare 50 kr",
        "emoji": None,
    },
    {
        "num": 2,
        "name": "INTRO",
        "bg_type": "dark_blue",
        "main_text": "52-ukers\nspareutfordringen",
        "sub_text": "50 → 100 → 200 → 400\nFortsett i 52 uker",
        "emoji": None,
    },
    {
        "num": 3,
        "name": "MATH",
        "bg_type": "yellow_black",
        "main_text": "Din gjetning\nvs Fakta",
        "sub_text": "De fleste: ~2 600 kr\nFaktisk: 68 900 kr",
        "emoji": None,
    },
    {
        "num": 4,
        "name": "MILESTONES 1",
        "bg_type": "dark_blue",
        "main_text": "Ukene som\nforandrer alt",
        "sub_text": "Uke 1:  50 kr\nUke 5:  1 600 kr\nUke 10: 25 600 kr",
        "emoji": None,
    },
    {
        "num": 5,
        "name": "HALVVEIS",
        "bg_type": "celebration",
        "main_text": "HALVVEIS!",
        "sub_text": "Uke 26: 32 000 kr\nSiste 13 uker: +36 900 kr",
        "emoji": "🎉",
    },
    {
        "num": 6,
        "name": "TOOL",
        "bg_type": "green_dark",
        "main_text": "Verktøyet\npå pengepraten.no",
        "sub_text": "Logg progresjonen din\nuke for uke",
        "emoji": None,
    },
    {
        "num": 7,
        "name": "PUSH",
        "bg_type": "confetti",
        "main_text": "68 900 kr\nSPART!",
        "sub_text": "Du klarte det!\n22 uker med lynkjappe resultater",
        "emoji": "🎊",
    },
    {
        "num": 8,
        "name": "CTA",
        "bg_type": "brand",
        "main_text": "Bli med på\npengepraten.no",
        "sub_text": "Start i dag\nLenke i bio",
        "emoji": None,
    },
]

THUMBNAIL = {
    "bg_type": "gradient_gold_dark",
    "main_text": "68 900 kr\nPÅ 52 UKER",
    "sub_text": "50 kr i uka → Dobles hver uke → ???\nSpar 68 900 kr på ett år!",
    "emoji": "💰",
}


def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16)/255 for i in (0, 2, 4))


def draw_gradient_gold_dark(cr, w, h):
    """Gold to dark gradient for hook slides."""
    grad = cairo.LinearGradient(0, 0, 0, h)
    grad.add_color_stop_rgba(0, 0.08, 0.05, 0.12, 1)
    grad.add_color_stop_rgba(0.5, 0.12, 0.08, 0.18, 1)
    grad.add_color_stop_rgba(1, 0.04, 0.02, 0.06, 1)
    cr.set_source(grad)
    cr.paint()
    # Add gold accent bars
    cr.set_source_rgba(0.85, 0.65, 0.15, 0.3)
    cr.rectangle(0, 0, 8, h)
    cr.fill()
    cr.rectangle(w - 8, 0, 8, h)
    cr.fill()


def draw_dark_blue(cr, w, h):
    """Dark blue gradient for intro/milestone slides."""
    grad = cairo.LinearGradient(0, 0, 0, h)
    grad.add_color_stop_rgba(0, 0.05, 0.08, 0.20, 1)
    grad.add_color_stop_rgba(1, 0.02, 0.04, 0.10, 1)
    cr.set_source(grad)
    cr.paint()
    # Cyan accent lines
    cr.set_source_rgba(0.0, 0.8, 0.9, 0.15)
    cr.rectangle(0, 0, 4, h)
    cr.fill()
    cr.set_source_rgba(0.0, 0.8, 0.9, 0.08)
    cr.rectangle(w - 4, 0, 4, h)
    cr.fill()


def draw_yellow_black(cr, w, h):
    """High contrast yellow/black for math slide."""
    cr.set_source_rgb(0.05, 0.05, 0.05)
    cr.paint()
    # Yellow grid lines
    cr.set_source_rgba(0.9, 0.75, 0.0, 0.07)
    for i in range(0, w, 60):
        cr.move_to(i, 0)
        cr.line_to(i + h * 0.3, h)
        cr.stroke()
    for i in range(0, h, 60):
        cr.move_to(0, i)
        cr.line_to(w, i)
        cr.stroke()
    # Accent bars
    cr.set_source_rgba(0.95, 0.80, 0.0, 0.5)
    cr.rectangle(0, 0, 10, h)
    cr.fill()
    cr.set_source_rgb(0.95, 0.80, 0.0)
    cr.rectangle(w - 10, 0, 10, h)
    cr.fill()


def draw_celebration(cr, w, h):
    """Celebration gradient for halvveis slide."""
    grad = cairo.LinearGradient(0, 0, 0, h)
    grad.add_color_stop_rgba(0, 0.15, 0.05, 0.25, 1)
    grad.add_color_stop_rgba(1, 0.05, 0.02, 0.10, 1)
    cr.set_source(grad)
    cr.paint()
    # Confetti dots
    import random
    random.seed(42)
    colors = [
        (0.95, 0.80, 0.0), (0.0, 0.9, 0.8), (0.95, 0.4, 0.0),
        (0.4, 0.8, 0.95), (0.9, 0.2, 0.5), (0.7, 0.95, 0.3)
    ]
    for _ in range(80):
        x = random.randint(0, w)
        y = random.randint(0, h)
        r = random.randint(4, 18)
        c = random.choice(colors)
        cr.set_source_rgba(c[0], c[1], c[2], 0.35)
        cr.arc(x, y, r, 0, 2 * math.pi)
        cr.fill()
    # Purple overlay for text readability
    cr.set_source_rgba(0.05, 0.02, 0.12, 0.45)
    cr.paint()


def draw_green_dark(cr, w, h):
    """Dark green for tool slide."""
    grad = cairo.LinearGradient(0, 0, 0, h)
    grad.add_color_stop_rgba(0, 0.03, 0.12, 0.08, 1)
    grad.add_color_stop_rgba(1, 0.01, 0.06, 0.03, 1)
    cr.set_source(grad)
    cr.paint()
    # Green accent
    cr.set_source_rgba(0.1, 0.9, 0.4, 0.25)
    cr.rectangle(0, 0, 8, h)
    cr.fill()
    cr.rectangle(w - 8, 0, 8, h)
    cr.fill()


def draw_confetti(cr, w, h):
    """Confetti celebration for push slide."""
    cr.set_source_rgb(0.04, 0.04, 0.08)
    cr.paint()
    import random
    random.seed(99)
    colors = [
        (0.95, 0.80, 0.0), (0.0, 0.85, 0.9), (0.95, 0.4, 0.0),
        (0.4, 0.8, 0.95), (0.9, 0.2, 0.5), (0.7, 0.95, 0.3),
        (0.95, 0.6, 0.1), (0.3, 0.5, 0.95)
    ]
    for _ in range(120):
        x = random.randint(0, w)
        y = random.randint(0, h)
        rx = random.randint(6, 22)
        ry = random.randint(4, 14)
        angle = random.uniform(0, math.pi)
        c = random.choice(colors)
        cr.set_source_rgba(c[0], c[1], c[2], 0.4)
        cr.save()
        cr.translate(x, y)
        cr.rotate(angle)
        cr.rectangle(-rx, -ry, rx * 2, ry * 2)
        cr.fill()
        cr.restore()
    # Dark overlay
    cr.set_source_rgba(0.02, 0.02, 0.05, 0.5)
    cr.paint()


def draw_brand(cr, w, h):
    """Brand gradient for CTA slide."""
    grad = cairo.LinearGradient(0, 0, 0, h)
    grad.add_color_stop_rgba(0, 0.06, 0.10, 0.22, 1)
    grad.add_color_stop_rgba(1, 0.02, 0.05, 0.12, 1)
    cr.set_source(grad)
    cr.paint()
    # Brand accent
    cr.set_source_rgba(0.0, 0.85, 0.7, 0.3)
    cr.rectangle(0, 0, 10, h)
    cr.fill()
    cr.set_source_rgba(0.0, 0.85, 0.7, 0.15)
    cr.rectangle(w - 10, 0, 10, h)
    cr.fill()


def draw_slide(slide_def, output_path, thumb=False):
    """Draw a single slide."""
    surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, WIDTH, HEIGHT)
    cr = cairo.Context(surface)
    
    bg = slide_def["bg_type"]
    
    if bg == "gradient_gold_dark":
        draw_gradient_gold_dark(cr, WIDTH, HEIGHT)
    elif bg == "dark_blue":
        draw_dark_blue(cr, WIDTH, HEIGHT)
    elif bg == "yellow_black":
        draw_yellow_black(cr, WIDTH, HEIGHT)
    elif bg == "celebration":
        draw_celebration(cr, WIDTH, HEIGHT)
    elif bg == "green_dark":
        draw_green_dark(cr, WIDTH, HEIGHT)
    elif bg == "confetti":
        draw_confetti(cr, WIDTH, HEIGHT)
    elif bg == "brand":
        draw_brand(cr, WIDTH, HEIGHT)
    
    if thumb:
        # Draw label
        cr.select_font_face("Ubuntu", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_BOLD)
        cr.set_font_size(28)
        cr.set_source_rgba(1, 1, 1, 0.5)
        cr.move_to(40, 60)
        cr.show_text("FOREDRAGSHOLDER: PENGEPRATEN.NO")
    
    # Main text - large
    main = slide_def["main_text"]
    cr.select_font_face("Ubuntu", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_BOLD)
    
    # Calculate font size to fit
    lines = main.split('\n')
    max_chars = max(len(l) for l in lines)
    
    # Scale based on line count and longest line
    base_size = 4200 / max(max_chars, 8)
    font_size = min(base_size, 180)
    
    cr.set_font_size(font_size)
    cr.set_source_rgb(1, 1, 1)
    
    # Draw text outline
    line_height = font_size * 1.15
    total_text_height = len(lines) * line_height
    start_y = (HEIGHT - total_text_height) / 2 + font_size * 0.4
    
    for i, line in enumerate(lines):
        extents = cr.text_extents(line)
        x = (WIDTH - extents.width) / 2
        y = start_y + i * line_height
        
        # Black outline
        cr.set_source_rgb(0, 0, 0)
        cr.move_to(x - 5, y)
        cr.text_path(line)
        cr.set_line_width(18)
        cr.stroke_preserve()
        cr.set_source_rgb(1, 1, 1)
        cr.fill()
    
    # Sub text
    sub = slide_def.get("sub_text", "")
    if sub:
        sub_lines = sub.split('\n')
        sub_font_size = 52
        cr.select_font_face("Ubuntu", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_NORMAL)
        cr.set_font_size(sub_font_size)
        
        sub_line_height = sub_font_size * 1.6
        sub_total = len(sub_lines) * sub_line_height
        sub_start_y = start_y + len(lines) * line_height + 80
        
        for i, line in enumerate(sub_lines):
            extents = cr.text_extents(line)
            x = (WIDTH - extents.width) / 2
            y = sub_start_y + i * sub_line_height
            cr.set_source_rgba(0.9, 0.9, 0.9, 0.85)
            cr.move_to(x, y)
            cr.text_path(line)
            cr.set_line_width(8)
            cr.stroke_preserve()
            cr.set_source_rgba(0.9, 0.9, 0.9, 0.85)
            cr.fill()
    
    # Slide number indicator
    if not thumb and "num" in slide_def:
        cr.select_font_face("Ubuntu", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_NORMAL)
        cr.set_font_size(28)
        cr.set_source_rgba(1, 1, 1, 0.25)
        cr.move_to(WIDTH - 80, HEIGHT - 50)
        cr.show_text(f"{slide_def['num']}/8")
    
    surface.write_to_png(output_path)
    print(f"  ✅ Slide {slide_def.get('num', 'thumb')}: {os.path.basename(output_path)}")


def main():
    output_dir = "/home/o/workspace/jewelry-content/pengepraten-tiktok-52uker/slides"
    os.makedirs(output_dir, exist_ok=True)
    
    print("Generating slides...")
    for slide in SLIDES:
        output_path = os.path.join(output_dir, f"slide-{slide['num']:02d}-{slide['name'].lower()}.png")
        draw_slide(slide, output_path)
    
    # Thumbnail
    thumb_path = os.path.join(output_dir, "thumbnail.png")
    draw_slide(THUMBNAIL, thumb_path, thumb=True)
    print(f"  ✅ Thumbnail: thumbnail.png")
    
    print(f"\nAll slides saved to: {output_dir}")


if __name__ == "__main__":
    main()
