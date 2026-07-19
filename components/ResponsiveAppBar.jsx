import { useState } from 'react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#home' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT FORM', href: '#contact' },
];

export default function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">RIIKKA KALLIO</a>
      <button
        className="nav-hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
