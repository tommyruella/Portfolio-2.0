import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Instagram, Linkedin, Video } from "lucide-react";

const AboutPage: React.FC = () => {
  // Animation variants for staggered section appearance
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <Navbar studentName="Alex Filmmaker" />

      {/* Hero Section */}
      <motion.div
        className="w-full bg-black text-white py-40 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Filmmaker, storyteller, and visual artist based in Los Angeles
          </motion.p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="py-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <AboutSection />

        {/* Connect Section */}
        <motion.div
          className="max-w-6xl mx-auto mt-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Let's Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="mailto:contact@alexfilmmaker.com"
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-center">
                  contact@alexfilmmaker.com
                </p>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center mb-4">
                  <Instagram className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-gray-600 text-center">@alexfilmmaker</p>
              </a>

              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vimeo</h3>
                <p className="text-gray-600 text-center">Alex Filmmaker</p>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alex Filmmaker</h3>
              <p className="text-gray-400">
                Creating visual stories that resonate and inspire.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">contact@alexfilmmaker.com</p>
              <p className="text-gray-400">Los Angeles, CA</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vimeo
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Alex Filmmaker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
