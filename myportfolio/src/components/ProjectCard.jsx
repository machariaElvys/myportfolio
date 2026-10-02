import ProjectVisual from "./ProjectVisual.jsx";

function Arrow() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>;
}

export default function ProjectCard({ project, onDetails }) {
  return (
    <article className={`project-card project-${project.id}`}>
      <div className="project-card-art">
        <ProjectVisual type={project.id} />
        <span className={`project-status${project.status === "Live" ? " status-live" : " status-progress"}`}>
          <span />{project.status}
        </span>
      </div>
      <div className="project-card-copy">
        <div className="project-card-overline"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-footer">
          <div className="project-tags" aria-label="Technology stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-actions">
            <button className="text-action" type="button" onClick={() => onDetails(project)}>Details <Arrow /></button>
            {project.liveUrl && <a className="icon-action" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}><Arrow /></a>}
            {project.repoUrl && <a className="icon-action" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><span aria-hidden="true">⌘</span></a>}
          </div>
        </div>
      </div>
    </article>
  );
}
