export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container footerRow">
        <p className="muted">© {year} Macharia</p>
        <div className="footerLinks">
          <a className="footerLink" href="#home">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}