import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";
// import { cardStyles } from './styles';

  function BasicCard() {
    return (
        <Card className="card">
        <CardActionArea>
          <CardMedia/>
          <Box sx={{customBox}}>
            <Link>
              <IconButton>
                  <GitHubIcon sx={{customIcon}}/>
              </IconButton>
          </Link>
          <Link>
              <IconButton>
                  <LinkIcon sx={{customIcon}}/>
              </IconButton>
          </Link>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" sx={{customDescription}}>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default BasicCard