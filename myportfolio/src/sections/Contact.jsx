import { useState } from "react";

const EMAIL = "machariaelvys@gmail.com";
const GITHUB = "https://github.com/machariaElvys";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "Visitor"}`);
    const body = encodeURIComponent(form.message || "");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container split">
        <div>
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionText">
            For collaborations, opportunities, or questions, reach out through email or socials.
          </p>

          <div className="contactLinks">
            <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="link" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>

         
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span className="label">Name</span>
            <input
              className="input"
              type="text"
              value={form.name}
              onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
              placeholder="Your name"
            />
          </label>

          <label className="field">
            <span className="label">Message</span>
            <textarea
              className="input textarea"
              value={form.message}
              onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
              placeholder="Write your message"
              rows="6"
            />
          </label>

          <button className="btn btnPrimary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}