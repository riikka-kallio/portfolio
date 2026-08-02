import "@/styles/globals.css";
import { Inter, Poppins, Cardo } from 'next/font/google';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cardo',
});

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-inter), "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${poppins.variable} ${cardo.variable}`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
