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
          <h2 className={style.position}>Backend Developer</h2>
        </div>
      </div>
      <h2 className={style.aboutTittle}>About Me</h2>
      <div className={style.section}>
      <p className={style.about}>
          I am a Backend Developer with over 2 years of hands-on experience specializing in Node.js. My expertise extends to developing scalable and efficient APIs, integrating third-party services, and implementing robust authentication mechanisms. I have a strong foundation in programming languages like JavaScript, Python, and TypeScript, and I am skilled in working with databases such as PostgreSQL.
          <br />
          <br />
          In addition to my technical skills, I have experience with Docker for containerized applications and tools like Sequelize, Express, and Socket.io. My background in finance and data analysis gives me a unique perspective on solving complex backend challenges. I am proficient in agile methodologies such as Scrum and thrive in team-oriented environments where collaboration and delivering quality solutions are key. With a B2-level proficiency in English, I am capable of working in international settings.
          <br />
          <br />
          I am committed, detail-oriented, and goal-driven, always aiming to contribute to innovative projects while continuously improving my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
