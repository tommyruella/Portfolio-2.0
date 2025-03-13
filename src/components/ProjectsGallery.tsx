import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectDetail from "./ProjectDetail";
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

interface ProjectsGalleryProps {
  projects?: Project[];
  title?: string;
  description?: string;
}

const ProjectsGallery = ({
  projects = [
    {
      id: "1",
      title: "The Silent Echo",
      category: "Short Film",
      year: 2023,
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      description: "A short film exploring themes of isolation and connection",
      tags: ["Drama", "Experimental"],
    },
    {
      id: "2",
      title: "Urban Rhythms",
      category: "Documentary",
      year: 2022,
      thumbnail:
        "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=800&q=80",
      description:
        "A documentary capturing the pulse of city life through visual storytelling",
      tags: ["Urban", "Social"],
    },
    {
      id: "3",
      title: "Fragments of Memory",
      category: "Experimental",
      year: 2023,
      thumbnail:
        "https://images.unsplash.com/photo-1500210600161-5db1a5c0e3d0?w=800&q=80",
      description:
        "An experimental piece exploring the nature of memory and perception",
      tags: ["Abstract", "Psychological"],
    },
    {
      id: "4",
      title: "The Last Summer",
      category: "Short Film",
      year: 2021,
      thumbnail:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
      description: "A coming-of-age story about friendship and change",
      tags: ["Drama", "Youth"],
    },
    {
      id: "5",
      title: "Neon Dreams",
      category: "Animation",
      year: 2022,
      thumbnail:
        "https://images.unsplash.com/photo-1569878766010-17bff0a1987d?w=800&q=80",
      description: "An animated short exploring a futuristic cityscape",
      tags: ["Sci-Fi", "Digital"],
    },
    {
      id: "6",
      title: "Wilderness",
      category: "Documentary",
      year: 2021,
      thumbnail:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      description:
        "A nature documentary following wildlife in untouched landscapes",
      tags: ["Nature", "Environmental"],
    },
  ],
  title = "Projects Gallery",
  description = "Explore my complete portfolio of film and video projects",
}: ProjectsGalleryProps) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Extract unique categories and years for filters
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const years = ["All", ...new Set(projects.map((p) => p.year.toString()))];

  const handleFilterChange = (filters: {
    category: string;
    year: string;
    search: string;
  }) => {
    let filtered = [...projects];

    // Filter by category
    if (filters.category !== "All") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Filter by year
    if (filters.year !== "All") {
      filtered = filtered.filter((p) => p.year.toString() === filters.year);
    }

    // Filter by search query
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
      );
    }

    setFilteredProjects(filtered);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  // Animation variants for staggered grid appearance
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <ProjectFilters
          onFilterChange={handleFilterChange}
          categories={categories}
          years={years}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects match your filters.
            </p>
            <p className="text-gray-400">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
            project={{
              id: selectedProject.id,
              title: selectedProject.title,
              description: selectedProject.description,
              longDescription: `${selectedProject.description} This is an extended description of the project that provides more context and details about the creative process, challenges, and outcomes.`,
              category: selectedProject.category,
              year: selectedProject.year,
              duration: "15 minutes",
              director: "Self-directed",
              thumbnailUrl: selectedProject.thumbnail,
              images: [
                selectedProject.thumbnail,
                "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=800&q=80",
                "https://images.unsplash.com/photo-1500210600161-5db1a5c0e3d0?w=800&q=80",
              ],
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              role: "Director, Cinematographer",
            }}
            isOpen={isDetailOpen}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsGallery;
