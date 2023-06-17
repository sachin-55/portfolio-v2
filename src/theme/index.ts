import { ColorsType } from '../@types/colors';

interface Colors {
  [key: string]: ColorsType;
}

export const colors: Colors = {
  main: {
    name: 'main',
    primary: '#3066BE',
    secondary: '#EABA6B',
    accent: '#BE30AD',
    highlight: '#6BEABA',
    highlight2: '#6B9BEA',
    gray: '#c0c0c0',
    background: '#FAF4EB',
    background2: '#EBF1FA',
    text: '#0C090A',
    lightText: '#E5E4E2'
  },
  light: {
    name: 'light',
    primary: '#80a4df',
    secondary: '#f3d8ab',
    accent: '#e69ede',
    highlight: '#a8f3d6',
    highlight2: '#a8c4f3',
    gray: '#696969',
    background: '#38270e',
    background2: '#0c1b31',
    text: '#E5E4E2',
    textDark: '#0C090A'
  }
};
export const getColors = (colorThemeName: string) => colors[colorThemeName];

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
};
