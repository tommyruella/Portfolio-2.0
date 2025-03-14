import React from "react";
import { ProjectCardType } from "../lib/projectsData";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectCardType;
  onClick?: (project: ProjectCardType) => void;
}

const ProjectCard = ({
  project = {
    id: "1",
    title: "Untitled Project",
    category: "Short Film",
    year: 2023,
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
    description: "A sample project description showcasing cinematography work.",
    tags: ["Drama", "Student Film"],
  },
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      className="w-full cursor-pointer group h-full bg-white overflow-hidden"
      onClick={() => onClick(project)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.thumbnail.replace("w=800&q=80", "w=1200&q=90")}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Overlay with minimal info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-light text-white mb-1">
              {project.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300 font-light">
                {project.category}
              </p>
              <span className="text-xs text-gray-300 font-light">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal info outside the image */}
      <div className="pt-4 pb-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-light text-black">{project.title}</h3>
          <span className="text-xs text-gray-500 font-light">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-gray-500 font-light">{project.category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
