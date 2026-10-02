export default function About() {
  return (
    <section id="about" className="section about-section reveal">
      <div className="section-wrap">
        <div className="section-intro"><span className="section-index">01 / ABOUT</span><span className="section-aside">A LITTLE ABOUT HOW I WORK</span></div>
        <div className="about-grid">
          <h2>I care about the<br />details <span>and</span> the<br />big picture.</h2>
          <div className="about-copy">
            <p className="about-lead">I build web applications with a focus on clarity, performance, and maintainable code.</p>
            <p>I enjoy bringing clean interfaces and dependable APIs together from the first sketch of an idea to the details that make a product feel easy to use.</p>
            <p>Right now, I’m growing my full-stack practice through hands-on projects and turning new ideas into useful tools.</p>
            <a className="inline-link" href="#contact">A project in mind? Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="about-values">
          <div><span>01</span><strong>Thoughtful interfaces</strong><p>Clear layouts that make the next step obvious.</p></div>
          <div><span>02</span><strong>Reliable foundations</strong><p>Maintainable code and APIs built with care.</p></div>
          <div><span>03</span><strong>Real-world usefulness</strong><p>Ideas shaped around the people using them.</p></div>
        </div>
      </div>
    </section>
  );
}
