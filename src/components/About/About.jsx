import style from "./About.module.css";
import homeimg from "../../img/home.png";
import jfimg from "../../img/jfimg.jpg";
const About = () => {
  return (
    <div id="home" className={style.home}>
      <div className={style.section}>
        <img src={jfimg} alt="Jhamil Fernandez" className={style.jfimg} />
        <div>
          <h1 className={style.name}>Jhamil Fernandez</h1>
          <h2 className={style.position}>Full Stack Developer</h2>
        </div>
      </div>
      <h2 className={style.aboutTittle}>About Me</h2>
      <div className={style.section}>
        <p className={style.about}>
        Full Stack web developer with a background in finance and data analysis, focused on backend developer, with extensive experience developing APIs and full stack web pages, with administrative management and payment gateways, among other functions, handling of programming languages such as JavaScript and Python, as well as in the management of PostgreSQL databases and Frontend and Backend technologies such as React, Redux, NodeJS, Express, Sequelize among others. I have advanced skills in development tools like Visual Studio Code and agile Scrum methodologies. In addition, I have an advanced level of English (B2) and I consider myself a committed and dedicated person, goal-oriented and capable of leading and working as a team to achieve optimal results.
        </p>
      </div>
    </div>
  );
};

export default About;
