import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProjectsGallery from "./ProjectsGallery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../lib/projectsData";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProjects = projectsData.filter((project) => project.isFeatured);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar studentName="Alex Filmmaker" />

      {/* Hero Section with Slideshow */}
      <motion.section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Cinematic Storytelling
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Exploring narratives through the lens of visual composition, light,
            and movement.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
            >
              View Projects
            </a>
            <Link
              to="/about"
              className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              About Me
            </Link>
          </div>

          {/* Slideshow Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Gallery Section */}
      <motion.div
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ProjectsGallery
          title="Portfolio"
          description="Curated selection of cinematic works"
        />
      </motion.div>

      {/* About Section Link */}
      <motion.div
        className="py-24 text-center bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">The Story Behind the Lens</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Discover my creative journey, influences, and vision for visual
            storytelling.
          </p>
          <Link
            to="/about"
            className="px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2 text-lg"
          >
            About Me
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alex Filmmaker</h3>
              <p className="text-gray-400">
                Creating visual stories that resonate and inspire.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">email@example.com</p>
              <p className="text-gray-400">Los Angeles, CA</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Vimeo
                </a>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Alex Filmmaker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
