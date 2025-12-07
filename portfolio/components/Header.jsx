import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
              <Typography variant="h6" component="span">Riikka</Typography>
          </Link>
        </Box>
        {/* add nav links / icons here */}
      </Toolbar>
    </AppBar>
  );
}