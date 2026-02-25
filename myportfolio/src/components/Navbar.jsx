import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function scrollToHash(hash) {
  const id = (hash || "").replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 840) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="siteHeader">
      <div className="container navRow">
        <a
          className="brand"
          href="#home"
          onClick={(e) => onNavClick(e, "#home")}
        >
          Macharia
        </a>

        <nav className="navDesktop" aria-label="Primary navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="navLink"
              href={l.href}
              onClick={(e) => onNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="navToggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <div className={`navMobile ${open ? "open" : ""}`}>
        <div className="container navMobileInner" aria-label="Mobile navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="navMobileLink"
              href={l.href}
              onClick={(e) => onNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}