const skills = [
  'React',
  'JavaScript',
  'HTML & CSS',
  'Next.js',
  'Git',
  'REST APIs',
  'Accessibility',
  'Responsive Design',
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-pills">
          {skills.map(skill => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
