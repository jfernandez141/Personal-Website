import { useState } from "react";
import { send } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Portfolio.module.css";
import portrait from "../../img/jfimg.jpg";
import rickAndMorty from "../../img/rm.jpg";
import pokemon from "../../img/pokemon.jpg";
import store from "../../img/storeClient.png";
import customer from "../../img/customer.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";

const projects = [
  { name: "Rick and Morty", description: "A character explorer built around a third-party API and fluid search states.", stack: "React / REST API", image: rickAndMorty, live: "https://rick-and-morty-project-jfernandez.vercel.app/", source: "https://github.com/jfernandez141/RickAndMortyProject" },
  { name: "Pokemon", description: "A full-stack catalog for filtering, creating and exploring Pokemon data.", stack: "React / Node.js / PostgreSQL", image: pokemon, live: "https://pi-pokemon-jfernandez.vercel.app/", source: "https://github.com/jfernandez141/PIPokemon" },
  { name: "Store App", description: "A storefront interface designed around a focused browsing and ordering flow.", stack: "React / Commerce UI", image: store, live: "https://storespacefood.netlify.app/", source: "https://github.com/jfernandez141/storeclient" },
  { name: "Customer App", description: "A customer-facing experience for a food-service product ecosystem.", stack: "React / Product UI", image: customer, live: "https://spacefood.netlify.app/", source: "https://github.com/jfernandez141/customerclient" },
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

  const submit = (event) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form, REACT_APP_PUBLIC_KEY).then(
      () => {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent. Thank you!");
      },
      () => toast.error("Something went wrong. Please try again.")
    ).finally(() => setSending(false));
  };

  return (
    <>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href="#home" aria-label="Jhamil Fernandez home">JF<span>.</span></a>
        <div className={styles.navLinks}><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
      </nav>
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Backend engineer / Colombia</p>
            <h1>Jhamil<br />Fernandez</h1>
            <p className={styles.lede}>I build calm, reliable systems for busy products.</p>
            <p className={styles.intro}>Backend developer focused on the architecture behind fast, useful digital experiences.</p>
            <div className={styles.actions}><a className={styles.primaryAction} href="#work">Explore work</a><a className={styles.secondaryAction} href="#contact">Start a conversation</a></div>
          </div>
          <div className={styles.portraitWrap}><img src={portrait} alt="Jhamil Fernandez" /><span>Available for backend collaborations</span></div>
        </section>

        <section id="about" className={styles.about}>
          <div><p className={styles.eyebrow}>What I bring</p><h2>Practical engineering, thoughtful delivery.</h2></div>
          <p>With 4+ years of hands-on experience, I design APIs, data layers and integrations that stay understandable as a product grows. My work blends Node.js expertise with Python, SQL and containerized delivery.</p>
          <div className={styles.stats}><div><strong>4+</strong><span>years building</span></div><div><strong>API</strong><span>first mindset</span></div><div><strong>B2</strong><span>English level</span></div></div>
        </section>

        <section id="skills" className={styles.skills}>
          <div className={styles.sectionInner}><p className={`${styles.eyebrow} ${styles.lightEyebrow}`}>Toolbox</p><h2>Built for the work behind the screen.</h2>
            <div className={styles.skillGrid}>{skillGroups.map(([group, skills]) => <article key={group}><h3>{group}</h3><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section id="work" className={styles.work}>
          <div className={styles.workHeading}><div><p className={styles.eyebrow}>Selected work</p><h2>Products made to be used.</h2></div><p>Each project is a chance to make data, interactions and delivery feel more deliberate.</p></div>
          <div className={styles.projectGrid}>{projects.map((project) => <article className={styles.project} key={project.name}><a className={styles.projectImage} href={project.live} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.name} project preview`} /></a><div className={styles.projectInfo}><p className={styles.stack}>{project.stack}</p><h3>{project.name}</h3><p>{project.description}</p><div className={styles.projectLinks}><a href={project.live} target="_blank" rel="noreferrer">Visit site</a><a href={project.source} target="_blank" rel="noreferrer">Source code</a></div></div></article>)}</div>
        </section>

        <section id="contact" className={styles.contact}>
          <div><p className={`${styles.eyebrow} ${styles.lightEyebrow}`}>Contact</p><h2>Have a system worth building?</h2><p className={styles.contactCopy}>Tell me where you are headed and what needs to work better. I read every message.</p><div className={styles.socials}><a href="https://www.linkedin.com/in/jhamil-fernandez/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><img src={linkedin} alt="" /></a><a href="https://github.com/jfernandez141" target="_blank" rel="noreferrer" aria-label="GitHub profile"><img src={github} alt="" /></a></div></div>
          <form className={styles.form} onSubmit={submit}><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ada Lovelace" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="ada@example.com" required /><label htmlFor="message">A few details</label><textarea id="message" name="message" rows="7" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What are you looking to build?" required /><button type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"}</button></form>
        </section>
      </main>
      <footer className={styles.footer}>© {new Date().getFullYear()} Built by <a href="https://www.linkedin.com/in/jhamil-fernandez/">Jhamil Fernandez</a></footer>
      <ToastContainer position="top-right" autoClose={4000} theme="light" />
    </>
  );
}