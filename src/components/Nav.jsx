import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="nav"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/brillytics-logo.png" alt="" className="nav-logo-img" aria-hidden />
          <span className="nav-logo-text">Brillytics</span>
        </Link>
        <nav className="nav-links">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`nav-link nav-pill ${isActive ? "active" : ""}`}
              >
                <span className={`nav-dot ${isActive ? "active" : ""}`} aria-hidden="true" />
                {label}
              </Link>
            );
          })}
        </nav>
        <Link to="/contact" className="nav-cta">
          Get in touch
        </Link>
        <button
          type="button"
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
