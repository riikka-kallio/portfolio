// import { useState } from 'react'
import "@/styles/globals.css";
import Home from '@/pages/index.js';
// import Layout from "@/components/Layout";
import { StyledEngineProvider } from '@mui/material/styles';
import "@/styles/style.css"
import { CssBaseline } from "@mui/material";
// import "./styles/fonts.css";


export default function App({ Component, pageProps }) {
  return (
    <>
     <CssBaseline>
          <StyledEngineProvider injectFirst>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />}/>
                </Route>
              </Routes>
          </StyledEngineProvider>
     </CssBaseline>
    </>
  );
}

