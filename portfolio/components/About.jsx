import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
   
    <Container id="About Me">
      <Typography variant="h2" component="h1" gutterBottom>
        Junior Software Developer
      </Typography>
   
      <Typography className="about-description">
        Hello! &#128075; My name is Riikka and&nbsp;I&apos;m&nbsp;a Junior Software developer.&nbsp;I&apos;m&nbsp;passionate about accessibility and building user-friendly and responsive applications.&nbsp;I&apos;m&nbsp;proficient in CSS, HTML, JavaScript and React.&nbsp;I&apos;m&nbsp;currently working as a Technical Support and looking to change careers in becoming a Web Developer/Software Developer.
      </Typography>
    </Container>
  )
}