import { useState } from "react";

const TestPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form", form);
  };
  const isDisabled = !form.name || !form.email || !form.message;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Enter Message"
      />

      <button
        type="submit"
        disabled={isDisabled}
        style={{
          padding: "10px 20px",
          backgroundColor: isDisabled ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isDisabled ? "not-allowed" : "pointer",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default TestPage;
