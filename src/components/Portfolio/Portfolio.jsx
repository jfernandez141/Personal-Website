import { useState } from "react";
import { send } from "@emailjs/browser";
import styles from "./Portfolio.module.css";
import Notification from "../Notification/Notification";
import portrait from "../../img/jfimg.jpg";

const experienceStartDate = new Date(2022, 10, 1);
const elapsedMonths = (new Date().getFullYear() - experienceStartDate.getFullYear()) * 12
  + new Date().getMonth() - experienceStartDate.getMonth();
const totalExperience = `${Math.ceil(elapsedMonths / 12)}+ years`;

const experiences = [
  {
    company: "Holafly",
    role: "Backend Developer",
    period: "Aug 2023 - Present",
    location: "Spain · Remote",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Docker", "Git"],
    description: "Designing and maintaining backend services and APIs, with a focus on reliability, scalability, and clean architecture.",
  },
  {
    company: "Evolutic Strategy LLC",
    role: "Backend Developer",
    period: "Mar 2023 - Jul 2023",
    location: "Medellin Metropolitan Area · Remote",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
    description: "Developing backend APIs and data persistence layers for web applications.",
  },
];

const skillGroups = [
  ["Languages", ["JavaScript", "TypeScript", "Python", "SQL"]],
  ["Backend", ["Node.js", "Express", "NestJS", "Django"]],
  ["Data", ["PostgreSQL", "MySQL", "MongoDB", "Sequelize"]],
  ["Delivery", ["Docker", "Kubernetes", "GCP", "CI/CD"]],
];

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form, REACT_APP_PUBLIC_KEY).then(
      () => {
        setForm({ name: "", email: "", message: "" });
        setNotification({ id: Date.now(), type: "success" });
      },
      () => setNotification({ id: Date.now(), type: "error" })
    ).finally(() => setSending(false));
  };

  return (
    <>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href="#home" aria-label="Jhamil Fernandez home">jf@dev:~$</a>
        <div className={styles.navLinks}><a href="#about">./about</a><a href="#experience">./experience</a><a href="#contact">./contact</a></div>
      </nav>
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>$ whoami</p>
            <h1>Jhamil<br />Fernandez_</h1>
            <p className={styles.lede}>Backend developer building APIs, data layers and infrastructure that hold up under real use.</p>
            <p className={styles.intro}>Based in Colombia. Working remotely on backend systems, APIs, and integrations for international products.</p>
            <div className={styles.actions}><a className={styles.primaryAction} href="#experience">$ ls ./experience</a><a className={styles.secondaryAction} href="#contact">$ connect</a></div>
          </div>
          <div className={styles.portraitWrap}><img src={portrait} alt="Jhamil Fernandez" /></div>
        </section>

        <section id="about" className={styles.about}>
          <div><p className={styles.eyebrow}>$ cat profile.md</p><h2>Systems thinking<br />for product teams.</h2></div>
          <p>With {totalExperience} of hands-on experience, I design APIs, data layers and integrations that stay understandable as a product grows. My work blends Node.js expertise with Python, SQL and containerized delivery.</p>
          <div className={styles.stats}><div><strong>{totalExperience}</strong><span>building experience</span></div><div><strong>API</strong><span>first mindset</span></div><div><strong>B2</strong><span>English level</span></div></div>
        </section>

        <section id="skills" className={styles.skills}>
          <div className={styles.sectionInner}><p className={`${styles.eyebrow} ${styles.lightEyebrow}`}>$ tree ./capabilities</p><h2>Tools are only useful<br />when the system is clear.</h2>
            <div className={styles.skillGrid}>{skillGroups.map(([group, skills]) => <article key={group}><h3>{group}</h3><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section id="experience" className={styles.experience}>
          <div className={styles.workHeading}><div><p className={styles.eyebrow}>$ cat ./experience.log</p><h2>Latest two<br />professional experiences.</h2></div><p>Backend developer focused on building reliable services, APIs, and distributed systems with Node.js and TypeScript.</p></div>
          <div className={styles.experienceGrid}>{experiences.map((experience) => <article className={styles.experienceCard} key={experience.company}><div className={styles.experienceMarker}>{"//"}</div><div className={styles.experienceInfo}><p className={styles.stack}>{experience.role}</p><h3>{experience.company}</h3><p className={styles.period}>{experience.period}</p><p className={styles.location}>{experience.location}</p><p className={styles.experienceDescription}>{experience.description}</p><div className={styles.technologies}>{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></article>)}</div>
        </section>

        <section id="contact" className={styles.contact}>
          <div><p className={`${styles.eyebrow} ${styles.lightEyebrow}`}>$ open --channel</p><h2>Let's make the<br />next request count.</h2><p className={styles.contactCopy}>Have an idea, an opportunity, or a backend problem to solve? Let's talk.</p><div className={styles.socials}><a href="https://www.linkedin.com/in/jhamil-fernandez/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">./linkedin</a><a href="https://github.com/jfernandez141" target="_blank" rel="noreferrer" aria-label="GitHub profile">./github</a></div></div>
          <form className={styles.form} onSubmit={submit}><label htmlFor="name">YOUR NAME</label><input id="name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ada Lovelace" required /><label htmlFor="email">EMAIL ADDRESS</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="ada@example.com" required /><label htmlFor="message">A FEW DETAILS</label><textarea id="message" name="message" rows="7" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What are you looking to build?" required /><button type="submit" disabled={sending} aria-busy={sending}>./send-message</button></form>
        </section>
      </main>
      <footer className={styles.footer}>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/jhamil-fernandez/">Jhamil Fernandez</a> - crafted in Colombia</footer>
      {notification && <Notification notification={notification} onDismiss={() => setNotification(null)} />}
    </>
  );
}