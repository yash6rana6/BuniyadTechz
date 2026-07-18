"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
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
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  ArrowDown,
  Sparkles,
  IndianRupee,
  CalendarDays,
  Globe2,
  Layers,
  ChevronDown,
  Github,
  Linkedin,
  X,
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
  {
    icon: BadgeCheck,
    title: "Certificate Optional",
    desc: "Internship participation is completely free. Students may optionally request a verified certificate after successful completion.",
  },
];

const process = [
  { step: "01", title: "Apply", desc: "Fill out the application form below with your details and track of interest." },
  { step: "02", title: "Screening", desc: "We review your profile and shortlist candidates for a short chat." },
  { step: "03", title: "Onboarding", desc: "Selected interns get onboarded with project access and mentor assignment." },
  { step: "04", title: "Build & Learn", desc: "Work on real tasks, ship features, and grow with regular feedback." },
];

const builds = [
  {
    label: "Startup Landing Pages",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "React Applications",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Backend APIs",
    img: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "UI Components",
    img: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Portfolio Projects",
    img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80",
  },
];

const highlights = [
  { icon: IndianRupee, title: "100% Free", desc: "No fees, ever" },
  { icon: CalendarDays, title: "4 Weeks", desc: "Structured duration" },
  { icon: Globe2, title: "Remote", desc: "Work from anywhere" },
  { icon: Layers, title: "Project Based", desc: "Real deliverables" },
];

const trustPoints = [
  "No Registration Fee",
  "No Hidden Charges",
  "Project Based Learning",
  "Certificate Optional",
  "Learn By Building",
];

const faqs = [
  {
    q: "Is the internship free?",
    a: "Yes. The internship is completely free.",
  },
  {
    q: "Is the certificate mandatory?",
    a: "No. The certificate is completely optional.",
  },
  {
    q: "Do I need prior experience?",
    a: "No, the program is designed to be beginner-friendly.",
  },
  {
    q: "Is this remote?",
    a: "Yes, the entire internship is remote-friendly.",
  },
  {
    q: "Will I get placement?",
    a: "There is no placement guarantee. The focus is on hands-on project experience.",
  },
  {
    q: "How long is the internship?",
    a: "4 weeks.",
  },
  {
    q: "Can beginners apply?",
    a: "Yes, beginners are welcome to apply.",
  },
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

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];
const currentYears = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"];

const MAX_RESUME_MB = 5;

/* ---------------- small components ---------------- */

function TrustBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E2E4E9]/90 bg-white/[0.06] border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
      <CheckCircle2 size={13} className="text-[#3CD070]" />
      {children}
    </span>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 rounded-2xl bg-[#1C1D26] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[#E2E4E9]">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#C94A6F]"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#868996] text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
    college: "",
    currentYear: currentYears[0],
    github: "",
    linkedin: "",
    experienceLevel: experienceLevels[0],
    track: "Frontend Development",
    message: "",
    resume: null, // File object, not a string
  };

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

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
    const urlRegex = /^https?:\/\/.+\..+/i;
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim()))
      newErrors.email = "Enter a valid email address.";

    // Phone is optional, but if provided it must be a valid format.
    if (form.phone.trim() && !phoneRegex.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number.";

    if (!form.college.trim()) newErrors.college = "College name is required.";

    if (form.github.trim() && !urlRegex.test(form.github.trim()))
      newErrors.github = "Enter a valid GitHub URL.";

    if (form.linkedin.trim() && !urlRegex.test(form.linkedin.trim()))
      newErrors.linkedin = "Enter a valid LinkedIn URL.";

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
      body.append("college", form.college.trim());
      body.append("currentYear", form.currentYear);
      body.append("github", form.github.trim());
      body.append("linkedin", form.linkedin.trim());
      body.append("experienceLevel", form.experienceLevel);
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
        className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
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
            className="text-[#E2E4E9]/85 max-w-2xl text-lg leading-relaxed mb-8"
          >
            Build real-world projects with BuniyadTechz. Gain practical
            experience by working on startup-style tasks with mentor
            guidance.
          </motion.p>

          <motion.a
            href="#apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#C94A6F] hover:bg-[#B13D5F] transition-all duration-300 px-8 py-3.5 rounded-full font-medium text-white shadow-lg shadow-[#C94A6F]/30 hover:shadow-[0_0_28px_rgba(201,74,111,0.65)]"
          >
            Apply Now
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mt-6"
          >
            <TrustBadge>100% Free Internship</TrustBadge>
            <TrustBadge>Remote</TrustBadge>
            <TrustBadge>Certificate Optional</TrustBadge>
          </motion.div>
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

        {/* ---------------- HIGHLIGHTS ---------------- */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUpItem}
              className="text-center bg-[#1C1D26] border border-white/10 rounded-2xl py-8 px-4"
            >
              <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-[#C94A6F]/10 flex items-center justify-center">
                <h.icon className="text-[#C94A6F]" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {h.title}
              </div>
              <p className="text-[#868996] text-sm">{h.desc}</p>
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
                    loading="lazy"
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
              loading="lazy"
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

        {/* ---------------- WHAT YOU'LL BUILD ---------------- */}
        <section className="mb-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What You'll <span className="text-[#C94A6F]">Build</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {builds.map((b) => (
              <motion.div
                key={b.label}
                variants={fadeUpItem}
                whileHover={{ scale: 1.03 }}
                className="relative h-56 rounded-2xl overflow-hidden"
              >
                <Image
                  src={b.img}
                  alt={b.label}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
                  {b.label}
                </span>
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

        {/* ---------------- FAQ ---------------- */}
        <section className="mb-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Frequently Asked <span className="text-[#C94A6F]">Questions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[#868996] text-center max-w-xl mx-auto mb-12"
          >
            Everything you need to know before applying.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((item, i) => (
              <motion.div key={item.q} variants={fadeUpItem}>
                <FaqItem
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------- APPLICATION FORM ---------------- */}
        <section id="apply" className="grid md:grid-cols-2 gap-16 items-start mb-16 scroll-mt-24">
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
              className="space-y-4 text-[#E2E4E9]/85 text-sm mb-10"
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

            {/* Trust box */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-[#3CD070]/25 bg-[#3CD070]/[0.06] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-[#3CD070]" size={20} />
                <h3 className="font-semibold text-[#E2E4E9]">
                  Why Students Trust BuniyadTechz
                </h3>
              </div>
              <ul className="space-y-2.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-[#E2E4E9]/85">
                    <CheckCircle2 className="text-[#3CD070] shrink-0" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1C1D26] border border-white/10 rounded-2xl p-10 shadow-lg relative"
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
                  Phone Number <span className="text-[#868996]">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                    errors.phone ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                    College Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    value={form.college}
                    onChange={handleChange}
                    placeholder="Your college / university"
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                      errors.college ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                    }`}
                  />
                  {errors.college && <p className="text-red-400 text-xs mt-1">{errors.college}</p>}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#E2E4E9]/85">
                    Current Year <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="currentYear"
                    required
                    value={form.currentYear}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C94A6F] transition"
                  >
                    {currentYears.map((y) => (
                      <option key={y} value={y} className="bg-neutral-900">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-sm mb-2 text-[#E2E4E9]/85">
                    <Github size={14} /> GitHub Profile <span className="text-[#868996]">(optional)</span>
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                      errors.github ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                    }`}
                  />
                  {errors.github && <p className="text-red-400 text-xs mt-1">{errors.github}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm mb-2 text-[#E2E4E9]/85">
                    <Linkedin size={14} /> LinkedIn Profile <span className="text-[#868996]">(optional)</span>
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white outline-none transition ${
                      errors.linkedin ? "border-red-400" : "border-white/10 focus:border-[#C94A6F]"
                    }`}
                  />
                  {errors.linkedin && <p className="text-red-400 text-xs mt-1">{errors.linkedin}</p>}
                </div>
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

              <div className="grid sm:grid-cols-2 gap-4">
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
                    Experience Level <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="experienceLevel"
                    required
                    value={form.experienceLevel}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C94A6F] transition"
                  >
                    {experienceLevels.map((lvl) => (
                      <option key={lvl} value={lvl} className="bg-neutral-900">
                        {lvl}
                      </option>
                    ))}
                  </select>
                </div>
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
                className="w-full bg-[#C94A6F] hover:bg-[#B13D5F] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 py-3 rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#C94A6F]/20 hover:shadow-[0_0_25px_rgba(201,74,111,0.55)]"
              >
                {status === "loading" && <Loader2 className="animate-spin" size={18} />}
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </motion.button>

              <AnimatePresence mode="wait">
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

            {/* Premium success overlay */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-[#12131C]/95 backdrop-blur-sm rounded-2xl p-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full max-w-sm text-center bg-[#1C1D26] border border-[#3CD070]/30 rounded-2xl p-8 relative"
                  >
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      aria-label="Close"
                      className="absolute top-4 right-4 text-[#868996] hover:text-white transition cursor-pointer"
                    >
                      <X size={18} />
                    </button>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                      className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3CD070]/10 flex items-center justify-center"
                    >
                      <CheckCircle2 className="text-[#3CD070]" size={34} />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-[#868996] text-sm leading-relaxed mb-6">
                      Thank you for applying. Our team will review your
                      application and contact shortlisted candidates via
                      email.
                    </p>

                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-block bg-[#C94A6F] hover:bg-[#B13D5F] transition px-6 py-2.5 rounded-full font-medium text-white text-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
              loading="lazy"
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
              className="inline-block bg-[#C94A6F] hover:bg-[#B13D5F] transition-all duration-300 px-8 py-3 rounded-full font-medium hover:shadow-[0_0_25px_rgba(201,74,111,0.55)]"
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