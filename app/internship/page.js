"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Footer from "@/components/Footer";
import {
  Code2,
  Server,
  Palette,
  GraduationCap,
  Users,
  Clock,
  Award,
  CheckCircle2,
  Loader2,
  ArrowDown,
  Sparkles,
} from "lucide-react";

/* ---------------- shared variants ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------------- data ---------------- */

const tracks = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Build responsive, animated UIs using React, Next.js and Tailwind CSS on real client projects.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Design APIs, work with databases and authentication using Node.js, Express and MongoDB.",
    img: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Design clean, user-friendly interfaces and prototypes for web and mobile products.",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
  },
];

const perks = [
  {
    icon: GraduationCap,
    title: "Real Project Experience",
    desc: "Work on live client and in-house products, not just tutorials.",
  },
  {
    icon: Users,
    title: "Mentorship",
    desc: "Direct guidance from experienced developers throughout the internship.",
  },
  {
    icon: Clock,
    title: "Flexible & Remote",
    desc: "Remote-friendly internship with flexible working hours.",
  },
  {
    icon: Award,
    title: "Certificate & LOR",
    desc: "Get a certificate and letter of recommendation on successful completion.",
  },
];

const process = [
  { step: "01", title: "Apply", desc: "Fill out the application form below with your details and track of interest." },
  { step: "02", title: "Screening", desc: "We review your profile and shortlist candidates for a short chat." },
  { step: "03", title: "Onboarding", desc: "Selected interns get onboarded with project access and mentor assignment." },
  { step: "04", title: "Build & Learn", desc: "Work on real tasks, ship features, and grow with regular feedback." },
];

const gallery = [
  "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=900&q=80",
];

const stats = [
  { label: "Interns Onboarded", value: 40, suffix: "+" },
  { label: "Live Projects Shipped", value: 15, suffix: "+" },
  { label: "Avg. Mentor Rating", value: 4.8, suffix: "/5" },
  { label: "Tracks Available", value: 3, suffix: "" },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "WebSockets",
  "NextAuth",
  "Express",
  "PartyKit",
  "Ably",
];

const MAX_RESUME_MB = 5;

/* ---------------- small components ---------------- */

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const isFloat = value % 1 !== 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- page ---------------- */

