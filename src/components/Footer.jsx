import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <motion.footer
      className="footer footer-minimal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="footer-inner footer-inner-minimal">
        <div className="footer-row">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/brillytics-logo.png" alt="" className="footer-logo-img" aria-hidden />
              <span className="footer-logo-text">Brillytics</span>
            </Link>
            <p className="footer-tagline">Brilliant Analytics, The Clever way.</p>
          </div>
          <nav className="footer-nav-inline">
            {links.map(({ to, label }) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </nav>
          <a href="mailto:hello@brillytics.com" className="footer-email-inline">hello@brillytics.com</a>
        </div>
        <div className="footer-row footer-row-bottom">
          <span>© {new Date().getFullYear()} Brillytics</span>
          <span className="footer-sep">·</span>
          <a href="/privacy">Privacy</a>
          <span className="footer-sep">·</span>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </motion.footer>
  );
}
