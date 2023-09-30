// uno.config.ts
import { 
    presetWebFonts 
} from 'unocss'

presetWebFonts({
    provider: 'google', // default provider
    fonts: {
      // these will extend the default theme
      sans: 'Roboto',
      mono: ['Fira Code', 'Fira Mono:400,700'],
      // custom ones
      lobster: 'Lobster',
      lato: [
        {
          name: 'Lato',
          weights: ['400', '700'],
          italic: true,
        },
        {
          name: 'sans-serif',
          provider: 'none',
        },
      ],
    },
  })