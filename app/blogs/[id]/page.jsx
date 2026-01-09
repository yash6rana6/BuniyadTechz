import blogs from "@/lib/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function BlogDetail({ params }) {
  const { id } = await params; // 👈 Next.js 15 fix
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 mb-14">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw" // 👈 Next.js performance fix
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* TITLE & META */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {blog.title}
          </h1>

          <p className="text-sm text-neutral-400">
            Published on{" "}
            <span className="text-neutral-300">{blog.date}</span>
          </p>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* CONTENT */}
        <article className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-12 leading-relaxed">
          {blog.content.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {section.heading}
              </h2>

              {section.type === "text" && (
                <p className="text-neutral-300">
                  {section.text}
                </p>
              )}

              {section.type === "points" && (
                <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                  {section.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              {section.type === "plans" && (
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {section.plans.map((plan, i) => (
                    <div
                      key={i}
                      className="border border-white/10 rounded-xl p-6 bg-black/40"
                    >
                      <h3 className="text-lg font-medium mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-indigo-400 font-semibold mb-4">
                        {plan.price}
                      </p>
                      <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-1">
                        {plan.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Need a similar solution?
          </h3>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            We help schools, startups, and businesses build reliable,
            scalable, and professional digital products.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-medium"
          >
            Contact Buniyad Techz
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Buniyad Techz. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
