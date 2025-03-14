import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  studentName?: string;
  links?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  studentName = "Alex Filmmaker",
  links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/about" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm border-b border-gray-100" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-xl font-light tracking-tight hover:opacity-70 transition-opacity ${isScrolled ? "text-black" : "text-white drop-shadow-md"}`}
            >
              {studentName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className={`hover:opacity-70 text-sm font-light transition-opacity ${isScrolled ? "text-black" : "text-white drop-shadow-md"}`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ) : (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className={`hover:opacity-70 text-sm font-light transition-opacity ${isScrolled ? "text-black" : "text-white drop-shadow-md"}`}
                    >
                      {link.label}
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 ${isScrolled ? "text-black" : "text-white"}`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pt-2 pb-6 space-y-4 bg-white/95 backdrop-blur-sm">
              {links.map((link) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block py-2 text-sm font-light text-black hover:opacity-70"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2 text-sm font-light text-black hover:opacity-70"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
