import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { Search, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
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
  const [showFilters, setShowFilters] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12 font-light">
            {description}
          </p>

          {/* Search and filter */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 border border-gray-200 bg-white h-10 text-sm font-light"
                />
              </div>

              <button
                onClick={toggleFilters}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span className="text-sm font-light">Filters</span>
              </button>
            </div>

            {/* Category filters */}
            <motion.div
              ref={filterRef}
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: showFilters ? "auto" : 0,
                opacity: showFilters ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-wrap gap-3 py-4 border-t border-b border-gray-100">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 text-sm font-light rounded-full transition-colors ${activeCategory === category ? "bg-indigo-100 text-indigo-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
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
                    className="px-4 py-2 text-sm font-light rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-lg mb-2 font-light">
                No projects match your search.
              </p>
              <p className="text-gray-400 text-sm font-light">
                Try adjusting your criteria.
              </p>
            </div>
          ) : (
            <div>
              {/* Projects grid - larger cards with more focus on images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={handleProjectClick}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {selectedProject && (
            <ProjectDetail
              project={getProjectDetailById(selectedProject.id)}
              isOpen={isDetailOpen}
              onClose={handleCloseDetail}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
