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
        I am Jhamil Fernandez, a web developer with experience in technologies such as React, Redux, Express, NodeJS JavaScript,  Data Bases, among others. I love working on challenging projects and have a solid understanding of the architecture and design patterns necessary to create scalable and efficient web applications, both on the Frontend and the Backend.        
        </p>
      </div>
    </div>
  );
};

export default About;
