import { useEffect, useState } from "react";

const links = [
  ["About", "about"],
  ["Work", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current?.target.id) setActive(current.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.4] }
    );

    ["home", ...links.map(([, id]) => id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#111915" : "#f7f6f1");
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Keep the current page theme even when storage is unavailable.
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Macharia, home">
            <span className="wordmark-mark">M</span>
            <span>macharia<span className="wordmark-period">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, id]) => (
              <a key={id} className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z" /></svg>
            )}
          </button>
          <button
            className={`menu-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<span aria-hidden="true">↗</span></a>
          ))}
          <a href="#contact" onClick={closeMenu}>Let’s talk<span aria-hidden="true">↗</span></a>
        </nav>
      </header>
    </>
  );
}
