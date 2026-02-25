const FRONTEND = ["HTML", "CSS", "JavaScript", "React"];
const BACKEND = ["Flask", "REST APIs", "PostgreSQL"];
const TOOLS = ["Git", "GitHub", "Vercel", "Render"];

function Group({ title, items }) {
  return (
    <div className="skillGroup">
      <h3 className="skillTitle">{title}</h3>
      <div className="stack">
        {items.map((i) => (
          <span className="tag" key={i}>
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Skills</h2>
          <p className="muted">A focused stack for building full-stack web apps.</p>
        </div>

        <div className="skillsGrid">
          <Group title="Frontend" items={FRONTEND} />
          <Group title="Backend" items={BACKEND} />
          <Group title="Tools" items={TOOLS} />
        </div>
      </div>
    </section>
  );
}