import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        const err = await res.text();
        setStatus("error: " + err);
      }
    } catch (err) {
      setStatus("error: network");
    }
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="status">Status: {status}</div>
    </div>
  );
};

export default Contact;
