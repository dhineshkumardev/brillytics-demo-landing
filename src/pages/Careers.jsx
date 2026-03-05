import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconUsers, IconRocket, IconCheck, IconBulb, IconTraining } from "../components/Icons";
import "./Careers.css";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
const stagger = { animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };

const stats = [
  { value: "15+", label: "Team members" },
  { value: "100%", label: "Remote-friendly" },
  { value: "Growing", label: "Across 3 regions" },
];

const openings = [
  { title: "Senior Data Analyst", team: "Analytics", type: "Full-time", location: "Remote", desc: "Turn complex data into clear dashboards and recommendations for clients." },
  { title: "Product Designer", team: "Product", type: "Full-time", location: "Remote", desc: "Shape analytics experiences that decision-makers actually love to use." },
  { title: "Engineering Lead", team: "Engineering", type: "Full-time", location: "Remote", desc: "Own our data pipeline and viz stack; mentor the team." },
  { title: "Client Success Manager", team: "Customer", type: "Full-time", location: "Remote", desc: "Partner with clients to drive adoption and outcomes." },
  { title: "Marketing Lead", team: "Growth", type: "Full-time", location: "Remote", desc: "Tell the Brillytics story and build our pipeline." },
];

const values = [
  { title: "Clarity first", desc: "We say what we mean and build what we say." },
  { title: "Own the outcome", desc: "We’re accountable to our clients and each other." },
  { title: "Keep learning", desc: "Data and tools evolve; we evolve with them." },
];

const benefits = [
  { title: "Health & wellness", desc: "Medical, dental, and mental health support.", Icon: IconCheck },
  { title: "Learning budget", desc: "Annual allowance for courses, books, and conferences.", Icon: IconTraining },
  { title: "Flexible hours", desc: "Async-friendly; work when you're at your best.", Icon: IconBulb },
  { title: "Remote-first", desc: "Work from anywhere with a strong internet connection.", Icon: IconUsers },
];

const processSteps = [
  { step: 1, title: "Apply", text: "Send your resume and a short note on why Brillytics to careers@brillytics.com." },
  { step: 2, title: "Intro call", text: "We'll chat about your experience and what you're looking for." },
  { step: 3, title: "Skills & fit", text: "Role-specific task or interview so we both see the fit." },
  { step: 4, title: "Offer", text: "We make an offer; you join the team and we get started." },
];

export default function Careers() {
  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="section">
          <motion.div initial="initial" animate="animate" variants={stagger} className="careers-hero-inner">
            <motion.p className="careers-badge" variants={fadeUp}>We're hiring</motion.p>
            <motion.h1 className="page-title" variants={fadeUp}>Build with us</motion.h1>
            <motion.p className="page-sub careers-sub" variants={fadeUp}>
              Join a small team that cares about clear data and clear communication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="careers-stats">
        <div className="section">
          <motion.div
            className="careers-stats-inner"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} className="careers-stat" variants={fadeUp}>
                <span className="careers-stat-value">{s.value}</span>
                <span className="careers-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="careers-roles">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="section-title section-title-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Open positions
            </motion.h2>
            <motion.div
              className="roles-list"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {openings.map((job) => (
                <motion.a
                  key={job.title}
                  href="mailto:careers@brillytics.com?subject=Application"
                  className="role-card"
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="role-main">
                    <h3 className="role-title">{job.title}</h3>
                    <div className="role-meta">
                      <span>{job.team}</span>
                      <span className="role-dot">·</span>
                      <span>{job.type}</span>
                      <span className="role-dot">·</span>
                      <span>{job.location}</span>
                    </div>
                    {job.desc && <p className="role-desc">{job.desc}</p>}
                  </div>
                  <span className="role-arrow" aria-hidden="true">→</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.p
              className="careers-note"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Don’t see a fit? Send your resume to{" "}
              <a href="mailto:careers@brillytics.com">careers@brillytics.com</a> and we’ll keep you in mind.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="careers-values">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="section-title section-title-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              How we work
            </motion.h2>
            <motion.div
              className="values-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {values.map((v) => (
                <motion.div key={v.title} className="value-card" variants={fadeUp}>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="careers-benefits">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="section-title section-title-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Why join us
            </motion.h2>
            <motion.div
              className="benefits-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {benefits.map((b) => {
                const Icon = b.Icon;
                return (
                  <motion.div key={b.title} className="benefit-card" variants={fadeUp}>
                    <Icon className="benefit-icon" size={28} aria-hidden />
                    <h3 className="benefit-title">{b.title}</h3>
                    <p className="benefit-desc">{b.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="careers-process">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="section-title section-title-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              How we hire
            </motion.h2>
            <motion.div
              className="process-steps"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {processSteps.map((step) => (
                <motion.div key={step.step} className="process-step" variants={fadeUp}>
                  <span className="process-step-num" aria-hidden>{step.step}</span>
                  <div className="process-step-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-text">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="section">
          <motion.div
            className="careers-cta-inner"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="careers-cta-title">Ready to apply?</h2>
            <p className="careers-cta-sub">Send your resume to careers@brillytics.com or get in touch with any questions.</p>
            <div className="careers-cta-buttons">
              <a href="mailto:careers@brillytics.com" className="btn btn-primary">Email us</a>
              <Link to="/contact" className="btn btn-ghost">Contact</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
