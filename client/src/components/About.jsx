import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container id="About Me" className="general-container">
      <Typography variant="h2">
        About Me
      </Typography>
      <Typography className="about-description">
        My name is Riikka and &nbsp;I&apos;m&nbsp; a Junior Software developer. &nbsp;I&apos;m&nbsp; proficient in CSS, HTML, JavaScript, React, TypeScript, Node.js, My-SQL.
        &nbsp;I&apos;m&nbsp; currently working as a Technical Support and looking to change careers in becoming a Web Developer/Software Developer.
      </Typography>
    </Container>
  )
}
