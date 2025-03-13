import React from "react";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  thumbnail: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {/* Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />

        {/* Hover overlay with minimal info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-medium mb-1">{project.title}</h3>
          <p className="text-sm text-white/80">
            {project.category} · {project.year}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
