import Image from 'next/image';
import PropTypes from 'prop-types';

const GitHubSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.5 0 12.26c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.74-4.04-1.66-4.04-1.66-.55-1.42-1.34-1.8-1.34-1.8-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.88 2.83 1.34 3.52 1.02.11-.8.42-1.34.76-1.65-2.67-.3-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25a11.3 11.3 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.7-2.8 5.75-5.48 6.05.43.38.81 1.12.81 2.27 0 1.64-.02 2.96-.02 3.36 0 .32.22.71.83.58C20.56 22.24 24 17.66 24 12.26 24 5.5 18.63 0 12 0z" />
  </svg>
);

const LinkSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 6" />
    <path d="M14 11a5 5 0 0 0-7.07 0L5.5 12.4a5 5 0 0 0 7.07 7.07L14 18" />
  </svg>
);

function ProjectCard({ project, accentColor }) {
  return (
    <div className="project-card-new">
      <div className="project-card-image-panel" style={{ background: accentColor }}>
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={220}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-icons">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
            <GitHubSVG />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
            <LinkSVG />
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
  accentColor: PropTypes.string.isRequired,
};

export default ProjectCard;
