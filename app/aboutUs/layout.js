export const metadata = {
  title: "About Us | Buniyad Techz – Web Development Agency",
  description:
    "Buniyad Techz is a web development agency building scalable, SEO-friendly, and high-performance digital products for startups and businesses.",
  keywords: [
    "web development agency India",
    "full stack development company",
    "startup tech partner",
    "software provider"
  ],
  openGraph: {
    title: "About Buniyad Techz",
    description:
      "Learn about Buniyad Techz, a technology partner focused on building reliable and future-ready web solutions.",
    url: "https://buniyadtechz.com/about",
    siteName: "Buniyad Techz",
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      {children}
    </section>
  );
}
