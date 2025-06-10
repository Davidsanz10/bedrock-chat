import dotenv from 'dotenv';
dotenv.config();
/** @type {import('tailwindcss').Config} */
const colorThemes = {
  red: {
    'aws-squid-ink': { light: '#232323', dark: '#0a0a0a' },
    'aws-sea-blue': { light: '#dc2626', dark: '#b91c1c' },
    'aws-sea-blue-hover': { light: '#f87171', dark: '#991b1b' },
    'aws-aqua': '#ef4444',
    'aws-lab': '#fee2e2',
    'aws-mist': '#fca5a5',
    'aws-font-color': {
      light: '#232323',
      dark: '#f3f4f6',
      gray: '#6b7280',
      blue: '#dc2626',
    },
    'aws-font-color-white': { light: '#ffffff', dark: '#f3f4f6' },
    'aws-ui-color': { dark: '#151515' },
    'aws-paper': { light: '#f3f4f6', dark: '#232323' },
    red: '#dc2626',
    'light-red': '#fee2e2',
    'dark-red': '#991b1b',
    yellow: '#f59e0b',
    'light-yellow': '#fef9c3',
    'dark-gray': '#6b7280',
    gray: '#9ca3af',
    'light-gray': '#e5e7eb',
  },
  pink: {
    'aws-squid-ink': { light: '#18181b', dark: '#000000' },
    'aws-sea-blue': { light: '#e11d74', dark: '#a21caf' },
    'aws-sea-blue-hover': { light: '#ff4fa3', dark: '#c026d3' },
    'aws-aqua': '#ff0059',
    'aws-lab': '#ff80ab',
    'aws-mist': '#fce4ec',
    'aws-font-color': {
      light: '#232F3E',
      dark: '#f9fafb',
      gray: '#909193',
      blue: '#e11d74',
    },
    'aws-font-color-white': { light: '#ffffff', dark: '#ffe4f6' },
    'aws-ui-color': { dark: '#151515' },
    'aws-paper': { light: '#fff1f2', dark: '#1a1a1a' },
    red: '#e53935',
    'light-red': '#ffcdd2',
    'dark-red': '#b71c1c',
    yellow: '#f59e0b',
    'light-yellow': '#fef9c3',
    'dark-gray': '#6b7280',
    gray: '#9ca3af',
    'light-gray': '#e5e7eb',
  },
  skyblue: {
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
      dark: '#ececec',
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
  },
  gray: {
    'aws-squid-ink': {
      light: '#232323',
      dark: '#101010',
    },
    'aws-sea-blue': {
      light: '#4b5563',
      dark: '#1f2937',
    },
    'aws-sea-blue-hover': {
      light: '#6b7280',
      dark: '#374151',
    },
    'aws-aqua': '#9ca3af',
    'aws-lab': '#e5e7eb',
    'aws-mist': '#f3f4f6',
    'aws-font-color': {
      light: '#232323',
      dark: '#f3f4f6',
      gray: '#6b7280',
      blue: '#4b5563',
    },
    'aws-font-color-white': {
      light: '#ffffff',
      dark: '#e5e7eb',
    },
    'aws-ui-color': {
      dark: '#18181b',
    },
    'aws-paper': {
      light: '#f9fafb',
      dark: '#232323',
    },
    red: '#232323',
    'light-red': '#e5e7eb',
    yellow: '#6b7280',
    'light-yellow': '#f3f4f6',
    'dark-gray': '#374151',
    gray: '#9ca3af',
    'light-gray': '#f3f4f6',
  },
  blue: {
    'aws-squid-ink': {
      light: '#0a2540',
      dark: '#0b1623',
    },
    'aws-sea-blue': {
      light: '#2563eb',
      dark: '#1e293b',
    },
    'aws-sea-blue-hover': {
      light: '#1d4ed8',
      dark: '#334155',
    },
    'aws-aqua': '#38bdf8',
    'aws-lab': '#60a5fa',
    'aws-mist': '#dbeafe',
    'aws-font-color': {
      light: '#0a2540',
      dark: '#e0e7ef',
      gray: '#64748b',
      blue: '#2563eb',
    },
    'aws-font-color-white': {
      light: '#ffffff',
      dark: '#e0e7ef',
    },
    'aws-ui-color': {
      dark: '#0f172a',
    },
    'aws-paper': {
      light: '#f1f5f9',
      dark: '#1e293b',
    },
    red: '#1e293b',
    'light-red': '#dbeafe',
    yellow: '#2563eb',
    'light-yellow': '#60a5fa',
    'dark-gray': '#334155',
    gray: '#64748b',
    'light-gray': '#e0e7ef',
  },
  green: {
    'aws-squid-ink': {
      light: '#1b2e1b',
      dark: '#101a10',
    },
    'aws-sea-blue': {
      light: '#22c55e',
      dark: '#14532d',
    },
    'aws-sea-blue-hover': {
      light: '#16a34a',
      dark: '#166534',
    },
    'aws-aqua': '#4ade80',
    'aws-lab': '#bbf7d0',
    'aws-mist': '#dcfce7',
    'aws-font-color': {
      light: '#1b2e1b',
      dark: '#dcfce7',
      gray: '#166534',
      blue: '#22c55e',
    },
    'aws-font-color-white': {
      light: '#ffffff',
      dark: '#dcfce7',
    },
    'aws-ui-color': {
      dark: '#132a13',
    },
    'aws-paper': {
      light: '#f0fdf4',
      dark: '#1b2e1b',
    },
    red: '#14532d',
    'light-red': '#bbf7d0',
    yellow: '#22c55e',
    'light-yellow': '#bbf7d0',
    'dark-gray': '#166534',
    gray: '#4ade80',
    'light-gray': '#dcfce7',
  },
  yellow: {
    'aws-squid-ink': {
      light: '#232323',
      dark: '#0a0a0a',
    },
    'aws-sea-blue': {
      light: '#f59e0b',
      dark: '#b45309',
    },
    'aws-sea-blue-hover': {
      light: '#fde047',
      dark: '#ca8a04',
    },
    'aws-aqua': '#fbbf24',
    'aws-lab': '#fef08a',
    'aws-mist': '#fef9c3',
    'aws-font-color': {
      light: '#232323',
      dark: '#fef9c3',
      gray: '#b45309',
      blue: '#f59e0b',
    },
    'aws-font-color-white': {
      light: '#ffffff',
      dark: '#fef9c3',
    },
    'aws-ui-color': {
      dark: '#18181b',
    },
    'aws-paper': {
      light: '#fef9c3',
      dark: '#232323',
    },
    red: '#b45309',
    'light-red': '#fef08a',
    yellow: '#f59e0b',
    'light-yellow': '#fef08a',
    'dark-gray': '#b45309',
    gray: '#fde047',
    'light-gray': '#fef9c3',
  },
  // Puedes agregar más temas aquí
};

const themeName = process.env.VITE_COLOR_THEME || "red";
console.log(process.env.VITE_COLOR_THEME);

let selectedColors;

switch (themeName) {
  case 'red':
    console.log('Using Red Theme');
    selectedColors = colorThemes.red;
    break;
  case 'pink':
    console.log('Using Pink Theme');
    selectedColors = colorThemes.pink;
    break;
  case 'skyblue':
    console.log('Using skyblue Theme');
    selectedColors = colorThemes.skyblue;
    break;
  case 'gray':
    console.log('Using gray Theme');
    selectedColors = colorThemes.gray;
    break;
  case 'blue':
    console.log('Using blue Theme');
    selectedColors = colorThemes.blue;
    break;
  case 'green':
    console.log('Using green Theme');
    selectedColors = colorThemes.green;
    break;
  case 'yellow':
    console.log('Using yellow Theme');
    selectedColors = colorThemes.yellow;
    break;
  default:
    console.log('Using Default Red Theme');
    selectedColors = colorThemes.red;
    break
}

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
      colors: selectedColors,
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
