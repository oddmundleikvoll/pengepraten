import type { Config } from 'tailwindcss'

/**
 * Tailwind config for Pengepraten.
 *
 * Two color systems live side-by-side:
 *   - `editorial.*`  → Nordic Clarity palette (new design system)
 *   - `primary.*`, `accent.*`, `norsk.*` → legacy palette, kept so all
 *     existing page-level code continues to compile & render. Pages are
 *     gradually migrating toward `editorial` / `ink` / `paper`.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* — Nordic Clarity palette (preferred) — */
        paper: {
          DEFAULT: '#F5F1EC', // warm linen page bg
          alt:     '#EDE9E3', // subtle section bg
          surface: '#FFFFFF', // cards
        },
        ink: {
          DEFAULT:  '#1A1916', // primary text
          muted:    '#7A756D', // secondary text
          subtle:   '#A8A49B', // tertiary
        },
        forest: {
          DEFAULT: '#2D5016', // accent — primary action
          mid:     '#4A7A2A', // hover
          soft:    '#EAF0E4', // soft bg
        },
        amber: {
          warm:      '#C4783A', // warm amber highlights
          'warm-soft':'#F5E8DA',
        },
        borderColor: {
          DEFAULT: '#DDD8D0',
          strong:  '#C4BEB5',
        },

        /* — Editorial semantic aliases (single-string helpers) — */
        // `bg-paper`, `bg-paper-surface`, `bg-paper-alt` from `paper` above.
        // `text-ink`, `text-ink-muted` from `ink` above.
        // `bg-forest`, `hover:bg-forest-mid` from `forest` above.

        /* — Legacy palette (kept for back-compat with existing pages) — */
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'accent-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Alias of the blue accent scale kept so existing pages with
        // `text-accent-600`, `bg-accent-50`, etc. keep rendering.
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        norsk: {
          blue:      '#002772',
          lightBlue: '#0066cc',
          green:     '#00843d',
          dark:      '#1a1a2e',
          gray:      '#4a5568',
          lightGray: '#f7fafc',
        },
      },
      fontFamily: {
        /* Sans/heading now default to the new fonts; existing classes
           `font-sans`/`font-heading` automatically pick up the new look. */
        sans:    ['var(--font-dm-sans, "DM Sans")', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        heading: ['var(--font-fraunces, "Fraunces")', 'Iowan Old Style', 'Charter', 'Georgia', 'serif'],
        display: ['var(--font-fraunces, "Fraunces")', 'Iowan Old Style', 'Charter', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains, "JetBrains Mono")', 'ui-monospace', 'IBM Plex Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(42px, 6vw, 72px)', { lineHeight: '1.04', letterSpacing: '-0.018em' }],
        'display-lg': ['clamp(34px, 4.6vw, 60px)', { lineHeight: '1.06', letterSpacing: '-0.014em' }],
        'display':    ['clamp(28px, 4vw, 42px)',  { lineHeight: '1.12', letterSpacing: '-0.012em' }],
        'lede':       ['22px', { lineHeight: '1.5' }],
        'body':       ['17px', { lineHeight: '1.65' }],
        'small':      ['13px', { lineHeight: '1.5' }],
        'mono-xs':    ['11px', { lineHeight: '1.5', letterSpacing: '0.14em' }],
      },
      spacing: {
        'space-xs':  '4px',
        'space-sm':  '8px',
        'space-md':  '16px',
        'space-lg':  '24px',
        'space-xl':  '40px',
        'space-2xl': '64px',
        'space-3xl': '96px',
      },
      maxWidth: {
        editorial: '1200px',
        prose:     '70ch',
      },
      borderRadius: {
        card: '12px',
        btn:  '6px',
      },
      boxShadow: {
        card:    '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config