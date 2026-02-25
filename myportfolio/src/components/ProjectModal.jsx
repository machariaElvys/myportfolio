import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    // focus close button for accessibility
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const cs = project.caseStudy || {};

  const Section = ({ title, children }) => (
    <section className="modalSection">
      <h3 className="modalH3">{title}</h3>
      <div className="modalText">{children}</div>
    </section>
  );

  const onOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onMouseDown={onOverlayMouseDown}
    >
      <div className="modal">
        <header className="modalHeader">
          <div>
            <p className="modalEyebrow">Case Study</p>
            <h2 className="modalTitle">{project.title}</h2>
            <p className="modalSubtitle">
              {cs.subtitle || project.description}
            </p>
          </div>

          <button
            ref={closeBtnRef}
            className="modalClose"
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            Close
          </button>
        </header>

        <div className="modalBody">
          <div className="modalTop">
            <div className="modalImageFrame">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>

            <div className="modalMeta">
              <div className="modalMetaBlock">
                <p className="modalMetaTitle">Stack</p>
                <div className="stack">
                  {project.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modalActions">
                {project.liveUrl ? (
                  <a
                    className="btn btnPrimary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
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
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="btn btnDisabled" aria-disabled="true">
                    GitHub
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="modalGrid">
            <Section title="Overview">
              <p>{cs.overview || project.description}</p>
            </Section>

            {cs.problem ? (
              <Section title="Problem">
                <p>{cs.problem}</p>
              </Section>
            ) : null}

            {cs.solution ? (
              <Section title="Solution">
                <p>{cs.solution}</p>
              </Section>
            ) : null}

            {Array.isArray(cs.features) && cs.features.length ? (
              <Section title="Key Features">
                <ul className="modalList">
                  {cs.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {cs.challenges ? (
              <Section title="Challenges">
                <p>{cs.challenges}</p>
              </Section>
            ) : null}

            {Array.isArray(cs.nextSteps) && cs.nextSteps.length ? (
              <Section title="Next Steps">
                <ul className="modalList">
                  {cs.nextSteps.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}