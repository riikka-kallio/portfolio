// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Layout from "./components/Layout";
import { StyledEngineProvider } from '@mui/material/styles';
import "./styles/style.css"
import "./styles/fonts.css";


function App() {
  return (
    <>
      <Router>
        <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
              </Route>
            </Routes>
        </StyledEngineProvider>
      </Router>
    </>
  );
}

export default App
