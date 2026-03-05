import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconChart, IconStrategy, IconTraining, IconCheck, IconUsers, IconRocket, IconData, IconTarget } from "../components/Icons";
import "./Services.css";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

const services = [
  {
    num: "01",
    title: "Analytics & reporting",
    desc: "Custom dashboards and reports that answer your questions. We design for your workflow, not a template.",
    points: ["Custom dashboards", "KPI frameworks", "Scheduled reports", "Self-serve access"],
    Icon: IconChart,
  },
  {
    num: "02",
    title: "Data strategy",
    desc: "From metrics definition to data pipelines—we help you build a foundation that scales with your business.",
    points: ["Metrics definition", "Data pipelines", "Governance", "Scalable architecture"],
    Icon: IconStrategy,
  },
  {
    num: "03",
    title: "Training & support",
    desc: "Get your team confident with the tools and the numbers. We train, document, and stay available.",
    points: ["Hands-on training", "Documentation", "Ongoing support", "Best practices"],
    Icon: IconTraining,
  },
];

const processSteps = [
  { step: "1", title: "Discovery", text: "We align on goals, data sources, and success criteria." },
  { step: "2", title: "Design", text: "We propose dashboards, metrics, and a delivery plan." },
  { step: "3", title: "Build & deploy", text: "We build, test, and roll out with your team." },
  { step: "4", title: "Iterate", text: "We refine based on feedback and changing needs." },
];

const whoItsFor = [
  { label: "Operations & growth teams", desc: "Track performance and capacity.", Icon: IconData },
  { label: "Product & engineering", desc: "Usage, quality, and delivery metrics.", Icon: IconRocket },
  { label: "Marketing & sales", desc: "Campaigns, pipeline, and revenue.", Icon: IconChart },
  { label: "Leadership", desc: "One place for strategy-critical numbers.", Icon: IconTarget },
];

const faqs = [
  { q: "How long does a typical engagement take?", a: "Most projects run 4–12 weeks depending on scope. We’ll give you a timeline after discovery." },
  { q: "Do you work with our existing tools?", a: "Yes. We integrate with your BI tools, data warehouses, and spreadsheets wherever it makes sense." },
  { q: "What if we need changes later?", a: "We offer ongoing support and iteration. Many clients start with one dashboard and expand over time." },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="section">
          <motion.div initial="initial" animate="animate" variants={stagger} className="services-hero-inner">
            <motion.span className="services-badge" variants={fadeUp}>What we do</motion.span>
            <motion.h1 className="page-title" variants={fadeUp}>
              Services built around your data.
            </motion.h1>
            <motion.p className="page-sub" variants={fadeUp}>
              We don’t sell one-size-fits-all. We design analytics and processes that fit how you work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="services-stats">
        <div className="section">
          <motion.div
            className="services-stats-inner"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="services-stat" variants={fadeUp}>
              <span className="services-stat-value">4–12</span>
              <span className="services-stat-label">Weeks typical engagement</span>
            </motion.div>
            <motion.div className="services-stat" variants={fadeUp}>
              <span className="services-stat-value">50+</span>
              <span className="services-stat-label">Teams empowered</span>
            </motion.div>
            <motion.div className="services-stat" variants={fadeUp}>
              <span className="services-stat-value">Ongoing</span>
              <span className="services-stat-label">Support & iteration</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="services-list">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="services-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our services
            </motion.h2>
            <motion.div
              className="services-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {services.map((s) => {
                const ServiceIcon = s.Icon;
                return (
                  <motion.article
                    key={s.num}
                    className="service-card"
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                  >
                    {ServiceIcon && <ServiceIcon className="service-card-icon" size={32} aria-hidden />}
                    <span className="service-num">{s.num}</span>
                    <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  {s.points && (
                    <ul className="service-points">
                      {s.points.map((point) => (
                        <li key={point}><IconCheck className="service-point-check" size={14} aria-hidden />{point}</li>
                      ))}
                    </ul>
                  )}
                </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="services-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How we deliver
            </motion.h2>
            <motion.div
              className="process-steps"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {processSteps.map((item) => (
                <motion.div key={item.step} className="process-step-card" variants={fadeUp}>
                  <span className="process-step-num">{item.step}</span>
                  <h4 className="process-step-title">{item.title}</h4>
                  <p className="process-step-text">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-who">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="services-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who it’s for
            </motion.h2>
            <motion.p
              className="services-who-sub"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              From ops to the C-suite—we build for the way you work.
            </motion.p>
            <motion.div
              className="who-cards"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {whoItsFor.map((item) => {
                const WhoIcon = item.Icon;
                return (
                  <motion.div key={item.label} className="who-card" variants={fadeUp}>
                    {WhoIcon && <WhoIcon className="who-card-icon" size={22} aria-hidden />}
                    <h4 className="who-card-title">{item.label}</h4>
                    <p className="who-card-desc">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-faq">
        <div className="section">
          <div className="section-inner">
            <motion.h2
              className="services-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Common questions
            </motion.h2>
            <motion.dl
              className="faq-list"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {faqs.map((item) => (
                <motion.div key={item.q} className="faq-item" variants={fadeUp}>
                  <dt className="faq-q">{item.q}</dt>
                  <dd className="faq-a">{item.a}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="section">
          <motion.div
            className="services-cta-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Tell us what you’re trying to solve.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a conversation</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
