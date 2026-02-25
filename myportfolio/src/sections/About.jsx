export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container split">
        <div>
          <h2 className="sectionTitle">About</h2>
          <p className="sectionText">
            I build modern web applications with a focus on clarity, performance, and maintainable code.
            I enjoy shipping clean interfaces backed by reliable APIs.
          </p>
          <p className="sectionText">
            Right now, I am improving my full-stack skills through hands-on projects and consistent practice.
          </p>
        </div>

        <div className="highlights">
          <div className="highlight">
            <p className="highlightTitle">What I do</p>
            <p className="muted">Frontend, backend, and API integration</p>
          </div>
          <div className="highlight">
            <p className="highlightTitle">What I value</p>
            <p className="muted">Clean UI, solid logic, and good UX</p>
          </div>
          <div className="highlight">
            <p className="highlightTitle">What I am building</p>
            <p className="muted">Shamba-Smart now, Recipe Hub next</p>
          </div>
        </div>
      </div>
    </section>
  );
}