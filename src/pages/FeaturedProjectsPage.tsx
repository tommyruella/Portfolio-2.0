import React from "react";
import { Link } from "react-router-dom";
import FeaturedProjects from "../components/FeaturedProjects";
import Navbar from "../components/Navbar";
import { getFeaturedProjects } from "../lib/projectsData";
import { motion } from "framer-motion";

const FeaturedProjectsPage: React.FC = () => {
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

      {/* Featured Projects Section */}
      <motion.div
        className="pt-32 pb-16"
        initial="hidden"
        animate="visible"
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

        <div className="flex justify-center mt-12">
          <Link
            to="/"
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alex Filmmaker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturedProjectsPage;
