import rick from "../../img/rm.jpg";
import pokemon from "../../img/pokemon.jpg";
import style from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={style.projects} id="portfolio">
      <h2 className={style.title}>Portfolio</h2>
      <div  className={style.portfolioContainer}>
        <div>
          <div className={style.box}>
            Rick And Morty (Frontend App)
            <a
              href="https://rick-and-morty-project-jfernandez.vercel.app/"
              target="_blank"
            >
              <img src={rick} alt="Rick And Morty" className={style.img} />
            </a>
            <a href="https://github.com/jfernandez141/RickAndMortyProject">
              Repo
            </a>
          </div>
        </div>
        <div>
          <div className={style.box}>
            Pokemon (Full Stack App)
            <a href="https://pi-pokemon-jfernandez.vercel.app/" target="_blank">
              <img src={pokemon} alt="Pokemon" className={style.img} />
            </a>
          <a href="https://github.com/jfernandez141/PIPokemon">Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
