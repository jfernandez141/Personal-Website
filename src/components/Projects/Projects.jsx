import rick from "../../img/ryck-and-morty.png";
import pokemon from "../../img/pokemon.jpg";

const Projects = () => {
  return (
    <div id="portfolio">
      <div>
        Rick And Morty
        <a
          href="https://rick-and-morty-project-jfernandez.vercel.app/"
          target="_blank"
        >
          <img src={rick} alt="Rick And Morty" />
        </a>
      </div>
      <div>
        Pokemon
        <a href="https://pi-pokemon-jfernandez.vercel.app/"  target="_blank">
            <img src={pokemon} alt="Pokemon" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
