import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const toggleProject = (project) => {
    setSelected((prev) => (prev?.id === project.id ? null : project));
  };

  const closeProject = () => setSelected(null);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Projects</h2>
          <p className="muted">Tap a card to open. Tap it again to close.</p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onToggle={toggleProject} />
          ))}
        </div>
      </div>

      {selected ? <ProjectModal project={selected} onClose={closeProject} /> : null}
    </section>
  );
}