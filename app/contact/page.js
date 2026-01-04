"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="px-6 pt-24 pb-32 max-w-7xl mx-auto">

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-indigo-400">Us</span>
          </h1>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project idea, a question, or just want to say hello?
            Let’s talk and see how Buniyad Techz can help you build something
            meaningful.
          </p>
        </motion.section>

        {/* CONTENT */}
        <section className="grid md:grid-cols-2 gap-16 items-start mb-32">

          {/* LEFT – INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Let’s Start a <span className="text-indigo-400">Conversation</span>
            </h2>

            <p className="text-neutral-400 leading-relaxed mb-10">
              Whether you’re a startup founder, business owner, or creator,
              we’d love to understand your idea and discuss how we can turn it
              into a reliable, scalable digital product.
            </p>

            <div className="space-y-6 text-neutral-300">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-400" />
                <span>contact@buniyadtechz.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-indigo-400" />
                <span>Available on request</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-400" />
                <span>India (Remote-friendly)</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-neutral-300">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-neutral-300">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-400 transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-full font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to build something <span className="text-indigo-400">great</span>?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let’s turn your idea into a real, high-quality digital product.
          </p>
          <a
            href="/services"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-full font-medium"
          >
            View Our Services
          </a>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}
