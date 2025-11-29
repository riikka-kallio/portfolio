import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Layout;