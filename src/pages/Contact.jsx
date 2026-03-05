import { motion } from "framer-motion";
import { IconData } from "../components/Icons";
import "./Contact.css";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="section">
          <motion.div initial="initial" animate="animate" variants={stagger} className="contact-hero-inner">
            <motion.span className="contact-badge" variants={fadeUp}>
              <IconData size={14} className="contact-badge-icon" aria-hidden />
              Contact
            </motion.span>
            <motion.h1 className="page-title" variants={fadeUp}>
              Let’s talk data.
            </motion.h1>
            <motion.p className="page-sub" variants={fadeUp}>
              Whether you have a project in mind or just want to explore what’s possible, we’re here to listen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main">
        <div className="section">
          <motion.div
            className="contact-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="contact-info" variants={fadeUp}>
              <IconData size={24} className="contact-info-icon" aria-hidden />
              <h3>Get in touch</h3>
              <p>
                <a href="mailto:hello@brillytics.com">hello@brillytics.com</a>
              </p>
              <p className="contact-note">
                We typically reply within one business day.
              </p>
            </motion.div>
            <motion.div className="contact-form-wrap" variants={fadeUp}>
              <form
                className="contact-form"
                action="#"
                method="post"
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@company.com" required />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={4} placeholder="What's on your mind?" required />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send message
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
