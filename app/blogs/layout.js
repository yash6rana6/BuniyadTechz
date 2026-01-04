export const metadata = {
  title: "Blogs | Buniyad Techz – Web Development & Technology Insights",
  description:
    "Read expert blogs from Buniyad Techz on web development, school websites, ERP systems, portfolios, and modern technology solutions.",
  keywords: [
    "web development blogs",
    "school website development",
    "school ERP system",
    "portfolio website guide",
    "technology insights",
    "Next.js blogs",
  ],
  openGraph: {
    title: "Blogs | Buniyad Techz",
    description:
      "Insights, guides, and articles on web development, education technology, and scalable digital products by Buniyad Techz.",
    url: "https://buniyadtechz.com/blogs",
    siteName: "Buniyad Techz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Buniyad Techz",
    description:
      "Explore professional blogs on web development, ERP systems, and modern digital solutions.",
  },
};

export default function BlogsLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      {children}
    </section>
  );
}
