import React from "react";
import Navbar from "./Navbar";
import FeaturedProjects from "./FeaturedProjects";
import ProjectsGallery from "./ProjectsGallery";
import AboutSection from "./AboutSection";
import { getFeaturedProjects } from "../lib/projectsData";
import { motion } from "framer-motion";

const Home: React.FC = () => {
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

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Cinematic Storytelling
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Exploring narratives through the lens of visual composition, light,
            and movement.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              About Me
            </a>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.div
        id="featured"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <FeaturedProjects
          projects={getFeaturedProjects().map((project) => ({
            id: project.id,
            title: project.title,
            category: project.category,
            description: project.description,
            thumbnail: project.thumbnailUrl,
            featured: project.isFeatured,
          }))}
        />
      </motion.div>

      {/* Projects Gallery Section */}
      <motion.div
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ProjectsGallery
          title="Complete Portfolio"
          description="Explore my full collection of film and video projects across various genres and formats."
        />
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
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
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
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
