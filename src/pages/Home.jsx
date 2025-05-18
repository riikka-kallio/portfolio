import { Box } from "@mui/material";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import About from "../components/About";

export default function Home() {
  return (
    <Box id="Home">
      <Profile />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </Box>
  );
}
