"use client";

import { Rocket, GraduationCap, School } from "lucide-react";

const UpcomingProjects = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      
      {/* SECTION HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Upcoming <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed">
          A glimpse into the next generation of products we are actively building.
          These upcoming projects represent long-term vision, scalability, and
          real-world problem solving.
        </p>
      </div>

      {/* ===================== */}
      {/* 1️⃣ PARIKSHA PILLAR */}
      {/* ===================== */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="relative bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 border border-purple-500/30 rounded-3xl p-10 md:p-14 overflow-hidden">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <Rocket />
                <span className="uppercase tracking-wide text-sm">
                  Flagship Upcoming Project
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Pariksha Pillar
              </h3>

              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Pariksha Pillar is an advanced online exam preparation platform
                designed for competitive aspirants. The platform will allow
                students to practice previous year questions (PYQs), attempt
                full-length mock tests with real exam-like timers, and analyze
                their performance with detailed insights.
              </p>

              <p className="text-neutral-400 leading-relaxed mb-8">
                Built with scalability and accuracy in mind, Pariksha Pillar
                aims to replicate the real examination environment digitally,
                helping students improve speed, accuracy, and confidence.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "Full-Stack MERN",
                  "Real Exam Timers",
                  "Performance Analytics",
                  "Admin Panel",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-purple-400" />
                Vision & Impact
              </h4>
              <ul className="space-y-3 text-neutral-300 text-sm leading-relaxed">
                <li>• Real exam simulation for government exams</li>
                <li>• Detailed result analysis & attempt history</li>
                <li>• Scalable for lakhs of students</li>
                <li>• Clean, distraction-free exam UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* 2️⃣ SCHOOL MANAGEMENT SYSTEM */}
      {/* ===================== */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-3 text-indigo-400">
              <School />
              <span className="uppercase tracking-wide text-sm">
                Upcoming SaaS Platform
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              School Management System
            </h3>

            <p className="text-neutral-400 leading-relaxed mb-6">
              A complete digital solution designed to manage school operations
              efficiently. The system will include modules for students,
              teachers, attendance, examinations, fees, timetables, and
              administration.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              This platform focuses on simplifying daily academic and
              administrative tasks while providing transparency and real-time
              access to data.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-300">
              Planned Core Modules
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-300">
              <li>• Student Management</li>
              <li>• Teacher Dashboard</li>
              <li>• Attendance System</li>
              <li>• Examination Module</li>
              <li>• Fees Management</li>
              <li>• Reports & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default UpcomingProjects;
