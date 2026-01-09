import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Software development company | Buniyad Techz",
  description:
    "Buniyad Techz provides modern website and software development services solutions for startups and businesses.",
  keywords: [
    "Software development company","Web development company","App development company","Website development agency"
  ],
  authors: [{ name: "Buniyad Techz" }],
  openGraph: {
    title: "Buniyad Techz",
    description:
      "We build a scalable, modern and fast web application to grow your startup bussiness online",
    url: "htt",
    siteName: "Buniyad Techz",
    images: [
      {
        url: "https://your-domain.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buniyad Techz School Management System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buniyad Techz",
    description:
      "We build a scalable, modern and fast web application to grow your startup bussiness online",
    images: ["https://buniyadtechz.vercel.app/blogs/erp-system"],
  },
  metadataBase: new URL("https://buniyadtechz.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="sticky top-0 z-50 bg-slate-950">
          <Navbar />
        </div>
        {children}
        <GoogleAnalytics gaId="G-N715B7KD06" />
      </body>
    </html>
  );
}
