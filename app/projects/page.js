import RecentProjects from "@/components/Project";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What type of projects does Buniyad Techz work on?",
    a: "Buniyad Techz works on custom web development projects including startup MVPs, full-stack web applications, admin dashboards, and scalable SaaS platforms using modern technologies."
  },
  {
    q: "Are these real client projects?",
    a: "Yes. All projects showcased here are real-world applications built for startups, businesses, or internal product ideas with a focus on performance and scalability."
  },
  {
    q: "Which technologies are used in these projects?",
    a: "Most projects are built using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS to ensure fast load times and SEO-friendly architecture."
  },
  {
    q: "Can Buniyad Techz build a similar project for my business?",
    a: "Absolutely. We specialize in custom web application development and can build similar or more advanced solutions tailored to your business needs."
  },
  {
    q: "Do you provide ongoing support after project delivery?",
    a: "Yes, we offer long-term maintenance, feature upgrades, and technical support after deployment."
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 pt-24 pb-16 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-purple-400">Projects & Case Studies</span>
        </h1>

        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Explore a collection of real-world web development projects built by
          Buniyad Techz. Each project reflects our focus on clean architecture,
          scalable code, and business-driven solutions using modern frameworks
          like React and Next.js.
        </p>
      </section>

      {/* PROJECT LIST */}
      <RecentProjects />

      {/* CONTENT SECTION (SEO BOOST) */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Building Scalable & SEO-Friendly Web Applications
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-6">
          At Buniyad Techz, we believe that great projects are built on strong
          fundamentals. Our web development process focuses on performance,
          scalability, and long-term maintainability. From startup MVPs to
          full-scale production applications, every project is engineered with
          real business goals in mind.
        </p>

        <p className="text-neutral-400 leading-relaxed mb-6">
          We specialize in full-stack web development using modern technologies
          such as Next.js for server-side rendering, React for dynamic user
          interfaces, and Node.js for robust backend systems. This approach
          ensures fast load times, better SEO rankings, and an excellent user
          experience.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          Whether you're a startup validating an idea or a business looking to
          scale digitally, our projects demonstrate our ability to deliver
          reliable and future-ready solutions.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked <span className="text-purple-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
