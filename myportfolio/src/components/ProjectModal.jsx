import { useEffect, useRef } from "react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const study = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-scrim" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-heading">
          <div><span className="modal-kicker">PROJECT {project.number} <span>·</span> {project.status.toUpperCase()}</span><h2 id="modal-title">{project.title}</h2></div>
          <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close project details">×</button>
        </div>
        <div className="modal-visual"><ProjectVisual type={project.id} compact /></div>
        <div className="modal-body">
          <div className="modal-summary"><p className="modal-label">THE PROJECT</p><p>{study.overview}</p></div>
          <div className="modal-story">
            <div><p className="modal-label">THE CHALLENGE</p><p>{study.problem}</p></div>
            <div><p className="modal-label">THE APPROACH</p><p>{study.solution}</p></div>
          </div>
          <div className="modal-bottom">
            <div><p className="modal-label">TOOLS &amp; FOCUS</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="modal-links">
              {project.liveUrl && <a className="button button-dark" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <span aria-hidden="true">↗</span></a>}
              {project.repoUrl && <a className="button button-outline" href={project.repoUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
          {study.features?.length > 0 && <div className="modal-features"><p className="modal-label">HIGHLIGHTS</p><ul>{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>}
        </div>
      </section>
    </div>
  );
}
