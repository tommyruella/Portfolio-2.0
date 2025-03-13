import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AspectRatio } from "./ui/aspect-ratio";
import { X, Calendar, Tag, Clock, User } from "lucide-react";

interface ProjectDetailProps {
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    category: string;
    year: number;
    duration?: string;
    director?: string;
    thumbnailUrl: string;
    images: string[];
    videoUrl?: string;
    role?: string;
  };
  isOpen?: boolean;
  onClose?: () => void;
}

const ProjectDetail = ({
  project = {
    id: "1",
    title: "The Silent Echo",
    description: "A short film exploring themes of isolation and connection",
    longDescription:
      "This experimental short film follows a young woman navigating an increasingly disconnected world. Through visual metaphors and minimal dialogue, the film examines how technology both connects and isolates us from meaningful human interaction.",
    category: "Short Film",
    year: 2023,
    duration: "15 minutes",
    director: "Self-directed",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
      "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500210600161-5db1a5c0e3d0?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    role: "Director, Editor",
  },
  isOpen = true,
  onClose = () => {},
}: ProjectDetailProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl bg-white p-0 overflow-hidden rounded-none border-none">
        <DialogClose className="absolute right-6 top-6 z-50 bg-black/70 text-white rounded-full p-2 hover:bg-black transition-colors">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left side - Visual content */}
          <div className="bg-black h-full">
            <Tabs defaultValue="gallery" className="h-full">
              <TabsList className="w-full grid grid-cols-2 rounded-none bg-black/20 backdrop-blur-sm">
                <TabsTrigger
                  value="gallery"
                  className="text-white data-[state=active]:bg-white/10 rounded-none"
                >
                  Gallery
                </TabsTrigger>
                <TabsTrigger
                  value="video"
                  className="text-white data-[state=active]:bg-white/10 rounded-none"
                >
                  Video
                </TabsTrigger>
              </TabsList>

              <TabsContent value="gallery" className="h-[calc(100%-40px)] mt-0">
                <div className="h-full overflow-auto">
                  {project.images.map((image, index) => (
                    <div key={index} className="mb-2 last:mb-0">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="video" className="h-[calc(100%-40px)] mt-0">
                {project.videoUrl ? (
                  <AspectRatio ratio={16 / 9} className="h-full">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </AspectRatio>
                ) : (
                  <div className="flex items-center justify-center h-full bg-black/90 text-white">
                    <p>No video available</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right side - Project info */}
          <div className="p-8 overflow-y-auto max-h-[80vh]">
            <DialogHeader className="text-left mb-8">
              <DialogTitle className="text-3xl font-bold tracking-tight">
                {project.title}
              </DialogTitle>
              <p className="text-lg text-gray-600 mt-2">
                {project.description}
              </p>
            </DialogHeader>

            <div className="space-y-8">
              {/* Project metadata */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{project.year}</span>
                </div>

                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                  <Tag className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{project.category}</span>
                </div>

                {project.duration && (
                  <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                )}

                {project.director && (
                  <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{project.director}</span>
                  </div>
                )}
              </div>

              {/* Project description */}
              {project.longDescription && (
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    About this project
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div>
                  <h3 className="text-lg font-medium mb-3">My Role</h3>
                  <p className="text-gray-700">{project.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
