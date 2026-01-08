import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Profile() {
    return (
        <Box id="Profile" className="profile-container" sx={{ textAlign: 'center', py: 6 }}>

            <Box className="profile-image-wrapper">
                <Image
                    className="profile-image-card"
                    src="/images/profile.jpeg"
                    alt="Riikka Profile Image"
                    width={200}
                    height={200}
                    priority
                />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                <Link href="https://github.com/riikka-kallio" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="github account of riikka kallio">
                        <GitHubIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/riikka-kallio-494817362/" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="linkedin account of riikka kallio">
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.instagram.com/riikkaemiliakal/" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="instagram account of riikka kallio">
                        <InstagramIcon />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
}

