export const metadata = {
  title: "Our Services | Buniyad Techz",
  description:
    "Buniyad Techz offers professional web development, full-stack solutions, UI/UX design, and scalable digital products for startups and businesses.",
  keywords: [
    "Buniyad Techz services",
    "web development services",
    "full stack developer india",
    "react next js services",
    "startup tech partner",
  ],
  openGraph: {
    title: "Services by Buniyad Techz",
    description:
      "We build fast, scalable, and modern web solutions tailored to your business.",
    url: "https://buniyadtechz.com/services",
    siteName: "Buniyad Techz",
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      {children}
    </section>
  );
}
