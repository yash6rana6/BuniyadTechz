"use client";

import React, { memo, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Memoized floating icons data
const floatingIcons = [
  { src: "re.svg", top: "10%", left: "20%", alt: "React" },
  { src: "js.svg", top: "25%", left: "70%", alt: "JavaScript" },
  { src: "nodejs.svg", top: "45%", left: "40%", alt: "Node.js" },
  { src: "mdb.svg", top: "65%", left: "15%", alt: "MongoDB" },
  { src: "tail.svg", top: "75%", left: "85%", alt: "Tailwind" },
  { src: "ts.svg", top: "50%", left: "10%", alt: "TypeScript" },
  { src: "next.svg", top: "35%", left: "50%", alt: "Next.js" },
  { src: "angular.svg", top: "20%", left: "30%", alt: "Angular" },
  { src: "aws.svg", top: "60%", left: "70%", alt: "AWS" },
  { src: "css3.svg", top: "30%", left: "10%", alt: "CSS3" },
  { src: "git.svg", top: "45%", left: "80%", alt: "Git" },
  { src: "github.svg", top: "60%", left: "30%", alt: "GitHub" },
  { src: "html5.svg", top: "15%", left: "60%", alt: "HTML5" },
  { src: "mysql.svg", top: "50%", left: "60%", alt: "MySQL" },
  { src: "npm.svg", top: "70%", left: "50%", alt: "NPM" },
];

// Memoized social links
const socialLinks = [
  {
    href: "https://www.instagram.com/buniyadtechz/",
    Icon: AiFillInstagram,
    hoverColor: "hover:text-pink-500",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/buniyadtechz/",
    Icon: FaLinkedinIn,
    hoverColor: "hover:text-blue-600",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/buniyadtechz",
    Icon: FaGithub,
    hoverColor: "hover:text-gray-400",
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61577281851785",
    Icon: FaFacebook,
    hoverColor: "hover:text-blue-400",
    label: "Facebook",
  },
];

const FloatingIcon = memo(({ src, top, left, alt, index }) => (
  <motion.img
    key={`${src}-${index}`}
    src={`/${src}`}
    className="absolute w-8 h-8 md:w-12 md:h-12 opacity-20 hover:opacity-40 transition-opacity duration-300"
    style={{ top, left }}
    alt={alt}
    loading="lazy"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 4 + index * 0.2,
      repeat: Infinity,
      delay: index * 0.3,
    }}
  />
));

FloatingIcon.displayName = 'FloatingIcon';

// Optimized social link component
const SocialLink = memo(({ href, Icon, hoverColor, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-white/80 ${hoverColor} transition-all duration-300 p-2 rounded-full hover:bg-white/10`}
    aria-label={label}
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
  </motion.a>
));

SocialLink.displayName = 'SocialLink';

export function LampHero() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = useMemo(() => ({ 
    stiffness: 300, 
    damping: 30, 
    mass: 1 
  }), []);

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.9]),
    springConfig
  );

  return (
    <LampContainer>
      <motion.div
        ref={ref}
        style={{ translateY, opacity, scale }}
        className="relative z-20 text-white px-6 md:px-20 max-w-4xl mx-auto text-center"
        suppressHydrationWarning
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            options={{
              strings: [
                "We Build Websites That Convert",
                "We Design With Purpose",
                "We Create Digital Magic",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We help startups and brands grow online with fast, modern, and
          strategic websites that bring results.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#services">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 text-lg"
            >
              <span>Explore Now</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <SocialLink key={social.href} {...social} />
        ))}
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = memo(({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      {/* Optimized Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingIcons.map((icon, index) => (
          <FloatingIcon
            key={`${icon.src}-${index}`}
            {...icon}
            index={index}
          />
        ))}
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        {/* Left Glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent transform -translate-y-1/2"
        />
        
        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 transform -translate-y-1/2"
        />

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 h-36 bg-cyan-400/50 blur-2xl rounded-full"
          />
        </div>

        {/* Lamp Line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-4">
        {children}
      </div>
    </div>
  );
});

LampContainer.displayName = 'LampContainer';