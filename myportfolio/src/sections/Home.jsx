import portrait from "../assets/potrait.jpg";

function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
}

export default function Home() {
  return (
    <section id="home" className="section hero reveal is-visible">
      <div className="container heroGrid">
        <div className="heroText">
          <p className="eyebrow">Portfolio</p>
          <h1 className="headline">Macharia</h1>
          <p className="subhead">
            Full-Stack Developer focused on clean UI and solid APIs
          </p>

          <div className="heroActions">
            <button className="btn btnPrimary" type="button" onClick={() => goTo("projects")}>
              View Projects
            </button>
            <button className="btn btnSecondary" type="button" onClick={() => goTo("contact")}>
              Contact
            </button>
          </div>

          <div className="heroMeta">
            <span className="metaItem">React</span>
            <span className="metaItem">Flask</span>
            <span className="metaItem">PostgreSQL</span>
          </div>
        </div>

        <div className="heroMedia">
          <div className="portraitFrame">
            <img src={portrait} alt="Macharia portrait" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}