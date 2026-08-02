import Image from 'next/image';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard({ project, priority = false }) {
  return (
    <div className="project-card-new">
      <div className="project-card-image-panel">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 450px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-icons">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
            <GitHubIcon sx={{ fontSize: 28 }} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
            <LinkIcon sx={{ fontSize: 28 }} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
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
  priority: PropTypes.bool,
};

export default ProjectCard;
