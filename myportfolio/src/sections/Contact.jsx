const EMAIL = "machariaelvys@gmail.com";
const GITHUB = "https://github.com/machariaElvys";

export default function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-wrap">
        <div className="section-intro"><span className="section-index">04 / SAY HELLO</span><span className="section-aside">GOOD WORK STARTS WITH A CONVERSATION</span></div>
        <div className="contact-grid">
          <div className="contact-copy"><p className="contact-kicker">HAVE A GOOD ONE?</p><h2>Let’s make<br />something <span>matter.</span></h2><p>Have a project, collaboration, or question in mind? Send me a note and I’ll get back to you.</p><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<span aria-hidden="true">↗</span></a><a className="social-link" href={GITHUB} target="_blank" rel="noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a></div>
          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="contact-name">YOUR NAME</label>
            <input id="contact-name" name="name" type="text" placeholder="How should I address you?" required />
            <label htmlFor="contact-message">YOUR MESSAGE</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Tell me a little about it…" required />
            <button className="button button-lime" type="submit">Send a message <span aria-hidden="true">↗</span></button>
            <p className="form-note">Opens your email app with your message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
