/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ProductData } from "@/lib/api";

interface HeaderProps {
  data: ProductData;
  lang: "en" | "bn";
  onLanguageChange: (lang: "en" | "bn") => void;
}

export default function Header({ data, lang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt=""
              className="w-32"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#1eaa55] transition-colors"
            >
              {lang === "en" ? "Courses" : "কোর্স"}
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#1eaa55] transition-colors"
            >
              {lang === "en" ? "Skills" : "স্কিল"}
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#1eaa55] transition-colors"
            >
              {lang === "en" ? "About" : "সম্পর্কে"}
            </a>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(lang === "en" ? "bn" : "en")}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-black"
            >
              {lang === "en" ? "বাংলা" : "English"}
            </button>

            <button className="bg-[#1eaa55] text-white px-4 py-1 rounded-md hover:bg-[#1eaa55] transition-colors">
              {lang === "en" ? "Login" : "লগ-ইন"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-[#1eaa55] py-2">
                {lang === "en" ? "Courses" : "কোর্স"}
              </a>
              <a href="#" className="text-gray-700 hover:text-[#1eaa55] py-2">
                {lang === "en" ? "Skills" : "স্কিল"}
              </a>
              <a href="#" className="text-gray-700 hover:text-[#1eaa55] py-2">
                {lang === "en" ? "About" : "সম্পর্কে"}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
