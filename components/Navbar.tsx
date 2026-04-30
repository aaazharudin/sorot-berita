"use client";

import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", active: true },
    { name: "World", active: false },
    { name: "Politics", active: false },
    { name: "Business", active: false },
    { name: "Tech", active: false },
    { name: "Science", active: false },
    { name: "Health", active: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-primary-950/95 backdrop-blur-sm border-b border-primary-200 dark:border-primary-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold tracking-tight text-primary-950 dark:text-white">
              ZONA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "text-primary-950 dark:text-white"
                    : "text-primary-600 dark:text-primary-400 hover:text-primary-950 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
              <Search className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              ) : (
                <Moon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              )}
            </button>

            <button className="hidden sm:block px-4 py-2 text-sm font-medium border border-primary-300 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
              Sign In
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <Menu className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-100 dark:border-primary-800 animate-fade-in">
            <div className="flex flex-wrap gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "text-primary-950 dark:text-white"
                      : "text-primary-600 dark:text-primary-400"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-4 sm:hidden">
              <button className="w-full px-4 py-2 text-sm font-medium border border-primary-300 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
