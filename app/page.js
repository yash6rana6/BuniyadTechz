import AboutUs from "@/components/AboutUs";
import BlogSection from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero, { LampHero } from "@/components/Hero";
import RecentProjects from "@/components/Project";
import UpcomingProjects from '@/components/UpcomingProjects'
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <section id="/">
        <LampHero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="projects">
        <UpcomingProjects/>
      </section>

      

      <section>
        <Testimonials />
      </section>

      <section id="blog">
        <BlogSection />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default page;
