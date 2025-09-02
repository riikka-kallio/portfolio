import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
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





function Skills() {
        return (
                <Container id="Skills" className="general-container">
                        <Typography variant="h2">
                                SKILLS
                        </Typography>
                        <Grid container className="skill-grid">

                                <Tooltip title="CSS" arrow>
                                        <Avatar alt="css icon" src={cssIcon}
                                                className="avatar-icon" />
                                </Tooltip>
                                <Tooltip title="HTML" arrow>
                                        <Avatar alt="html icon" src={htmlIcon}
                                                className="avatar-icon" />
                                </Tooltip>
                                <Tooltip title="Sass" arrow>
                                        <Avatar alt="sass icon" src={sassIcon}
                                                className="avatar-icon" />
                                </Tooltip>
                                <Tooltip title="Bootstrap" arrow>
                                        <Avatar alt="bootsrap icon" src={bootstrapIcon}
                                                className="avatar-icon" />
                                </Tooltip>

                                <Tooltip title="Docker" arrow>
                                <Avatar alt="docker icon" src={dockerIcon}
                                        className="avatar-icon" />
                                </Tooltip>

                        </Grid>

                        <Grid container className="skill-grid">
                        <Tooltip title="Express" arrow>
                                <Avatar alt="express icon" src={expressIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="Figma" arrow>
                                <Avatar alt="figma icon" src={figmaIcon}
                                        className="avatar-icon" />
                        </Tooltip>

                        <Tooltip title="JavaScript" arrow>
                                <Avatar alt="javascript icon" src={javascriptIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="MongoDB" arrow>
                                <Avatar alt="mongodb icon" src={mongodbIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        </Grid>


                        <Grid container className="skill-grid">
                        <Tooltip title="Next JS" arrow>
                                <Avatar alt="next js icon" src={nextjsIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="Node JS" arrow>
                                <Avatar alt="node js icon" src={nodejsIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="PostgreSQL" arrow>
                                <Avatar alt="postgresql icon" src={postgresqlIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="React" arrow>
                                <Avatar alt="react icon" src={reactIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="Tailwind" arrow>
                                <Avatar alt="tailwind icon" src={tailwindIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        </Grid>


                        <Grid container className="skill-grid">
                        <Tooltip title="Vite" arrow>
                                <Avatar alt="vite icon" src={viteIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="GitHub" arrow>
                                <Avatar alt="github icon" src={githubIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="TypeScript" arrow>
                                <Avatar alt="typescript icon" src={typescriptIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        <Tooltip title="Material UI" arrow>
                                <Avatar alt="material ui icon" src={muiIcon}
                                        className="avatar-icon" />
                        </Tooltip>
                        </Grid>

                </Container>
        )
}

export default Skills;