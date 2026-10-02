import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section projects-section reveal">
      <div className="section-wrap">
        <div className="section-intro"><span className="section-index">02 / SELECTED WORK</span><span className="section-aside">A FEW THINGS I’VE MADE</span></div>
        <div className="projects-heading"><h2>Built with<br /><span>intention.</span></h2><p>A selection of product ideas, interfaces, and tools — each one a chance to make something clearer and more useful.</p></div>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} onDetails={setSelected} />)}
        </div>
        <div className="projects-footnote"><span>MORE PROJECTS ARE TAKING SHAPE</span><span>↘</span></div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
