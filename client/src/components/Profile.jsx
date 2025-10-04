import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import profileImage from "../assets/images/profile.jpeg";




function Profile() {
  return (




    <Container id="Profile" className="profile-container">
      <Typography variant="h1">
        Junior Software Developer
      </Typography>
      <Card className="profile-image-card">
        <CardActionArea>
          <CardMedia
            component="img"
            image= {profileImage}
            alt="Riikka Profile Image"
          />
        </CardActionArea>
      </Card>
      <Box className="profile-box">
        <Link target="_blank" href="https://github.com/riikka-kallio">
          <IconButton aria-label="github account of riikka kallio">
            <GitHubIcon className="profile-icon" />
          </IconButton>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/riikka-kallio-494817362/">
          <IconButton aria-label="linkedin account of riikka kallio">
            <LinkedInIcon className="profile-icon" />
          </IconButton>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/riikkaemiliakal/">
          <IconButton aria-label="instagram account of riikka kallio">
            <InstagramIcon className="profile-icon" />
          </IconButton>
        </Link>
      </Box>
    </Container>

  );
}

export default Profile;
