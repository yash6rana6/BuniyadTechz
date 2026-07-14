export const metadata = {
  title: "Internship Program | Buniyad Techz – Learn, Build, Grow",
  description:
    "Join the Buniyad Techz internship program. Work on real-world full-stack projects, learn Next.js, Node.js and MongoDB, and get hands-on mentorship.",
  keywords: [
    "Buniyad Techz internship",
    "web development internship",
    "full stack internship India",
    "Next.js internship",
    "remote internship for students",
  ],
  openGraph: {
    title: "Internship Program | Buniyad Techz",
    description:
      "Kickstart your career with a hands-on internship at Buniyad Techz — real projects, real mentorship, real growth.",
    url: "https://buniyadtechz.com/internship",
    siteName: "Buniyad Techz",
    type: "website",
  },
};

export default function InternshipLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      {children}
    </section>
  );
}
