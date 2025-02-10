import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brandColor: '#EB356E',
        brandColorShadow: '#F45B87',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem), 1fr',
        profile: 'max-content 1fr min-content',
      },
    },
  },
  plugins: [],
} satisfies Config
