import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconUsers, IconBulb, IconTarget } from "./../components/Icons";
import "./About.css";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

const stats = [
  { value: "10+", label: "Years in analytics" },
  { value: "50+", label: "Teams empowered" },
  { value: "100%", label: "Client-focused" },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="section">
          <motion.div initial="initial" animate="animate" variants={stagger} className="about-hero-inner">
            <motion.span className="about-badge" variants={fadeUp}>
              <IconUsers size={14} className="about-badge-icon" aria-hidden />
              Who we are
            </motion.span>
            <motion.h1 className="page-title" variants={fadeUp}>
              We turn data into decisions.
            </motion.h1>
            <motion.p className="page-sub" variants={fadeUp}>
              Brillytics was built by people who were tired of dashboards that looked good but didn’t answer the right questions. We focus on clarity, not clutter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="about-strip">
        <div className="section">
          <motion.div
            className="about-stats"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} className="about-stat" variants={fadeUp}>
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="about-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our approach
            </motion.h2>
            <motion.div
              className="about-cols"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div className="about-col" variants={fadeUp}>
                <IconBulb className="about-col-icon" size={28} aria-hidden />
                <h3>Clarity first</h3>
                <p>We strip away noise so you see what matters. Every report and dashboard is designed to answer one question: what should I do next?</p>
              </motion.div>
              <motion.div className="about-col" variants={fadeUp}>
                <IconTarget className="about-col-icon" size={28} aria-hidden />
                <h3>Built with you</h3>
                <p>We don’t hand over a generic tool. We work alongside your team to model your business, your metrics, and your goals.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="section">
          <motion.div
            className="about-cta-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="about-cta-text">Ready to see your data differently?</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
