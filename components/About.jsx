import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
  return (

    <Container id="About Me" className="profile-container">
        <Typography component="h1" variant="h1" gutterBottom>
          Junior Software Developer
        </Typography>
      <Box className="about-box">
        <Typography className="about-description">
          Hello! 👋 My name is Riikka and I'm a Junior Software developer.
        </Typography>
  
        <Typography className="about-description">
          With a degree in Biomedical Science and a professional background as Product Specialist, I've always been passionate about helping people navigate complex systems.
          While I'm currently working as a Product Specialist, I'm now moving into software development full-time.
        </Typography>
  
        <Typography className="about-description">
          I've always been drawn to how things work, whether it's in a lab or in a codebase.
          These days I'm focused on building clean, responsive applications using React, JavaScript, HTML, and CSS.
        </Typography>
  
        <Typography className="about-description">
          Because of my science background, I'm naturally detail-oriented and care about accessibility making sure the tools I build actually work for everyone.
          I'm excited to bring my analytical mindset to a new team and start my career as a Software Developer.
        </Typography>
      </Box>

      <Box className="profile-image-wrapper">
        <Image
          className="profile-image"
          src="/images/profile.jpeg"
          alt="Riikka Profile Image"
          width={400}
          height={400}
          priority
        />
      </Box>

      <Box className="icon-wrapper">
        <Link href="https://github.com/riikka-kallio" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="github account of riikka kallio">
            <GitHubIcon className="profile-icon" />
          </IconButton>
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
        <Link href="https://www.linkedin.com/in/riikka-kallio-494817362/" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="linkedin account of riikka kallio">
            <LinkedInIcon className="profile-icon" />
          </IconButton>
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
        <Link href="https://www.instagram.com/riikkaemiliakal/" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="instagram account of riikka kallio">
            <InstagramIcon className="profile-icon" />
          </IconButton>
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
      </Box>
    </Container>
  )
}