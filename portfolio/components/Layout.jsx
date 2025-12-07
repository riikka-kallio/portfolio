'use client'

// ...existing imports...
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Box component="main" sx={{ minHeight: "calc(100vh - 160px)", py: 4 }}>
                <Container>
                    {children}
                </Container>
            </Box>
            <Footer />
        </>
    );
}