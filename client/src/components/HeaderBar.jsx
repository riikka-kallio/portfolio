/* eslint-disable react/prop-types */

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


function HeaderBar({
  handleDrawerToggle = () =>
    console.log("no handleDrawerToggle function provided"),
}) {
  return (
    <div className="header-bar">
      <AppBar component="nav" sx={{ mb: 2, backdropFilter: "blur(3px)",
      backgroundColor: "transparent.main"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Riikka Kallio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;

