export default function ProjectCard({ project, onToggle }) {
  return (
    <article
      className="card"
      onClick={() => onToggle(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle(project);
      }}
      aria-label={`Open project: ${project.title}`}
    >
      <div className="cardMedia">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </div>

      <div className="cardBody">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardText">{project.description}</p>

        <div className="stack">
          {project.stack.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="cardActions">
          {project.liveUrl ? (
            <a
              className="btn btnPrimary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live
            </a>
          ) : (
            <span className="btn btnDisabled" aria-disabled="true">
              Live
            </span>
          )}

          {project.repoUrl ? (
            <a
              className="btn btnSecondary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          ) : (
            <span className="btn btnDisabled" aria-disabled="true">
              GitHub
            </span>
          )}

          <button
            className="btn btnSecondary"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(project);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}