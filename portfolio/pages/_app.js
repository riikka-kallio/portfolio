import "@/styles/globals.css";
import "@/styles/style.css";
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}

