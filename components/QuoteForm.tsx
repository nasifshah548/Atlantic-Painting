"use client";

import { useState } from "react";

export default function QuoteForm() {
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
      setSuccess("Request sent! We'll contact you soon.");
      e.currentTarget.reset();
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-soft space-y-6"
    >
      <h3 className="text-2xl font-bold text-brand.dark">Get a Free Quote</h3>

      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand.primary"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand.primary"
      />

      <textarea
        name="message"
        required
        placeholder="Describe your project (rooms, colors, size...)"
        rows={5}
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand.primary"
      />

      <button
        disabled={loading}
        className="w-full bg-brand.accent text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Get Free Quote"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
