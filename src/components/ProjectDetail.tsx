import React, { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import { X, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetailType, getProjectDetailById } from "../lib/projectsData";

interface ProjectDetailProps {
  project?: ProjectDetailType;
  isOpen?: boolean;
  onClose?: () => void;
}

const ProjectDetail = ({
  project = getProjectDetailById("1"),
  isOpen = true,
  onClose = () => {},
}: ProjectDetailProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"images" | "details">("images");

  const handleImageClick = (image: string, index: number) => {
    setExpandedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (!project?.images) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % project.images.length;
    } else {
      newIndex =
        (currentImageIndex - 1 + project.images.length) % project.images.length;
    }

    setCurrentImageIndex(newIndex);
    setExpandedImage(project.images[newIndex]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl bg-white p-0 overflow-hidden border-none">
        <DialogClose className="absolute right-6 top-6 z-50 text-white hover:opacity-70 transition-opacity">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="max-h-[90vh] overflow-hidden flex flex-col">
          {/* Hero image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <img
              src={project?.thumbnailUrl.replace("w=800&q=80", "w=1920&q=90")}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <motion.h2
                  className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {project?.title}
                </motion.h2>

                <motion.div
                  className="flex flex-wrap gap-6 mb-6 text-sm font-light text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div>{project?.year}</div>
                  <div>{project?.category}</div>
                  {project?.duration && <div>{project?.duration}</div>}
                  {project?.director && <div>{project?.director}</div>}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex px-8 md:px-12">
              <button
                className={`py-4 px-6 text-sm font-light transition-colors ${activeTab === "images" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}
                onClick={() => setActiveTab("images")}
              >
                Images
              </button>
              <button
                className={`py-4 px-6 text-sm font-light transition-colors ${activeTab === "details" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}
                onClick={() => setActiveTab("details")}
              >
                Project Details
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12">
            <AnimatePresence mode="wait">
              {activeTab === "images" ? (
                <motion.div
                  key="images"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image gallery - larger, more immersive */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project?.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="overflow-hidden cursor-pointer aspect-[16/9]"
                        onClick={() => handleImageClick(image, index)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image.replace("w=1200&q=80", "w=1200&q=90")}
                          alt={`${project?.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project description */}
                  {project?.longDescription && (
                    <div className="max-w-3xl mx-auto">
                      <h3 className="text-xl font-light mb-6">
                        About this project
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed mb-12 text-lg">
                        {project.longDescription}
                      </p>

                      {project?.role && (
                        <div className="mb-12">
                          <h3 className="text-xl font-light mb-6">My Role</h3>
                          <p className="text-gray-600 font-light text-lg">
                            {project.role}
                          </p>
                        </div>
                      )}

                      {project?.videoUrl && (
                        <div className="mt-12">
                          <h3 className="text-xl font-light mb-6">
                            Project Video
                          </h3>
                          <div className="aspect-video w-full overflow-hidden rounded-md">
                            <iframe
                              src={project.videoUrl}
                              title={project.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-12 flex justify-center">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                          <span>View Full Project</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>

      {/* Expanded image view - immersive */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={handleCloseExpandedImage}
        >
          <motion.button
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-[110]"
            onClick={handleCloseExpandedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <X className="h-6 w-6" />
          </motion.button>

          <motion.button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowRight className="h-6 w-6" />
          </motion.button>

          <motion.img
            src={expandedImage.replace("w=1200&q=80", "w=1920&q=90")}
            alt={`${project?.title} - Expanded view`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute bottom-6 left-0 right-0 text-center text-white text-sm font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentImageIndex + 1} / {project?.images.length}
          </motion.div>
        </div>
      )}
    </Dialog>
  );
};

export default ProjectDetail;
