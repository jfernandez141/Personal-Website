import html from "../../img/html.png";
import js from "../../img/js.png";
import git from "../../img/git.png"
import reactjs from "../../img/reactjs.png"
import redux from "../../img/redux.png"
import tp from "../../img/typescript.png"
import sql from "../../img/sql.png"
import postgres from "../../img/postgresql.png"
import nodejs from "../../img/nodejs.png"
import express from "../../img/express.png"

// meter los demas iconos

const Skills = () => {
  return (
    <div id="skills">
      <h2>Tech Skills</h2>
      <div>
        <span>
          <img src={html} alt="html" />
          HTML
        </span>
        <span>
            <img src={js} alt="JavaScript" />
            JavaScript
        </span>
        <span>
            <img src={reactjs} alt="ReactJs" />
            React Js
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default Skills;
