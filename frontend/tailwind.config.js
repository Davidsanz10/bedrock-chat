/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['M PLUS Rounded 1c'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      /*  colors: {
         'aws-squid-ink': {
           light: '#232F3E',
           dark: '#171717',
         },
         'aws-sea-blue': {
           light: '#005276',
           dark: '#757575',
         },
         'aws-sea-blue-hover': {
           light: '#003550',
           dark: '#5b5b5b',
         },
         'aws-aqua': '#007faa',
         'aws-lab': '#38ef7d',
         'aws-mist': '#9ffcea',
         'aws-font-color': {
           light: '#232F3E',
           dark: '#cacaca',
           gray: '#909193',
           blue: '#276cc6',
         },
         'aws-font-color-white': {
           light: '#ffffff',
           dark:'#ececec',
         },
         'aws-ui-color': {
           dark: '#151515',
         },
         'aws-paper': {
           light: '#f1f3f3',
           dark: '#212121',
         },
         red: '#dc2626',
         'light-red': '#fee2e2',
         yellow: '#f59e0b',
         'light-yellow': '#fef9c3',
         'dark-gray': '#6b7280',
         gray: '#9ca3af',
         'light-gray': '#e5e7eb',
       }, */
      /* colors: {
        'aws-squid-ink': {
          light: '#18181b', // negro profundo para light
          dark: '#000000',  // negro absoluto para dark
        },
        'aws-sea-blue': {
          light: '#e11d74', // fucsia vibrante para light
          dark: '#a21caf',  // fucsia profundo para dark
        },
        'aws-sea-blue-hover': {
          light: '#ff4fa3', // fucsia claro para hover
          dark: '#c026d3',  // fucsia oscuro para hover
        },
        'aws-aqua': '#ff0059', // fucsia neón
        'aws-lab': '#ff80ab', // rosa pastel
        'aws-mist': '#fce4ec', // rosa muy claro
        'aws-font-color': {
          light: '#232F3E',
          dark: '#f9fafb', // blanco casi puro para dark
          gray: '#909193',
          blue: '#e11d74', // fucsia como acento
        },
        'aws-font-color-white': {
          light: '#ffffff',
          dark: '#ffe4f6', // blanco con tinte rosa para dark
        },
        'aws-ui-color': {
          dark: '#151515',
        },
        'aws-paper': {
          light: '#fff1f2', // fondo rosa claro para light
          dark: '#1a1a1a',  // fondo negro para dark
        },
        red: '#e53935', // rojo fuerte
        'light-red': '#ffcdd2', // rojo claro
        'dark-red': '#b71c1c', // rojo oscuro para dark
        yellow: '#f59e0b',
        'light-yellow': '#fef9c3',
        'dark-gray': '#6b7280',
        gray: '#9ca3af',
        'light-gray': '#e5e7eb',
      }, */
      colors: {
        // Matices de negro
        'aws-squid-ink': {
          light: '#232323', // negro clásico para light
          dark: '#0a0a0a',  // negro absoluto para dark
        },
        // Matices de rojo (usando los nombres existentes)
        'aws-sea-blue': {
          light: '#dc2626', // rojo principal para light
          dark: '#b91c1c',  // rojo oscuro para dark
        },
        'aws-sea-blue-hover': {
          light: '#f87171', // rojo claro para hover
          dark: '#991b1b',  // rojo profundo para hover en dark
        },
        'aws-aqua': '#ef4444', // rojo vibrante
        'aws-lab': '#fee2e2',  // rojo muy claro (backgrounds)
        'aws-mist': '#fca5a5', // rojo pastel
        // Colores de fuente
        'aws-font-color': {
          light: '#232323', // negro para textos en light
          dark: '#f3f4f6',  // gris muy claro para textos en dark
          gray: '#6b7280',  // gris medio
          blue: '#dc2626',  // rojo como acento
        },
        'aws-font-color-white': {
          light: '#ffffff',
          dark: '#f3f4f6', // blanco/gris claro para dark
        },
        // UI y fondos
        'aws-ui-color': {
          dark: '#151515',
        },
        'aws-paper': {
          light: '#f3f4f6', // gris muy claro para light
          dark: '#232323',  // negro/gris oscuro para dark
        },
        // Rojos y grises utilitarios
        red: '#dc2626',         // rojo tailwind
        'light-red': '#fee2e2', // rojo claro
        'dark-red': '#991b1b',  // rojo oscuro
        yellow: '#f59e0b',      // puedes quitarlo si solo quieres rojo/negro/gris
        'light-yellow': '#fef9c3', // igual que arriba
        'dark-gray': '#6b7280',
        gray: '#9ca3af',
        'light-gray': '#e5e7eb',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
