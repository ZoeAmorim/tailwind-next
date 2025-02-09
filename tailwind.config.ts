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
    },
  },
  plugins: [],
} satisfies Config
