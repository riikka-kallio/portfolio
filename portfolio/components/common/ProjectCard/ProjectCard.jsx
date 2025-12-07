// import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard({ project }) {
    return (
        <Card className="project-card">
            <CardActionArea component="div">
                <Box className="project-media">
                    <Image
                        src={project.image}
                        alt={project.alt}
                        width={600}
                        height={360}
                        className="project-image"
                        priority={false}
                    />
                </Box>
                <Box className="project-box">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <GitHubIcon className="project-icon" />
                        </IconButton>
                    </Link>
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkIcon className="project-icon" />
                        </IconButton>
                    </Link>
                </Box>
                <CardContent>
                    <Typography variant="h5" component="div" className="project-title">
                        {project.title}
                    </Typography>
                    <Typography className="project-description">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
        liveLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;