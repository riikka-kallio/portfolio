// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Layout from "./components/Layout";
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme";
import "./styles/style.css"
import "./styles/fonts.css";


function App() {
  return (
    <>
      <Router>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
              </Route>
            </Routes>
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </>
  );
}

export default App
