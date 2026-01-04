// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import Image from "next/image";
// import { projects } from "@/data";

// const ProjectsShowcase = () => {
//   return (
//     <section className="py-28 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      
//       {/* SECTION HEADING */}
//       <div className="max-w-5xl mx-auto text-center mb-24">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Selected <span className="text-indigo-400">Projects</span>
//         </h2>
//         <p className="text-neutral-400 text-lg">
//           A showcase of meaningful projects focused on real-world use cases,
//           scalability, and clean engineering.
//         </p>
//       </div>

//       {/* PROJECT CARDS */}
//       <div className="max-w-6xl mx-auto space-y-32">
//         {projects.map((project, index) => {
//           const reverse = index % 2 !== 0;

//           return (
//             <div
//               key={project.id}
//               className={`flex flex-col md:flex-row ${
//                 reverse ? "md:flex-row-reverse" : ""
//               } items-center gap-14`}
//             >
//               {/* IMAGE */}
//               <div className="relative w-full md:w-1/2 h-[320px] rounded-2xl overflow-hidden border border-white/10">
//                 <Image
//                   src={project.img}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </div>

//               {/* CONTENT */}
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl font-semibold mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-indigo-400 mb-4">
//                   {project.subtitle}
//                 </p>

//                 <p className="text-neutral-300 leading-relaxed mb-6">
//                   {project.description}
//                 </p>

//                 {/* HIGHLIGHTS */}
//                 <ul className="list-disc pl-6 text-neutral-400 mb-6 space-y-1">
//                   {project.highlights.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//                 {/* TECH STACK */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 {project.link !== "#" && (
//                   <button
//                     onClick={() => window.open(project.link, "_blank")}
//                     className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-medium"
//                   >
//                     View Project
//                     <FaLocationArrow />
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectsShowcase;


"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { useState, useEffect, useRef } from "react";

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* SECTION HEADING */}
      <div className="relative max-w-5xl mx-auto text-center mb-24 opacity-0 translate-y-10 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent animate-gradient">
          Selected <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-neutral-400 text-lg">
          A showcase of meaningful projects focused on real-world use cases,
          scalability, and clean engineering.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="relative max-w-6xl mx-auto space-y-32">
        {projects.map((project, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={project.id}
              ref={(el) => (observerRefs.current[index] = el)}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center gap-14 opacity-0 translate-y-20 transition-all duration-1000 ease-out project-card`}
            >
              {/* IMAGE */}
              <div 
                className="relative w-full md:w-1/2 h-[320px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredProject === project.id ? 'animate-pulse' : ''}`} />
                
                {/* Floating animation overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h3 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400 mb-4 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6 transition-colors duration-300 hover:text-neutral-200">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 text-neutral-400 transform transition-all duration-300 hover:translate-x-2 hover:text-neutral-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="text-indigo-400 mt-1.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-indigo-500/50 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-default"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        transitionDelay: `${i * 30}ms`
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && project.link !== "#" && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="group inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-all duration-300 font-medium relative overflow-hidden px-6 py-3 rounded-lg border border-indigo-500/20 hover:border-indigo-500/50 hover:bg-indigo-500/10"
                  >
                    <span className="relative z-10">View Project</span>
                    <FaLocationArrow className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }

        .project-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ProjectsShowcase;