import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import ProjectsGallery from "./ProjectsGallery";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../lib/projectsData";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "./CustomCursor";
import ParallaxImage from "./ParallaxImage";
import ScrollIndicator from "./ScrollIndicator";

const Home: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom cursor */}
      <CustomCursor color="#6366f1" />

      {/* Navigation */}
      <Navbar studentName="Alex Filmmaker" />

      {/* Hero Section - Full screen carousel */}
      <section className="h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 drop-shadow-lg max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cinematic Storytelling
          </motion.h1>

          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={scrollToProjects}
          >
            <ScrollIndicator text="Scroll to explore projects" />
          </motion.div>
        </div>

        {/* Background image with parallax effect */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={featuredProjects[0].thumbnailUrl.replace(
              "w=800&q=80",
              "w=1920&q=90",
            )}
            alt="Featured work"
            speed={0.3}
            priority={true}
            className="h-full"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
      </section>

      {/* Projects Gallery Section */}
      <div id="projects" ref={projectsRef} className="pt-24 md:pt-32">
        <ProjectsGallery
          title="Portfolio"
          description="Curated selection of cinematic works"
        />
      </div>

      {/* About Section Link - with parallax */}
      <div className="py-32 md:py-40 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-light mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Story Behind the Lens
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 max-w-md mb-12 font-light leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover my creative journey, influences, and vision for visual
              storytelling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="text-white border-b border-white pb-1 hover:text-gray-200 transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1605699263428-aaf61a2c1b7f?w=1200&q=90"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/60 z-0" />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-200 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light mb-4">Alex Filmmaker</h3>
              <p className="text-gray-500 font-light">
                Creating visual stories that resonate and inspire.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Contact</h3>
              <p className="text-gray-500 font-light mb-2">email@example.com</p>
              <p className="text-gray-500 font-light">Los Angeles, CA</p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Connect</h3>
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition-colors font-light"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition-colors font-light"
                >
                  Vimeo
                </a>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-black transition-colors font-light"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-12 text-center text-gray-400 text-sm font-light">
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
