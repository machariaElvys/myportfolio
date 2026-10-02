const groups = [
  {
    number: "01",
    label: "INTERFACE CRAFT",
    title: "Clear, responsive interfaces",
    description:
      "Reusable React views, careful visual hierarchy, and interactions that adapt from desktop to mobile.",
    items: ["HTML", "CSS", "JavaScript", "React", "React Router", "Responsive UI", "Dark-mode theming", "Accessible patterns"],
    proof: "Artist Portfolio · Shamba-Smart · Kitchen Core · myportfolio",
  },
  {
    number: "02",
    label: "APPLICATION LOGIC",
    title: "Useful product workflows",
    description:
      "Stateful dashboards and record flows: add, search, edit, and remove data, then turn it into useful summaries.",
    items: ["React Hooks", "State-driven UI", "CRUD workflows", "IndexedDB", "Offline-first workflows", "Search & filters", "Favorites UX", "Yearly reporting"],
    proof: "Farm Management System · Shamba-Smart · Kitchen Core",
  },
  {
    number: "03",
    label: "BACK END & DATA",
    title: "APIs built around real records",
    description:
      "A full-stack foundation for authenticated users, dependable data storage, and a separate frontend and API.",
    items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy 2", "PostgreSQL", "SQLite", "JWT auth"],
    proof: "Farm Management System",
  },
  {
    number: "04",
    label: "DOMAIN LOGIC",
    title: "Models, signals, and automation",
    description:
      "Translate agricultural rules into simulated sensor feedback, crop-health signals, and practical irrigation actions.",
    items: ["Environmental simulation", "Crop-health scoring", "Threshold rules", "Alerts & insights", "Irrigation logic"],
    proof: "Shamba-Smart",
  },
];

const tools = ["Vite", "Git", "GitHub", "Cloudflare Pages", "Vercel"];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section reveal">
      <div className="section-wrap">
        <div className="section-intro"><span className="section-index">03 / TOOLKIT</span><span className="section-aside">SKILLS SHOWN IN THE WORK</span></div>
        <div className="skills-heading">
          <h2>Built around<br /><span>what the product needs.</span></h2>
          <p>My projects span polished front ends, full-stack record systems, and agricultural logic that responds to changing conditions.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <article className="skill-group" key={group.number}>
              <div className="skill-top"><span>{group.number} / {group.label}</span><span aria-hidden="true">↗</span></div>
              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>
              <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="skill-proof"><span>IN THE WORK</span><strong>{group.proof}</strong></div>
            </article>
          ))}
        </div>
        <div className="toolchain"><span>TOOLS &amp; SHIPPING</span><div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
      </div>
    </section>
  );
}
