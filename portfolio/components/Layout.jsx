import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
    return (
        <>
            <CssBaseline />
                <Header />
                <Box component="main">
                    <Container>
                        {children}
                    </Container>
                </Box>
                <Footer />
        </>
    );
}