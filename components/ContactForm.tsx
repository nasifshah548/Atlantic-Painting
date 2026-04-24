"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.currentTarget.reset();
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow space-y-6"
    >
      <h3 className="text-2xl font-semibold">Send Us a Message</h3>

      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full border p-3 rounded"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="w-full border p-3 rounded"
      />

      <textarea
        name="message"
        required
        placeholder="Your Message"
        rows={5}
        className="w-full border p-3 rounded"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
