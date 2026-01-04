import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const cssIcon = "/images/css3_icon.png";
const htmlIcon = "/images/html5_icon.png";
const sassIcon = "/images/sass_icon.png";
const bootstrapIcon = "/images/bootstrap_icon.png";
const dockerIcon = "/images/docker_icon.png";
const expressIcon = "/images/Express-Js-256.png";
const figmaIcon = "/images/figma_icon.png";
const javascriptIcon = "/images/javascript_icon.png";
const mongodbIcon = "/images/mongodb_icon.png";
const nextjsIcon = "/images/Next.js-256.png";
const nodejsIcon = "/images/nodejs.png";
const postgresqlIcon = "/images/postgresql-icon.png";
const reactIcon = "/images/react_native_icon.png";
const tailwindIcon = "/images/tailwind_css_icon.png";
const viteIcon = "/images/Vite.js.png";
const githubIcon = "/images/github-logo.png";
const typescriptIcon = "/images/typescript.png";
const muiIcon = "/images/mui.png";
import Grid from "@mui/material/Grid";
import SkillAvatar from "./common/SkillAvatar/SkillAvatar";





function Skills() {
    return (
        <Container id="Skills" className="general-container">
            <Typography variant="h2">
                Skills
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