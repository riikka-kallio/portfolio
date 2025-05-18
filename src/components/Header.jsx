import { useState } from 'react';
import Box from '@mui/material/Box';

// import Navigation from './Navigation';
import ResponsiveAppBar from './ResponsiveAppBar';

function Header() {

    const [setIsOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsOpen((prevState) => {
            // console.log(prevState);
            return !prevState;
        });
    };

    return (
        <Box sx={{ display: "flex" }}>
            <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle} />
            {/* <Navigation isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} /> */}
        </Box>
    )
}

export default Header;