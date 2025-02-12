import { useState } from "react";

export default function Notice() {
  const [form, setForm] = useState({
    name: "",
    recipient: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Notice Application Letter</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="recipient"
          placeholder="Recipient Name"
          value={form.recipient}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          rows="4"
        ></textarea>

        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h3 className="font-bold">Generated Letter:</h3>
          <p className="mt-2">Dear {form.recipient},</p>
          <p className="mt-2">Subject: {form.subject}</p>
          <p className="mt-2">{form.message}</p>
          <p className="mt-2">Sincerely,</p>
          <p className="font-semibold">{form.name}</p>
        </div>
      </div>
    </div>
  );
}
