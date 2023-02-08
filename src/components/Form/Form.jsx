import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);

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
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
