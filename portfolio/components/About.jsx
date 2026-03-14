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

      <Typography className="about-description">
        Hello! &#128075; My name is Riikka and&nbsp;I&apos;m&nbsp;a Junior Software developer.&nbsp;I&apos;m&nbsp;passionate about accessibility and building user-friendly and responsive applications.&nbsp;I&apos;m&nbsp;proficient in CSS, HTML, JavaScript and React.&nbsp;I&apos;m&nbsp;currently working as a Product Specialist and looking to change careers in becoming a Web Developer/Software Developer.
      </Typography>

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