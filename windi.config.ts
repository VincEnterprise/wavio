import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
    require('@windicss/plugin-interaction-variants'),
  ],

  theme: {
    //
    // ─── COLORS ──────────────────────────────────────────────────────
    //
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#18181B',
      white: '#ffffff',

      gray: {
        DEFAULT: '#71717A',
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },

      yellow: {
        DEFAULT: '#FFC94D',
        50: '#FFF3D6',
        100: '#FFEEC7',
        200: '#FFE5A8',
        300: '#FFDC8A',
        400: '#FFD36B',
        500: '#FFC94D',
        600: '#FFB70F',
        700: '#D19200',
        800: '#946800',
        900: '#573D00',
      },

      orange: {
        DEFAULT: '#FF824D',
        50: '#FFE2D6',
        100: '#FFD8C7',
        200: '#FFC2A8',
        300: '#FFAD8A',
        400: '#FF986B',
        500: '#FF824D',
        600: '#FF570F',
        700: '#D13F00',
        800: '#942C00',
        900: '#571A00',
      },

      green: {
        DEFAULT: '#A6E269',
        50: '#EBF8DD',
        100: '#E3F6D0',
        200: '#D4F1B6',
        300: '#C4EC9C',
        400: '#B5E783',
        500: '#A6E269',
        600: '#8AD93A',
        700: '#6EB823',
        800: '#52891A',
        900: '#365A11',
      },
    },

    fontFamily: {
      sans: [
        'Quicksand',
        'Nunito',
        'Gotham Rounded',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },

    //
    // ─── ANIMATIONS ──────────────────────────────────────────────────
    //
    extend: {
      // backgroundImage: _theme => ({
      //   'button-edge': `linear-gradient(
      //       to left,
      //       theme(colors.gray.200) 0%,
      //       theme(colors.gray.100) 10%,
      //       theme(colors.gray.100) 90%,
      //       theme(colors.gray.200) 100%
      //       )`,
      // }),

      transitionDuration: {
        34: '34ms',
        250: '250ms',
        400: '400ms',
        600: '600ms',
      },

      transitionTimingFunction: {
        'button-cubic-1': 'cubic-bezier(0.3, 0.7, 0.4, 1)',
        'button-cubic-2': 'cubic-bezier(0.3, 0.7, 0.4, 2)',
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fade 2s ease-out infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

        fade: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },

      //
      // ─── MISC ────────────────────────────────────────────────────────
      //
      borderWidth: {
        3: '3px',
        5: '5px',
      },

      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '3rem',
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      //
      // ─── LAYOUT ──────────────────────────────────────────────────────
      //
      zIndex: {
        '-1': '-1',
        '1': '1',
      },

      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1150px',
        },
      },
    },
  },
})
