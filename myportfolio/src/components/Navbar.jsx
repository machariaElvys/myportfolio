import { useEffect, useMemo, useState } from "react";

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

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [theme, setTheme] = useState("light");

  const sectionIds = useMemo(
    () => LINKS.map((l) => l.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);

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

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.05, 0.15, 0.25, 0.35, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  const onNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const id = href.replace("#", "");
    setActiveId(id);

    scrollToHash(href);
    window.history.replaceState(null, "", href);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
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

        <div className="navRight">
          <nav className="navDesktop" aria-label="Primary navigation">
            {LINKS.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = activeId === id;

              return (
                <a
                  key={l.href}
                  className={`navLink ${isActive ? "active" : ""}`}
                  href={l.href}
                  onClick={(e) => onNavClick(e, l.href)}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <button
            className="themeToggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>

          <button
            className="navToggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      <div className={`navMobile ${open ? "open" : ""}`}>
        <div className="container navMobileInner" aria-label="Mobile navigation">
          {LINKS.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = activeId === id;

            return (
              <a
                key={l.href}
                className={`navMobileLink ${isActive ? "active" : ""}`}
                href={l.href}
                onClick={(e) => onNavClick(e, l.href)}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}