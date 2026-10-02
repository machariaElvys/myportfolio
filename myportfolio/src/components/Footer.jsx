export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">M</span><span>macharia<span className="wordmark-period">.</span></span></a>
        <p>Thoughtfully built, from top to bottom.</p>
        <a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Macharia</span><span>Made with care</span></div>
    </footer>
  );
}
