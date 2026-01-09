"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [menuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blog" },
    { href: "/aboutUs", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  // ⭐ BEST LOGIC → handles nested like /blogs/[id]
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (!mounted) return null;

  return (
    <>
      <nav
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] bg-neutral-900/60 backdrop-blur-md text-white
        px-4 md:px-10 py-3 rounded-full shadow-lg border border-white/10 w-[95%] md:w-[90%] max-w-6xl"
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <Image
              src="/Logo.png"
              width={32}
              height={32}
              alt="Buniyad Techz Logo"
              className="md:w-10 md:h-10 transition group-hover:scale-110"
              priority
            />
            <span className="text-[#FFD700] text-lg md:text-xl font-semibold group-hover:text-yellow-300">
              Buniyad Techz
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative transition hover:text-yellow-400 ${
                    isActive(item.href) ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full cursor-pointer hover:bg-white/10 text-yellow-400"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-neutral-900/95 rounded-2xl border border-white/10 shadow-xl"
          >
            <ul className="p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left py-3 px-4 rounded-xl transition hover:bg-white/10 hover:text-yellow-400 ${
                      isActive(item.href)
                        ? "bg-white/5 text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden cursor-pointer"
        />
      )}
    </>
  );
};

export default Navbar;
