import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Projects</h2>
          <p className="muted">
            Featured work. More projects will be added as they ship.
          </p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}