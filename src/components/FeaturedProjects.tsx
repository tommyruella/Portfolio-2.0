import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FeaturedProjectType,
  getProjectsForFeaturedSection,
} from "../lib/projectsData";

interface FeaturedProjectsProps {
  projects?: FeaturedProjectType[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = getProjectsForFeaturedSection(),
}) => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-white">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-light tracking-tight">Featured Work</h2>
        <Link
          to="/featured"
          className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors font-light"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-[4/3] w-full overflow-hidden mb-4">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-light mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 font-light">
              {project.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
