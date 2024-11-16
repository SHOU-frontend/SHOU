"use client";

import { ArrowRight, Menu, X } from "lucide-react"; // Import Menu and Close icons
import logo from "@/app/assets/logo.jpg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the sliding menu

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Check if user scrolled down 50px
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close menu if clicked outside
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); // Add listener for clicks outside the menu

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener
    };
  }, []);

  return (
    <header
      className={`sticky top-0 transition-all z-50 ${
        scrolled
          ? "bg-neutral-900 bg-opacity-80 backdrop-blur-lg"
          : "bg-neutral-900 bg-opacity-50 backdrop-blur-md"
      } rounded-lg shadow-lg`}
    >
      {/* Top Bar */}
      <div className="flex justify-center items-center py-3 text-white gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Navigation */}
      <div className="py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="rounded overflow-hidden w-10 h-10">
              <Image
                src={logo}
                alt="shou logo"
                height={40}
                width={40}
                className="rounded"
              />
            </div>

            {/* Menu Icon for smaller screens */}
            <div
              className="h-6 w-6 md:hidden text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
            >
              {menuOpen ? <X /> : <Menu />} {/* Show Menu or Close icon */}
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
              <button
                onClick={() => scrollToSection("top")}
                className="hover:text-white"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-white"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("Product")}
                className="hover:text-white"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("Services")}
                className="hover:text-white"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("Testimonials")}
                className="hover:text-white"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("Contact")}
                className="hover:text-white"
              >
                Contact Us
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
                onClick={() =>
                  window.open(
                    "https://p69cyz35nj5.typeform.com/to/Y3NpSTBy",
                    "_blank"
                  )
                }
              >
                Get in touch
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Sliding Menu Sheet for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef} // Attach ref to the sliding menu
          className="fixed top-0 right-0 h-full w-3/4 bg-neutral-900 text-white transform transition-transform duration-300 translate-x-0 z-50 shadow-xl"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-3 px-6 py-5 min-h-screen bg-neutral-900">
            <button
              onClick={() => scrollToSection("top")}
              className="hover:text-gray-300 text-lg"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-gray-300 text-lg"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("Product")}
              className="hover:text-gray-300 text-lg"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("Services")}
              className="hover:text-gray-300 text-lg"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("Testimonials")}
              className="hover:text-gray-300 text-lg"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("Contact")}
              className="hover:text-gray-300 text-lg"
            >
              Contact Us
            </button>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg font-medium tracking-tight mt-4"
              onClick={() =>
                window.open(
                  "https://p69cyz35nj5.typeform.com/to/Y3NpSTBy",
                  "_blank"
                )
              }
            >
              Get in touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
