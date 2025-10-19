import js from "../../img/js.png";
import tp from "../../img/typescript.png";
import python from "../../img/python.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/express.png";
import nestjs from "../../img/nestjs.png";
import django from "../../img/django.png";
import postgres from "../../img/postgresql.png";
import mysql from "../../img/mysql.png";
import mongo from "../../img/mongo.png";
import docker from "../../img/docker.png";
import k8s from "../../img/kubernetes.png";
import gcp from "../../img/gcp.png";
import vercel from "../../img/vercel.png";
import git from "../../img/git.png";
import linux from "../../img/linux.png";
import style from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={style.skillsBody}>
      <div className={style.container}>
        <h2 className={style.tittle}>Tech Skills</h2>

        {/* Lenguajes */}
        <h3 className={style.category}>Languages</h3>
        <div className={style.spanContainer}>
          <span className={style.span}><img src={js} alt="JavaScript" className={style.img} />JavaScript</span>
          <span className={style.span}><img src={tp} alt="TypeScript" className={style.img} />TypeScript</span>
          <span className={style.span}><img src={python} alt="Python" className={style.img} />Python</span>
        </div>

        {/* Frameworks */}
        <h3 className={style.category}>Frameworks</h3>
        <div className={style.spanContainer}>
          <span className={style.span}><img src={nodejs} alt="Node.js" className={style.img} />Node.js</span>
          <span className={style.span}><img src={express} alt="Express" className={style.img} />Express.js</span>
          <span className={style.span}><img src={nestjs} alt="NestJS" className={style.img} />NestJS</span>
          <span className={style.span}><img src={django} alt="Django" className={style.img} />Django</span>
        </div>

        {/* Bases de datos */}
        <h3 className={style.category}>Databases</h3>
        <div className={style.spanContainer}>
          <span className={style.span}><img src={postgres} alt="PostgreSQL" className={style.img} />PostgreSQL</span>
          <span className={style.span}><img src={mysql} alt="MySQL" className={style.img} />MySQL</span>
          <span className={style.span}><img src={mongo} alt="MongoDB" className={style.img} />MongoDB</span>
        </div>

        {/* DevOps */}
        <h3 className={style.category}>DevOps & Cloud</h3>
        <div className={style.spanContainer}>
          <span className={style.span}><img src={docker} alt="Docker" className={style.img} />Docker</span>
          <span className={style.span}><img src={k8s} alt="Kubernetes" className={style.img} />Kubernetes</span>
          <span className={style.span}><img src={gcp} alt="GCP" className={style.img} />GCP</span>
          <span className={style.span}><img src={vercel} alt="Vercel" className={style.img} />Vercel</span>
        </div>

        {/* Otros */}
        <h3 className={style.category}>Others</h3>
        <div className={style.spanContainer}>
          <span className={style.span}><img src={git} alt="Git" className={style.img} />Git</span>
          <span className={style.span}><img src={linux} alt="Linux" className={style.img} />Linux</span>
          <span className={style.span}>CI/CD</span>
          <span className={style.span}>REST / GraphQL</span>
          <span className={style.span}>RabbitMQ</span>
          <span className={style.span}>Microservices</span>
          <span className={style.span}>Clean Architecture</span>
        </div>

      </div>
    </div>
  );
};

export default Skills;
