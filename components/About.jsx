import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-photo-wrapper">
            <Image
              src="/images/profile.jpeg"
              alt="Riikka Kallio profile photo"
              width={350}
              height={350}
              priority
            />
          </div>
          <div className="hero-socials">
            <a href="https://github.com/riikka-kallio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: 36 }} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="https://www.linkedin.com/in/riikka-kallio-494817362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 36 }} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="https://www.instagram.com/riikkaemiliakal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon sx={{ fontSize: 36 }} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <h1>Junior Software Developer</h1>
          <p>Hello! My name is Riikka and I&apos;m a Junior Software developer.</p>
          <p>
            With a degree in Biomedical Science and a professional background as Product Specialist,
            I&apos;ve always been passionate about helping people navigate complex systems. While I&apos;m
            currently working as a Product Specialist, I&apos;m now moving into software development full-time.
          </p>
          <p>
            I&apos;ve always been drawn to how things work, whether it&apos;s in a lab or in a codebase.
            These days I&apos;m focused on building clean, responsive applications using React, JavaScript,
            HTML, and CSS.
          </p>
          <p>
            Because of my science background, I&apos;m naturally detail-oriented and care about
            accessibility, making sure the tools I build actually work for everyone. I&apos;m excited to
            bring my analytical mindset to a new team and start my career as a Software Developer.
          </p>
        </div>
      </div>
    </section>
  );
}