export default function InternshipPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.95]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    track: "Frontend Development",
    message: "",
    resume: null, // File object, not a string
  };

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (file && file.size > MAX_RESUME_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: `File too large. Max ${MAX_RESUME_MB}MB allowed.`,
      }));
      setForm({ ...form, resume: null });
      e.target.value = ""; // reset the input
      return;
    }

    setErrors((prev) => ({ ...prev, resume: undefined }));
    setForm({ ...form, resume: file });
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim()))
      newErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number.";
    if (!form.message.trim()) newErrors.message = "Please tell us a bit about yourself.";
    if (!form.resume) newErrors.resume = "Resume (PDF) is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const body = new FormData();
      body.append("name", form.name.trim());
      body.append("email", form.email.trim());
      body.append("phone", form.phone.trim());
      body.append("track", form.track);
      body.append("message", form.message.trim());
      body.append("resume", form.resume);

      const res = await fetch("/api/internship", {
        method: "POST",
        body, // don't set Content-Type manually, browser sets multipart boundary
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setErrors({});
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* ---------------- HERO (parallax) ---------------- */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80"
            alt="Developer working on a laptop"
            fill
            priority
            className="object-cover scale-110"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#12131C]/80 to-[#12131C]"
          style={{ opacity: heroOverlayOpacity }}
        />

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 text-xs font-medium tracking-wider uppercase text-[#D9819B] bg-[#C94A6F]/10 border border-[#C94A6F]/30 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
            <Sparkles size={14} /> Internship Program
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight"
          >
            {["Learn", "by", "Building", "at"].map((word) => (
              <motion.span
                key={word}
                variants={fadeUpItem}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <motion.span variants={fadeUpItem} className="inline-block text-[#C94A6F]">
              Buniyad Techz
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#E2E4E9]/85 max-w-2xl text-lg leading-relaxed mb-10"
          >
            Get hands-on experience working on real full-stack products.
            Frontend, backend, design or marketing — grow with real
            responsibility, not busywork.
          </motion.p>

          <motion.a
            href="#apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#C94A6F] hover:bg-[#B13D5F] transition px-8 py-3.5 rounded-full font-medium text-white shadow-lg shadow-[#C94A6F]/30"
          >
            Apply Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#868996]"
          >
            <ArrowDown size={22} />
          </motion.div>
        </motion.div>
      </section>

      <main className="bg-[#12131C] text-[#E2E4E9] px-6 pt-20 pb-32 max-w-7xl mx-auto">

        {/* ---------------- STATS ---------------- */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUpItem}
              className="text-center bg-[#1C1D26] border border-white/10 rounded-2xl py-8 px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#C94A6F] mb-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#868996] text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ---------------- TECH MARQUEE ---------------- */}
        <section className="mb-28 -mx-6 overflow-hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#15161F] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#15161F] to-transparent z-10" />
            <div className="flex overflow-hidden">
              <div className="flex gap-4 py-2 animate-marquee whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="px-5 py-2.5 rounded-full bg-[#1C1D26] border border-white/10 text-[#E2E4E9]/85 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
        </section>

        {/* ---------------- TRACKS ---------------- */}
        <section className="mb-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Internship <span className="text-[#C94A6F]">Tracks</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tracks.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                className="group bg-[#1C1D26] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C94A6F]/40 transition-colors"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-[#C94A6F]/20 backdrop-blur-sm border border-[#C94A6F]/40 flex items-center justify-center">
                    <t.icon className="text-[#D9819B]" size={18} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                  <p className="text-[#868996] text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------- WHY INTERN (image + perks) ---------------- */}
        <section className="mb-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-80 lg:h-[420px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Team working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12131C] via-transparent to-transparent" />
          </motion.div>

          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10"
            >
              Why Intern <span className="text-[#C94A6F]">With Us</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {perks.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUpItem}
                  className="bg-[#1C1D26] border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-11 h-11 mb-4 rounded-full bg-[#C94A6F]/10 flex items-center justify-center">
                    <p.icon className="text-[#C94A6F]" size={20} />
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-[#868996] text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ---------------- GALLERY ---------------- */}
        <section className="mb-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Life at <span className="text-[#C94A6F]">Buniyad Techz</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                variants={fadeUpItem}
                whileHover={{ scale: 1.03 }}
                className={`relative rounded-2xl overflow-hidden ${
                  i === 0 || i === 3 ? "h-64" : "h-48 lg:h-64 lg:mt-8"
                }`}
              >
                <Image
                  src={src}
                  alt="Buniyad Techz workspace"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------- PROCESS ---------------- */}
        <section className="mb-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            How It <span className="text-[#C94A6F]">Works</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* connecting line on large screens */}
            <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#C94A6F]/40 to-transparent" />

            {process.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUpItem}
                className="relative bg-[#1C1D26] border border-white/10 rounded-2xl p-6"
              >
                <div className="w-9 h-9 rounded-full bg-[#C94A6F] text-white text-sm font-semibold flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-[#868996] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------- APPLICATION FORM ---------------- */}
        <section id="apply" className="grid md:grid-cols-2 gap-16 items-start mb-28 scroll-mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Apply for the <span className="text-[#C94A6F]">Internship</span>
            </h2>
            <p className="text-[#868996] leading-relaxed mb-10">
              Fill in your details below and pick the track you're most
              interested in. We review applications on a rolling basis and
              reach out to shortlisted candidates by email.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-[#E2E4E9]/85 text-sm"
            >
              {[
                "Open to students and freshers",
                "Remote-friendly, flexible hours",
                "Certificate + letter of recommendation",
              ].map((item) => (
                <motion.div key={item} variants={fadeUpItem} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C94A6F] shrink-0" size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1C1D26] border border-white/10 rounded-2xl p-10 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Application Form
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                    errors.name ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                    errors.email ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                    errors.phone ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Upload Resume (PDF) <span className="text-red-400">*</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  required
                  onChange={handleFileChange}
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#C94A6F] file:text-white file:text-sm file:font-medium file:cursor-pointer hover:file:bg-[#B13D5F] ${
                    errors.resume ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                <p className="text-xs text-[#868996]/70 mt-1">PDF format only • Max {MAX_RESUME_MB}MB</p>
                {errors.resume && <p className="text-red-400 text-xs mt-1">{errors.resume}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Preferred Track <span className="text-red-400">*</span>
                </label>
                <select
                  name="track"
                  required
                  value={form.track}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C94A6F] transition"
                >
                  {tracks.map((t) => (
                    <option key={t.title} value={t.title} className="bg-neutral-900">
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                  Why do you want to intern with us? <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a bit about yourself..."
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition resize-none ${
                    errors.message ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#C94A6F] hover:bg-[#B13D5F] disabled:opacity-60 transition py-3 rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer "
              >
                {status === "loading" && <Loader2 className="animate-spin" size={18} />}
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#3CD070] text-sm text-center"
                  >
                    Application submitted! We'll get back to you over email.
                  </motion.p>
                )}
                {status === "error" && Object.keys(errors).length === 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
                {status === "error" && Object.keys(errors).length > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Please fill all required fields correctly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 text-center"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1600&q=80"
              alt="Workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#12131C]/90" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Have questions about the <span className="text-[#D9819B]">internship</span>?
            </h3>
            <p className="text-[#E2E4E9] mb-8 max-w-2xl mx-auto">
              Reach out to us directly and we'll be happy to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#C94A6F] hover:bg-[#B13D5F] transition px-8 py-3 rounded-full font-medium"
            >
              Contact Us
            </a>
          </div>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}