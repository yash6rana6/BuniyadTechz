"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "AI Integration",
    description:
      "Intelligent solutions powered by artificial intelligence to automate processes and enhance user experiences.",
    features: ["Machine Learning", "Chatbots", "Data Analytics", "Automation"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from desktop applications to enterprise systems.",
    features: ["Custom Software", "Desktop Apps", "Enterprise Solutions", "API Development"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
];

/* =======================
   COMPONENT
======================= */
export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We build modern, scalable and high-performance digital solutions.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-6 cursor-pointer`}
              onClick={() => setActiveService(service)}
            >
              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {service.description}
              </p>

              <button className="text-sm font-semibold text-blue-400">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg"
            >
              Get Started Today
            </motion.button>
          </Link>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${activeService.bgColor} ${activeService.borderColor} border rounded-2xl p-8 max-w-xl w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">
                {activeService.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {activeService.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeService.features.map((f, i) => (
                  <div key={i} className="text-sm text-gray-300">
                    • {f}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r ${activeService.color}`}
                  >
                    Get Quote
                  </motion.button>
                </Link>

                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 rounded-xl border border-white/20"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
