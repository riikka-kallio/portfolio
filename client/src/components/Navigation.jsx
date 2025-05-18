/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
 


function Navigation({
    isOpen = false,
    handleDrawerToggle = () =>
      console.error("no handleDrawerToggle function provided"),
    drawerWidth = 240,
  }) {

    return (
        <Box component="nav">
        
        <Drawer
          className="HeaderBar"
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": { 
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "hsl(0, 0%, 100%)"
            }
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            
            <List >
              <ListItem>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  component={NavLink}
                  to="/"
                >
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  component={NavLink}
                  to="/about"
                >
                  <ListItemText primary={"About Me"} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  component={NavLink}
                  to="/"
                >
                  <ListItemText primary={"Projects"} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  component={NavLink}
                  to="/"
                >
                  <ListItemText primary={"Skills"} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  component={NavLink}
                  to="/"
                >
                  <ListItemText primary={"Contact Form"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  }
  
  export default Navigation;