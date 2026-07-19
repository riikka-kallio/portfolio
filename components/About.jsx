import Image from 'next/image';

export default function About() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-photo-wrapper">
            <Image
              src="/images/profile.jpeg"
              alt="Riikka Kallio profile photo"
              width={260}
              height={260}
              priority
            />
          </div>
          <div className="hero-socials">
            <a href="https://github.com/riikka-kallio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.5 0 12.26c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.74-4.04-1.66-4.04-1.66-.55-1.42-1.34-1.8-1.34-1.8-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.88 2.83 1.34 3.52 1.02.11-.8.42-1.34.76-1.65-2.67-.3-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25a11.3 11.3 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.7-2.8 5.75-5.48 6.05.43.38.81 1.12.81 2.27 0 1.64-.02 2.96-.02 3.36 0 .32.22.71.83.58C20.56 22.24 24 17.66 24 12.26 24 5.5 18.63 0 12 0z" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="https://www.linkedin.com/in/riikka-kallio-494817362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="https://www.instagram.com/riikkaemiliakal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.47.72-2.14 1.39A5.9 5.9 0 0 0 .61 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.14a5.9 5.9 0 0 0 2.14 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.14-1.39 5.9 5.9 0 0 0 1.39-2.14c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.14A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
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
