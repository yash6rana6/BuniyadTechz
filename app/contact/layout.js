export const metadata = {
  title: "Contact Us | Buniyad Techz – Let’s Build Together",
  description:
    "Get in touch with Buniyad Techz for web development, full-stack solutions, startup MVPs, and scalable digital products.",
  keywords: [
    "contact Buniyad Techz",
    "web development contact",
    "hire full stack developer",
    "startup tech partner",
    "Next.js development agency",
  ],
  openGraph: {
    title: "Contact Buniyad Techz",
    description:
      "Have a project idea? Contact Buniyad Techz to build reliable, scalable, and SEO-friendly digital products.",
    url: "https://buniyadtechz.com/contact",
    siteName: "Buniyad Techz",
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      {children}
    </section>
  );
}
