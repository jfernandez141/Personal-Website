import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        © 2024 Developer by{" "}
        <a
          href="https://www.linkedin.com/in/jhamil-fernandez/"
          className={style.name}
        >
          Jhamil Fernandez
        </a>
      </p>
    </div>
  );
};

export default Footer;
