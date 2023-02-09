import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btn, setBtn] = useState("Send Email");

  function handleSubmit(event) {
    event.preventDefault();
    setBtn("Sending...");

    emailjs
      .send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setBtn("Send Email");
          setForm({
            name: "",
            email: "",
            message: "",
          });
          console.log(result.text);
        },
        (error) => {
          setBtn("Send Email");
          console.log(error.text);
        }
      );
  }
  function handleInputChange(event) {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  }

  return (
    <div id="contact">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            required
            name="message"
            cols="30"
            rows="10"
            value={form.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button>{btn}</button>
      </form>
    </div>
  );
};

export default Form;
