import html from "../../img/html.png";
import js from "../../img/js.png";
import git from "../../img/git.png";
import reactjs from "../../img/reactjs.png";
import redux from "../../img/redux.png";
import tp from "../../img/typescript.png";
import sql from "../../img/sql.png";
import postgres from "../../img/postgresql.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/express.png";
import sequelize from "../../img/sequelize.png";
import aws from "../../img/aws.png";
import python from "../../img/python.png";
import style from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={style.skillsBody}>
      <div className={style.container}>
        <h2 className={style.tittle}>Tech Skills</h2>
        <div className={style.spanContainer}>
          <span className={style.span}>
            <img src={html} alt="html" className={style.img} />
            HTML
          </span>
          <span className={style.span}>
            <img src={js} alt="JavaScript" className={style.img} />
            JavaScript
          </span>
          <span className={style.span}>
            <img src={tp} alt="typescript" className={style.img} />
            Typescript
          </span>
          <span className={style.span}>
            <img src={nodejs} alt="nodejs" className={style.img} />
            Node.js
          </span>
          <span className={style.span}>
            <img src={reactjs} alt="ReactJs" className={style.img} />
            React.js
          </span>
          <span className={style.span}>
            <img src={redux} alt="redux" className={style.img} />
            Redux
          </span>
          <span className={style.span}>
            <img src={express} alt="express" className={style.img} />
            Express.JS
          </span>
          <span className={style.span}>
            <img src={sequelize} alt="sequelize" className={style.img} />
            Sequelize
          </span>
          <span className={style.span}>
            <img src={postgres} alt="postgres" className={style.img} />
            PostgreSQL
          </span>
          <span className={style.span}>
            <img src={sql} alt="sql" className={style.img} />
            SQL
          </span>
          <span className={style.span}>
            <img src={python} alt="sql" className={style.img} />
            Python
          </span>
          <span className={style.span}>
            <img src={aws} alt="sql" className={style.img} />
            AWS
          </span>
          <span className={style.span}>
            <img src={git} alt="git" className={style.img} />
            Git
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
