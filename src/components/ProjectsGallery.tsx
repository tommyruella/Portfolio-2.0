import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  ProjectCardType,
  getProjectsForGallery,
  getProjectDetailById,
} from "../lib/projectsData";

interface ProjectsGalleryProps {
  projects?: ProjectCardType[];
  title?: string;
  description?: string;
}

const ProjectsGallery = ({
  projects = getProjectsForGallery(),
  title = "Projects Gallery",
  description = "Explore my complete portfolio of film and video projects",
}: ProjectsGalleryProps) => {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardType[]>(projects);
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardType | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterProjects(query, activeCategory);
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    filterProjects(searchQuery, newCategory);
  };

  const filterProjects = (query: string, category: string | null) => {
    let filtered = [...projects];

    if (query) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    setFilteredProjects(filtered);
  };

  const handleProjectClick = (project: ProjectCardType) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Minimal search and filter */}
        <div className="mb-16 flex flex-col items-center">
          <div className="relative w-full max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 border-none bg-gray-50 h-12 rounded-full"
            />
          </div>

          {/* Simple category pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
            {activeCategory && (
              <button
                onClick={() => {
                  setActiveCategory(null);
                  filterProjects(searchQuery, null);
                }}
                className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects match your search.
            </p>
            <p className="text-gray-400">Try adjusting your criteria.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onClick={handleProjectClick} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {selectedProject && (
          <ProjectDetail
            project={getProjectDetailById(selectedProject.id)}
            isOpen={isDetailOpen}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsGallery;
