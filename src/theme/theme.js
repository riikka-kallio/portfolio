import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: 'hsl(269 70% 85.2%)',
      main: 'hsl(269 70% 52.6%)',
      dark: 'hsl(269 70% 40%)',
      contrastText: 'hsl(0 0% 9%)',
    },
    secondary: {
      light: 'hsl(248 70% 90%)',
      main: 'hsl(248 70% 79%)',
      dark: 'hsl(248 70% 40%)',
      contrastText: 'hsl(0 0% 9%)',
    },
    transparent: {
      main: 'hsl(0, 0%, 100%, .25)'
    },
  },
  typography: {
    fontFamily: [
      'Oswald',
      'Bangers',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
    ,
    h1: {
      fontFamily:'Bangers'
    },
    h2: {
      fontFamily:'Bangers'
    },
    h3: {
      fontFamily:'Bangers'
    },
    h4: {
      fontFamily:'Bangers'
    },
    h5: {
      fontFamily:'Bangers'
    },
    h6: {
      fontFamily:'Bangers'
    },
  },
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1280,
  //   },
  // },
});

export default theme;