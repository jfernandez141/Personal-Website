import React, { useState } from "react";
import style from "./Form.module.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import ReactGA from "react-ga";
import { send } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btn, setBtn] = useState("Send Email");

  const clickHandler = (name) => {
    ReactGA.event({
      category: "Contact",
      action: `Open ${name}`,
    });
  };

  const notify = (success) => {
    const options = {
      position: "top-right",
      autoClose: 4000,
      theme: "light",
    };
    success
      ? toast.success("Email sent successfully! Thank you 😊", options)
      : toast.error("Oops! Something went wrong. Please try again.", options);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (btn === "Sending...") return;

    setBtn("Sending...");
    send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form, REACT_APP_PUBLIC_KEY)
      .then(
        (result) => {
          setBtn("Send Email");
          setForm({ name: "", email: "", message: "" });
          console.log("Email sent:", result.text);
          notify(true);
        },
        (error) => {
          setBtn("Send Email");
          console.error("Error sending email:", error.text);
          notify(false);
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className={style.contacBody}>
      <hr />
      <h2 className={style.title}>Contact</h2>
      <div className={style.links}>
        <a
          href="https://www.linkedin.com/in/jhamil-fernandez/"
          target="_blank"
          onClick={() => clickHandler("Linkedin")}
          onAuxClick={() => clickHandler("Linkedin")}
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" width="70px" />
        </a>
        <a
          href="https://github.com/jfernandez141"
          target="_blank"
          onClick={() => clickHandler("Github")}
          onAuxClick={() => clickHandler("Github")}
          rel="noreferrer"
        >
          <img src={github} alt="Github" width="70px" />
        </a>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.inputForm}
          placeholder="Name:"
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          className={style.inputForm}
          placeholder="Email:"
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <textarea
          className={style.message}
          placeholder="Message:"
          required
          name="message"
          rows="10"
          value={form.message}
          onChange={handleInputChange}
        ></textarea>
        <button className={style.btn} type="submit" aria-label="Send email">
          {btn}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={4000} theme="light" />
    </div>
  );
};

export default Form;
