import rick from "../../img/rm.jpg";
import pokemon from "../../img/pokemon.jpg";
import store from "../../img/storeClient.png";
import customer from "../../img/customer.png";
import style from "./Projects.module.css";
import ReactGA from "react-ga";

const projectsData = [
  {
    name: "Rick And Morty",
    appLink: "https://rick-and-morty-project-jfernandez.vercel.app/",
    repoLink: "https://github.com/jfernandez141/RickAndMortyProject",
    img: rick,
  },
  {
    name: "Pokemon",
    appLink: "https://pi-pokemon-jfernandez.vercel.app/",
    repoLink: "https://github.com/jfernandez141/PIPokemon",
    img: pokemon,
  },
  {
    name: "Store App",
    appLink: "https://storespacefood.netlify.app/",
    repoLink: "https://github.com/jfernandez141/storeclient",
    img: store,
  },
  {
    name: "Customer App",
    appLink: "https://spacefood.netlify.app/",
    repoLink: "https://github.com/jfernandez141/customerclient",
    img: customer,
  },
];

const Projects = () => {
  const clickHandler = (name) => {
    ReactGA.event({
      category: "Portfolio",
      action: `Open the ${name}`,
    });
  };

  return (
    <section className={style.projects} id="portfolio">
      <hr />
      <h2 className={style.title}>Portfolio</h2>
      <div className={style.portfolioContainer}>
        {projectsData.map((project) => (
          <article key={project.name} className={style.box}>
            <h3>{project.name}</h3>
            <a
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clickHandler(`${project.name} App`)}
            >
              <img src={project.img} alt={project.name} className={style.img} />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clickHandler(`${project.name} Repo`)}
            >
              Repo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
