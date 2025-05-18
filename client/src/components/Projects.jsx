// import { useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


function Projects() {


  return (
    <Container id="Projects" className="general-container">
      <Typography variant="h2">
        Projects
      </Typography>
      <Grid container className="project-grid">

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/solarsystem.jpeg"
                alt="solarsystem image"
              />
              <Box className="project-box">
                <Link href="https://github.com/riikka-kallio/svg-project-solar-system">
                  <IconButton >
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://6682b9551ce4f920aa2ac5a3--ornate-muffin-e6db46.netlify.app/">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Creative Challenge
                </Typography>
                <Typography className="project-description">
                  In this challenge I built Solar System by using HTML and CSS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/fourcardfeature.jpeg"
                alt="four cards image"
              />
              <Box className="project-box">
                <Link href="https://github.com/riikka-kallio">
                  <IconButton>
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://fastidious-pie-e53f68.netlify.app/">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Four Card Feature
                </Typography>
                <Typography className="project-description">
                  In this project I built a four card feature from Figma design by using HTML and CSS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/snakegame.jpeg"
                alt="snake game image"
              />
              <Box className="project-box">
                <Link href="">
                  <IconButton>
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://66eb17e57e08fb739564971f--endearing-marigold-8879a0.netlify.app/">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Snake Game
                </Typography>
                <Typography className="project-description">
                  Snake Game I built with Javascript, HTML and CSS.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/weatherapi.jpeg"
                alt="weather and new app image"
              />
              <Box className="project-box">
                <Link href="https://github.com/riikka-kallio">
                  <IconButton>
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://vocal-cupcake-d2f9e9.netlify.app/">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather and local news API
                </Typography>
                <Typography className="project-description">
                  Openweathermap API and Gnews API
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/christmasgame.jpeg"
                alt="christmas game image"
              />
              <Box className="project-box">
                <Link href="https://github.com/riikka-kallio">
                  <IconButton>
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://github.com/riikka-kallio">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Christmas Game (Hackathon challenge)
                </Typography>
                <Typography className="project-description">
                  Christmas Game we built with React. This was a fun Hackathon challenge!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card className="project-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="/public/booksapp.jpeg"
                alt="project image"
              />
              <Box className="project-box">
                <Link href="https://github.com/riikka-kallio/c18-next-books">
                  <IconButton>
                    <GitHubIcon className="project-icon" />
                  </IconButton>
                </Link>
                <Link href="https://c18-next-books.vercel.app/">
                  <IconButton>
                    <LinkIcon className="project-icon" />
                  </IconButton>
                </Link>
              </Box>
              <CardContent>
                <Typography variant="h5" component="div">
                  Serverless Book App
                </Typography>
                <Typography className="project-description">
                  This app uses serverless functions made with Next.js
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>

      {/* <Box sx={{display:"flex", justifyContent:"center", mt: 10}}>
        <Card sx={{ maxWidth: 345, mx: 10}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image="/public/snakegame.jpeg"
              alt="snake game image"
            />
            <CardContent>
              <Typography  variant="h5" component="div">
                Snake Game
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Snake Game I built with Javascript, HTML and CSS.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        <Card sx={{ maxWidth: 345, mx: 10}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image=""
              alt="project image"
            />
            <CardContent>
              <Typography  variant="h5" component="div">
                Project
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lorem ipsum
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Box> */}



    </Container>
  )
}

export default Projects;