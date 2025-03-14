import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-light hover:opacity-70 transition-opacity"
          >
            Alex Johnson
          </Link>
          <nav className="flex gap-8">
            <Link
              to="/"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Work
            </Link>
            <Link to="/about" className="text-black transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Alex Johnson
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              Vimeo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
