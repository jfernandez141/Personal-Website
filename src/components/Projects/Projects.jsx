import rick from "../../img/rm.jpg";
import pokemon from "../../img/pokemon.jpg";
import style from "./Projects.module.css";
import ReactGA from "react-ga";

const Projects = () => {
  const clickHandler = (name) => {
    ReactGA.event({
      category: "Portfolio",
      action: `Open the ${name}`,
    });
  };
  return (
    <div className={style.projects} id="portfolio">
      <hr />
      <h2 className={style.title}>Portfolio</h2>
      <div className={style.portfolioContainer}>
        <div>
          <div className={style.box}>
            Rick And Morty
            <a
              href="https://rick-and-morty-project-jfernandez.vercel.app/"
              onClick={() => clickHandler("Rick App")}
              onAuxClick={() => clickHandler("Rick App")}
              target="_blank"
            >
              <img src={rick} alt="Rick And Morty" className={style.img} />
            </a>
            <a
              href="https://github.com/jfernandez141/RickAndMortyProject"
              onClick={() => clickHandler("Rick Repo")}
              onAuxClick={() => clickHandler("Rick Repo")}
              target="_blank"
            >
              Repo
            </a>
          </div>
        </div>
        <div>
          <div className={style.box}>
            Pokemon
            <a
              href="https://pi-pokemon-jfernandez.vercel.app/"
              target="_blank"
              onClick={() => clickHandler("Pokemon App")}
              onAuxClick={() => clickHandler("Pokemon App")}
            >
              <img src={pokemon} alt="Pokemon" className={style.img} />
            </a>
            <a
              href="https://github.com/jfernandez141/PIPokemon"
              target="_blank"
              onClick={() => clickHandler("Pokemon Repo")}
              onAuxClick={() => clickHandler("Pokemon App")}
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
