import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
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
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=800&q=80",
      "https://images.unsplash.com/photo-1500210600161-5db1a5c0e3d0?w=800&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    role: "Director, Editor",
  },
  isOpen = true,
  onClose = () => {},
}: ProjectDetailProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-lg mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full mt-4">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="p-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium mb-2">About this project</h3>
                <p className="text-gray-700">{project.longDescription}</p>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">My Role</h3>
                  <p className="text-gray-700">{project.role}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm font-medium mr-2">Year:</span>
                    <span className="text-sm text-gray-600">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm font-medium mr-2">Category:</span>
                    <span className="text-sm text-gray-600">
                      {project.category}
                    </span>
                  </div>

                  {project.duration && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm font-medium mr-2">
                        Duration:
                      </span>
                      <span className="text-sm text-gray-600">
                        {project.duration}
                      </span>
                    </div>
                  )}

                  {project.director && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm font-medium mr-2">
                        Director:
                      </span>
                      <span className="text-sm text-gray-600">
                        {project.director}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="p-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-gray-200"
                >
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

          <TabsContent value="video" className="p-6 pt-4">
            {project.videoUrl ? (
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </AspectRatio>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <p className="text-gray-500">
                  No video available for this project
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="p-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
