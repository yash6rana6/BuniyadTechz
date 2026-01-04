"use client";

import { motion } from "framer-motion";
import { Code, Layout, Rocket, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ================= DATA ================= */

const services = [
  {
    title: "Web Development",
    icon: <Code size={28} />,
    description:
      "We build fast, scalable, and secure web applications tailored to your business goals.",
    details:
      "From simple landing pages to complex full-stack platforms, we use modern technologies like React, Next.js, Node.js, and MongoDB to deliver production-ready and SEO-friendly solutions.",
    points: [
      "Next.js & React Applications",
      "Custom Backend & REST APIs",
      "SEO Optimized Architecture",
      "Secure Authentication Systems",
    ],
  },
  {
    title: "UI / UX Design",
    icon: <Layout size={28} />,
    description:
      "User experience is the backbone of every successful digital product.",
    details:
      "We design clean, intuitive, and conversion-focused interfaces that provide smooth user journeys while maintaining strong brand identity.",
    points: [
      "Modern & Clean UI",
      "Mobile-First Responsive Design",
      "Tailwind CSS Design Systems",
      "Conversion-Oriented Layouts",
    ],
  },
  {
    title: "Startup & MVP Development",
    icon: <Rocket size={28} />,
    description:
      "We help startups turn ideas into scalable and real-world products.",
    details:
      "Our MVP-first approach allows founders to launch faster, validate ideas, and scale confidently with clean architecture.",
    points: [
      "MVP & Prototype Development",
      "Admin Dashboards",
      "Scalable Architecture",
      "Product-Focused Engineering",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: <ShieldCheck size={28} />,
    description:
      "Post-launch support is critical for long-term success.",
    details:
      "We provide continuous maintenance, performance optimization, security updates, and feature enhancements.",
    points: [
      "Bug Fixes & Stability",
      "Performance Optimization",
      "Security Monitoring",
      "Feature Enhancements",
    ],
  },
];

const faqs = [
  {
    q: "What services does Buniyad Techz offer?",
    a: "Buniyad Techz offers web development, full-stack applications, UI/UX design, startup MVP development, and long-term maintenance services.",
  },
  {
    q: "Do you provide custom web development services in India?",
    a: "Yes, we provide fully custom web development services in India using Next.js, React, Node.js, and MongoDB.",
  },
  {
    q: "Is Buniyad Techz suitable for startup MVP development?",
    a: "Absolutely. We specialize in building startup MVPs that are fast, scalable, and investor-ready.",
  },
  {
    q: "Which technologies do you use?",
    a: "We primarily use Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide long-term maintenance, performance optimization, and feature upgrades.",
  },
];

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <>
      {/* PAGE CONTENT */}
      <main className="px-6 pt-24 pb-32 max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-indigo-500">Services</span>
          </h1>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Buniyad Techz is a technology partner focused on building strong
            digital foundations. We deliver reliable, scalable, and future-ready
            web solutions.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4 text-indigo-400">
                {service.icon}
                <h2 className="text-2xl font-semibold text-white">
                  {service.title}
                </h2>
              </div>

              <p className="text-neutral-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {service.details}
              </p>

              <ul className="space-y-2 text-sm text-neutral-300">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* PROCESS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Our <span className="text-indigo-500">Work Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {["Plan", "Design", "Develop", "Launch"].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="text-indigo-400 font-bold text-2xl mb-2">
                  0{i + 1}
                </div>
                <p className="text-neutral-300">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <section className="mt-32 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to build your <span className="text-indigo-400">next product</span>?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Whether you’re a startup or business, Buniyad Techz is ready to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-full font-medium"
          >
            Start Your Project
          </a>
        </section>

        {/* FAQ */}
        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-indigo-500">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER (FULL WIDTH) */}
      <Footer />
    </>
  );
}
