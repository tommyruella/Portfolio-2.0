import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    description: "A sample project description showcasing cinematography work.",
    tags: ["Drama", "Student Film"],
  },
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300"
        onClick={() => onClick(project)}
      >
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-1">
              {project.title}
            </h3>
            <Badge variant="outline" className="text-xs">
              {project.year}
            </Badge>
          </div>
          <p className="text-sm text-gray-500 mb-2">{project.category}</p>
          <p className="text-sm line-clamp-2 text-gray-700">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 2}
            </Badge>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
