import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const openProject = (project) => setSelected(project);
  const closeProject = () => setSelected(null);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Projects</h2>
          <p className="muted">Open a project to view the case study.</p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={openProject} />
          ))}
        </div>
      </div>

      {selected ? <ProjectModal project={selected} onClose={closeProject} /> : null}
    </section>
  );
}