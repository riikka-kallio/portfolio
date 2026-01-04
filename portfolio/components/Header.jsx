import { useState } from 'react';
import Box from '@mui/material/Box';
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
        </Box>
    )
}

export default Header;