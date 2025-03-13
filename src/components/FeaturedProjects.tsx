import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-medium tracking-tight">Featured Work</h2>
        <Link
          to="/featured"
          className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors font-medium"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="w-full h-full relative">
              <img
                src={featuredProjects[currentIndex].thumbnail}
                alt={featuredProjects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-medium">
                  {featuredProjects[currentIndex].title}
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeaturedProjects;
