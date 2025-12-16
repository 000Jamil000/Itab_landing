/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Точные цвета из Figma
        primary: '#59AD3B',        // Основной зеленый
        secondary: '#242424',       // Темный текст
        tertiary: '#848484',        // Серый текст
        'text-primary': '#202020',
        'text-secondary': '#7B7B7B',
        'text-tertiary': '#A5A5A5',
        'bg-primary': '#F8F8F8',
        'bg-secondary': '#FFFFFF',
        'bg-tertiary': '#F1F1F1',
        'accent-green': '#59AD3B',
        'accent-blue': '#398FF5',
        'stroke-light': '#EEEEEE',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Desktop Typography из Figma
        'h1': ['44px', { lineHeight: '1.09', fontWeight: '500' }],
        'h2': ['36px', { lineHeight: '1.11', fontWeight: '500', letterSpacing: '-0.0278em' }],
        'h4': ['26px', { lineHeight: '1.08', fontWeight: '500' }],
        'h5': ['20px', { lineHeight: '1.2', fontWeight: '500' }],
        'body-16': ['16px', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.0125em' }],
        'body-16-medium': ['16px', { lineHeight: '1.375', fontWeight: '500' }],
        'body-14': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
      backdropBlur: {
        'xs': '16px',
      },
    },
  },
  plugins: [],
}
