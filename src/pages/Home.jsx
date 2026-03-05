import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconSpark, IconChart, IconTarget, IconLayers, IconRocket } from "../components/Icons";
import "./Home.css";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
const stagger = { animate: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } };

/* Bento: mixed sizes. spanRow/spanCol for grid placement */
const bentoItems = [
  { id: "a", title: "Clarity from chaos", body: "Scattered data → one narrative. So you act with confidence.", spanRow: 1, spanCol: 1, Icon: IconChart },
  { id: "b", title: "Built for decision-makers", body: "Dashboards that answer the question: what should I do next? No fluff.", spanRow: 2, spanCol: 1, Icon: IconTarget },
  { id: "c", title: "Scale without sprawl", body: "One platform, one source of truth, from first report to enterprise.", spanRow: 1, spanCol: 1, Icon: IconLayers },
  { id: "d", title: "Your context, not ours", body: "We start with your goals and data. No cookie-cutter playbooks.", spanRow: 1, spanCol: 1, Icon: IconRocket },
];

const timeline = [
  { phase: "Discover", text: "We learn your goals, data sources, and how your team decides." },
  { phase: "Design", text: "Dashboards and metrics that fit your workflow—clear view, drill-down when needed." },
  { phase: "Deliver & iterate", text: "Deploy, train, and evolve with you as your business changes." },
];

const testimonials = [
  {
    id: "1",
    quote: "Brillytics web team far exceeded my expectations on every front. The end product is a beautiful website that embodies who we are as a company. Every person I worked with was knowledgeable, creative, prompt, and personable.",
    name: "Muthu",
    role: "Director",
    company: "United Service Consultants Pte Ltd",
    location: "Singapore",
    avatar: "/client-avatar.jpg",
    initials: "M",
  },
  {
    id: "2",
    quote: "They didn't just give us dashboards—they gave us a shared language for our data. Now we actually use the numbers to decide.",
    name: "Sarah Chen",
    role: "Head of Operations",
    company: "Growth-stage SaaS",
    location: null,
    avatar: null,
    initials: "SC",
  },
  {
    id: "3",
    quote: "Clear, actionable insights from day one. The team understood our business and delivered exactly what we needed.",
    name: "James Okonkwo",
    role: "CFO",
    company: "FinTech Solutions",
    location: null,
    avatar: null,
    initials: "JO",
  },
];

export default function Home() {
  return (
    <div className="home home-editorial">
      {/* Hero: caption-style bottom-left, full-bleed bg */}
      <section className="hero-editorial">
        <div className="hero-editorial-bg">
          <div className="hero-editorial-bg-image" aria-hidden="true" />
          <div className="hero-editorial-overlay" aria-hidden="true" />
        </div>
        <div className="hero-editorial-content">
          <motion.p
            className="hero-editorial-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <IconSpark className="hero-label-icon" size={14} aria-hidden />
            Analytics that drive decisions
          </motion.p>
          <motion.h1
            className="hero-editorial-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Data clarity, delivered.
          </motion.h1>
          <motion.p
            className="hero-editorial-sub"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
          >
            We help teams see what matters. Clean insights, clear actions.
          </motion.p>
          <motion.div
            className="hero-editorial-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
          </motion.div>
          <motion.p
            className="hero-editorial-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            10+ years · 50+ teams · Light theme only
          </motion.p>
        </div>
      </section>

      {/* Single column intro — left-aligned */}
      <section className="intro-editorial">
        <div className="section section-narrow">
          <motion.div
            className="intro-block"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.span className="intro-kicker" variants={fadeUp}>
              <IconSpark className="intro-kicker-icon" size={14} aria-hidden />
              Why Brillytics
            </motion.span>
            <motion.p className="intro-lead" variants={fadeUp}>
              One platform. Clear outcomes. We turn data into decisions, not dashboards into decoration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bento grid — irregular */}
      <section className="bento-section" id="how">
        <div className="section">
          <motion.div
            className="bento-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {bentoItems.map((item) => {
              const BentoIcon = item.Icon;
              return (
                <motion.div
                  key={item.id}
                  className="bento-cell"
                  style={{
                    gridRow: `span ${item.spanRow}`,
                    gridColumn: `span ${item.spanCol}`,
                  }}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {BentoIcon && <BentoIcon className="bento-icon" size={28} aria-hidden />}
                  <h3 className="bento-title">{item.title}</h3>
                  <p className="bento-body">{item.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline — vertical line, items right */}
      <section className="timeline-section">
        <div className="section section-narrow">
          <motion.span
            className="timeline-kicker"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How we work
          </motion.span>
          <motion.div
            className="timeline"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-30px" }}
            variants={stagger}
          >
            {timeline.map((item) => (
              <motion.div
                key={item.phase}
                className="timeline-item"
                variants={fadeUp}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <span className="timeline-phase">{item.phase}</span>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Accolades — multi-client card grid */}
      <section className="testimonials-section">
        <div className="section">
          <motion.div
            className="testimonials-head"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="testimonials-badge">What clients say</span>
            <h2 className="testimonials-title">Client Accolades</h2>
          </motion.div>
          <motion.div
            className="testimonials-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                className="testimonial-card"
                variants={fadeUp}
              >
                <blockquote className="testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="testimonial-meta">
                  <span className="testimonial-avatar" aria-hidden>
                    {t.avatar ? (
                      <>
                        <img
                          src={t.avatar}
                          alt=""
                          onError={(e) => {
                            const el = e.target;
                            const wrap = el.closest(".testimonial-avatar");
                            if (el.src.endsWith("client-avatar.svg")) {
                              el.style.display = "none";
                              wrap?.querySelector(".testimonial-avatar-initials")?.classList.add("show");
                            } else {
                              el.onerror = null;
                              el.src = "/client-avatar.svg";
                            }
                          }}
                        />
                        <span className="testimonial-avatar-initials">{t.initials}</span>
                      </>
                    ) : (
                      <span className="testimonial-avatar-initials show">{t.initials}</span>
                    )}
                  </span>
                  <div className="testimonial-info">
                    <strong className="testimonial-name">{t.name}</strong>
                    <span className="testimonial-role-company">
                      {t.role}{t.company && `, ${t.company}`}{t.location && ` · ${t.location}`}
                    </span>
                  </div>
                </footer>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA — minimal strip */}
      <section className="cta-editorial">
        <div className="section">
          <motion.div
            className="cta-editorial-inner"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="cta-editorial-head">Ready for clearer data?</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
