"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {
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
            About <span className="text-indigo-400">Buniyad Techz</span>
          </h1>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Buniyad Techz is built on clarity, honesty, and long-term thinking.
            We create digital products that feel reliable, scalable, and human.
          </p>
        </motion.section>

        {/* STORY + IMAGE */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
        >
          {/* TEXT */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-indigo-400">Story</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Buniyad Techz started as a mindset — to build technology that
              prioritizes clarity over complexity and long-term value over
              shortcuts.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We work with startups and businesses to turn ideas into
              performance-driven, SEO-friendly web applications using modern
              technologies like React and Next.js.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="relative h-[380px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Buniyad Techz team collaborating"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition" />
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-10"
          >
            Our <span className="text-indigo-400">Goals</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-neutral-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            These goals guide every decision we make — from how we design
            interfaces to how we write code and support our clients long after
            launch.
          </motion.p>

          <div className="max-w-5xl mx-auto">
            <div className="relative pl-12 md:pl-0">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-indigo-500/30 hidden md:block" />
              {[
                {
                  step: "01",
                  title: "Build Products That Matter",
                  desc: "Create digital products that solve real problems, feel dependable in daily use, and continue delivering value as they scale.",
                },
                {
                  step: "02",
                  title: "Support Founders & Growing Teams",
                  desc: "Work closely with startups and businesses to turn ideas into production-ready platforms without unnecessary complexity.",
                },
                {
                  step: "03",
                  title: "Think Long-Term, Always",
                  desc: "Design systems that remain maintainable, secure, and adaptable as technology and business needs evolve.",
                },
              ].map((goal, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative flex gap-8 mb-16 last:mb-0 items-start"
                >
                  {/* Step circle + connector line (only between items) */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center text-indigo-400 font-bold text-lg z-10 bg-backdrop-blur-sm">
                      {goal.step}
                    </div>
                    {/* Connector line to next item - hide on last */}
                    {i < 2 && (
                      <div className="w-px bg-indigo-500/30 mt-4 flex-1 hidden md:block" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10">
                    <h3 className="text-2xl font-semibold mb-4">
                      {goal.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* VALUES */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            What <span className="text-indigo-400">Drives Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Clarity Over Complexity",
                desc: "We design systems that are easy to understand, scale, and maintain.",
              },
              {
                title: "Long-Term Thinking",
                desc: "Every decision is made keeping future growth in mind.",
              },
              {
                title: "Human-Centered Products",
                desc: "Technology should feel intuitive, helpful, and natural.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition shadow-lg hover:shadow-indigo-500/10"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IMAGE STRIP */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-32"
        >
          {[
            "https://images.unsplash.com/photo-1531482615713-2afd69097998",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
          ].map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative h-[260px] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={src}
                alt="Buniyad Techz work culture"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition" />
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-12 text-center shadow-lg hover:shadow-indigo-500/20 transition"
        >
          <h3 className="text-3xl font-bold mb-4">
            Let’s build something{" "}
            <span className="text-indigo-400">meaningful</span>
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            If you value clean engineering, transparency, and long-term
            collaboration — we’ll be a great fit.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-full font-medium"
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
