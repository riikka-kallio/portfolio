import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import cssIcon from "../assets/images/css3_icon.png";
import htmlIcon from "../assets/images/html5_icon.png";
import sassIcon from "../assets/images/sass_icon.png";
import bootstrapIcon from "../assets/images/bootstrap_icon.png";
import dockerIcon from "../assets/images/docker_icon.png";
import expressIcon from "../assets/images/Express-Js-256.png";
import figmaIcon from "../assets/images/figma_icon.png";
import javascriptIcon from "../assets/images/javascript_icon.png";
import mongodbIcon from "../assets/images/mongodb_icon.png";
import nextjsIcon from "../assets/images/Next.js-256.png";
import nodejsIcon from "../assets/images/nodejs.png";
import postgresqlIcon from "../assets/images/postgresql-icon.png";
import reactIcon from "../assets/images/react_native_icon.png";
import tailwindIcon from "../assets/images/tailwind_css_icon.png";
import viteIcon from "../assets/images/Vite.js.png";
import githubIcon from "../assets/images/github-logo.png";
import typescriptIcon from "../assets/images/typescript.png";
import muiIcon from "../assets/images/mui.png";
import Grid from "@mui/material/Grid2";
import SkillAvatar from "./common/SkillAvatar/SkillAvatar";





function Skills() {
        return (
                <Container id="Skills" className="general-container">
                        <Typography variant="h2">
                                SKILLS
                        </Typography>
                        <Grid container className="skill-grid">
                                <SkillAvatar title="CSS" alt="css icon" src={cssIcon} />
                                <SkillAvatar title="HTML" alt="html icon" src={htmlIcon} />
                                <SkillAvatar title="Sass" alt="sass icon" src={sassIcon} />
                                <SkillAvatar title="Bootstrap" alt="bootstrap icon" src={bootstrapIcon} />
                                <SkillAvatar title="Docker" alt="docker icon" src={dockerIcon} />
                        </Grid>

                        <Grid container className="skill-grid">
                                <SkillAvatar title="Express" alt="express icon" src={expressIcon} />
                                <SkillAvatar title="Figma" alt="figma icon" src={figmaIcon} />
                                <SkillAvatar title="JavaScript" alt="javascript icon" src={javascriptIcon} />
                                <SkillAvatar title="MongoDB" alt="mongodb icon" src={mongodbIcon} />
                        </Grid>

                        <Grid container className="skill-grid">
                                <SkillAvatar title="Next JS" alt="next js icon" src={nextjsIcon} />
                                <SkillAvatar title="Node JS" alt="node js icon" src={nodejsIcon} />
                                <SkillAvatar title="PostgreSQL" alt="postgresql icon" src={postgresqlIcon} />
                                <SkillAvatar title="React" alt="react icon" src={reactIcon} />
                                <SkillAvatar title="Tailwind" alt="tailwind icon" src={tailwindIcon} />
                        </Grid>

                        <Grid container className="skill-grid">
                                <SkillAvatar title="Vite" alt="vite icon" src={viteIcon} />
                                <SkillAvatar title="GitHub" alt="github icon" src={githubIcon} />
                                <SkillAvatar title="TypeScript" alt="typescript icon" src={typescriptIcon} />
                                <SkillAvatar title="Material UI" alt="material ui icon" src={muiIcon} />
                        </Grid>

                </Container>
        )
}

export default Skills;