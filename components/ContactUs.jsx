"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setResponseMsg(data.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMsg("Error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-3xl w-full text-white relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" />
            <span>buniyadtechz@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-yellow-400" />
            <span>+91 9193198370</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Mordabad, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-white/60"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-white/60"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-white/60"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {responseMsg && (
            <p className="mt-4 text-center text-yellow-400">{responseMsg}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
