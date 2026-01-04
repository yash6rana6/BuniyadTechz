export const metadata = {
  title: "Projects & Case Studies | Buniyad Techz",
  description:
    "Explore real-world web development projects built by Buniyad Techz. From startup MVPs to full-stack web applications using React, Next.js, and Node.js.",
  keywords: [
    "web development projects",
    "full stack projects",
    "react next js portfolio",
    "startup mvp case studies",
    "buniyad techz projects",
  ],
  openGraph: {
    title: "Web Development Projects | Buniyad Techz",
    description:
      "A showcase of scalable, SEO-friendly, and high-performance web applications built for startups and businesses.",
    url: "https://buniyadtechz.com/projects",
    siteName: "Buniyad Techz",
    type: "website",
  },
};

export default function ProjectsLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      {children}
    </section>
  );
}
