import ProjectVisual from "../components/ProjectVisual.jsx";

export default function Home() {
  return (
    <section id="home" className="hero-section reveal is-visible">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> FULL-STACK DEVELOPER <span className="eyebrow-separator">/</span> PORTFOLIO</p>
          <h1>Good ideas,<br />made <span>useful.</span></h1>
          <p className="hero-description">I’m Macharia — a developer who turns thoughtful ideas into clear, reliable web experiences.</p>
          <div className="hero-buttons">
            <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-text" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-stack"><span>BUILDING WITH</span><i>React</i><b>·</b><i>FastAPI</i><b>·</b><i>PostgreSQL</i></div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-note"><span>SELECTED WORK</span><span>01 — 03</span></div>
          <div className="showcase-art"><ProjectVisual type="shamba" compact /></div>
          <div className="showcase-caption"><div><span>FEATURED PROJECT</span><strong>Shamba-Smart</strong></div><a href="#projects" aria-label="See all projects">↗</a></div>
          <span className="showcase-orbit orbit-one" /><span className="showcase-orbit orbit-two" />
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i>↓</i></a>
    </section>
  );
}
