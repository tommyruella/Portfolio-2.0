import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  featured: boolean;
}

interface FeaturedProjectsProps {
  projects?: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = [
    {
      id: "1",
      title: "Urban Solitude",
      category: "Short Film",
      description:
        "A contemplative exploration of isolation in modern cities, following a young artist navigating through crowded spaces while feeling completely alone.",
      thumbnail:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
      featured: true,
    },
    {
      id: "2",
      title: "Echoes of Time",
      category: "Documentary",
      description:
        "An intimate portrait of elderly craftspeople preserving traditional techniques in a rapidly modernizing world.",
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
      featured: true,
    },
    {
      id: "3",
      title: "Chromatic Dreams",
      category: "Experimental",
      description:
        "A visually stunning exploration of color psychology and how different hues affect human emotion and perception.",
      thumbnail:
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
      featured: true,
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium tracking-tight">
          Featured Projects
        </h2>
        <Link
          to="/featured"
          className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2 h-full relative">
              <img
                src={featuredProjects[currentIndex].thumbnail}
                alt={featuredProjects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden" />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white md:bg-transparent">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {featuredProjects[currentIndex].category}
              </p>
              <h3 className="text-xl md:text-2xl font-medium mb-3">
                {featuredProjects[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 md:line-clamp-4">
                {featuredProjects[currentIndex].description}
              </p>
              <Button variant="outline" size="sm" className="mt-4 self-start">
                View Project
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 z-10">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-sm hover:bg-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-sm hover:bg-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
