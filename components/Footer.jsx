import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/Logo.png" width={50} height={50} alt="Logo" />
          <h2 className="text-xl font-bold text-[#FFD700] drop-shadow-[0_0_8px_#FFD700]">
            Buniyad Techz
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Building the future from the foundation — your one-stop tech solution hub.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>
            <li><Link href="#projects" className="hover:text-[#FFD700]">Projects</Link></li>
            <li><Link href="#about" className="hover:text-[#FFD700]">About</Link></li>
            <li><Link href="#contact" className="hover:text-[#FFD700]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: <a href="mailto:buniyadtechz@gmail.com" className="text-[#FFD700]">buniyadtechz@gmail.com</a></li>
            <li>Phone: <span className="text-[#FFD700]">+91-9193198370</span></li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Buniyad Techz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
