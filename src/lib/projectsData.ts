// Define types for project data structure
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  year: number;
  thumbnailUrl: string;
  isFeatured: boolean;
  images: string[];
  videoEmbedUrl?: string;
  techniques: string[];
  collaborators?: string[];
}

// Sample project data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Urban Solitude",
    description:
      "A short film exploring the paradox of isolation within crowded urban environments. Shot entirely in black and white to emphasize the stark contrasts of city life, this project examines how individuals can feel most alone when surrounded by others. The film follows three characters whose paths briefly intersect throughout a single day in the city, highlighting moments of missed connection and silent understanding.",
    shortDescription:
      "A black and white exploration of isolation in urban spaces",
    category: "Short Film",
    year: 2023,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
      "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["16mm Film", "Natural Lighting", "Handheld Camera"],
    collaborators: ["Alex Rivera (Cinematographer)", "Sam Chen (Sound Design)"],
  },
  {
    id: "2",
    title: "Ephemeral",
    description:
      "A documentary examining the concept of impermanence through the lens of environmental art installations. This project follows three artists who create works designed to be reclaimed by nature, documenting both their creative process and the gradual dissolution of their art. Shot over the course of a year, the film captures the full lifecycle of these installations and explores themes of transience, beauty, and our relationship with the natural world.",
    shortDescription: "Documentary on environmental art installations",
    category: "Documentary",
    year: 2022,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&q=80",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=1200&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80",
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["4K Digital", "Time-lapse Photography", "Drone Footage"],
  },
  {
    id: "3",
    title: "Fragments",
    description:
      "An experimental narrative told through a series of seemingly disconnected vignettes that gradually reveal their interconnections. Using a mix of formats including found footage, animation, and traditional cinematography, this project challenges conventional storytelling structures while exploring themes of memory, perception, and the construction of personal narratives.",
    shortDescription: "Experimental narrative using mixed media formats",
    category: "Experimental",
    year: 2023,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      "https://images.unsplash.com/photo-1531907700752-62799b2a3e84?w=1200&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["Mixed Media", "Stop Motion", "Super 8 Film"],
  },
  {
    id: "4",
    title: "Resonance",
    description:
      "A music video collaboration with experimental electronic artist Neon Pulse, exploring the visualization of sound through cinematography. Using specialized equipment to capture sound waves and vibrations, this project creates a visual symphony that directly responds to the music. The result is an immersive audiovisual experience that blurs the line between what is heard and what is seen.",
    shortDescription: "Music video visualizing sound through cinematography",
    category: "Music Video",
    year: 2022,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["High-Speed Photography", "Cymatics", "Projection Mapping"],
  },
  {
    id: "5",
    title: "Threshold",
    description:
      "A psychological thriller that takes place entirely within the confines of a single apartment. As the protagonist becomes increasingly paranoid about what lies beyond their door, the boundaries between reality and delusion begin to blur. This project experiments with claustrophobic framing and subjective camera techniques to immerse viewers in the character's deteriorating mental state.",
    shortDescription: "Psychological thriller set in a single location",
    category: "Short Film",
    year: 2021,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
      "https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=1200&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: [
      "Single Location Shooting",
      "Practical Effects",
      "Subjective Camera",
    ],
    collaborators: ["Jordan Kim (Actor)", "Taylor Patel (Production Design)"],
  },
  {
    id: "6",
    title: "Chromatic",
    description:
      "An abstract visual essay exploring the emotional impact of color in cinema. Each segment of this project is dedicated to a different color, using carefully curated scenes and original footage to examine how filmmakers have used specific hues to evoke particular emotional responses. The project includes interviews with cinematographers and color theorists interspersed throughout the visual sequences.",
    shortDescription: "Visual essay on the emotional impact of color in film",
    category: "Experimental",
    year: 2021,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
      "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&q=80",
      "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["Color Grading", "Split Screen", "Interview Segments"],
  },
  {
    id: "7",
    title: "Vernacular",
    description:
      "A documentary series exploring regional filmmaking traditions around the world. Each episode focuses on a different country or region, examining how local cultural contexts, available resources, and historical circumstances have shaped distinct approaches to cinema. Through interviews with local filmmakers and analysis of representative works, this project celebrates the diversity of global film language.",
    shortDescription: "Documentary series on regional filmmaking traditions",
    category: "Documentary",
    year: 2020,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&q=80",
      "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=1200&q=80",
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: ["Interview-Based", "Archival Footage", "Location Shooting"],
    collaborators: [
      "Dr. Maria Gonzalez (Film Historian)",
      "Various Regional Filmmakers",
    ],
  },
  {
    id: "8",
    title: "Liminal",
    description:
      "An installation piece designed for gallery exhibition that explores transitional spaces through multiple synchronized projections. Filmed in airports, train stations, hotel lobbies, and other in-between locations, this project examines how these spaces function as both physical and psychological thresholds. The installation is designed to allow viewers to move through the exhibition space, creating their own unique viewing experience.",
    shortDescription:
      "Multi-channel installation exploring transitional spaces",
    category: "Installation",
    year: 2022,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&q=80",
      "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?w=1200&q=80",
      "https://images.unsplash.com/photo-1484503793037-5c9644d6a80a?w=1200&q=80",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techniques: [
      "Multi-Channel Projection",
      "Spatial Audio",
      "Interactive Elements",
    ],
    collaborators: [
      "Robin Zhao (Installation Design)",
      "Casey Williams (Sound Artist)",
    ],
  },
];

// Type definitions for component-specific project formats
export interface FeaturedProjectType {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  featured: boolean;
}

export interface ProjectCardType {
  id: string;
  title: string;
  category: string;
  year: number;
  thumbnail: string;
  description: string;
  tags: string[];
}

export interface ProjectDetailType {
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
}

// Helper functions for working with project data
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter((project) => project.isFeatured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter((project) => project.category === category);
};

export const getProjectsByYear = (year: number): Project[] => {
  return projectsData.filter((project) => project.year === year);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(projectsData.map((project) => project.category));
  return Array.from(categories);
};

export const getAllYears = (): number[] => {
  const years = new Set(projectsData.map((project) => project.year));
  return Array.from(years).sort((a, b) => b - a); // Sort descending
};

// Adapter functions to convert between different project formats
export const getProjectsForFeaturedSection = (): FeaturedProjectType[] => {
  return projectsData
    .filter((project) => project.isFeatured)
    .map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description,
      thumbnail: project.thumbnailUrl,
      featured: project.isFeatured,
    }));
};

export const getProjectsForGallery = (): ProjectCardType[] => {
  return projectsData.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    year: project.year,
    thumbnail: project.thumbnailUrl,
    description: project.shortDescription,
    tags: project.techniques || [],
  }));
};

export const getProjectDetailById = (
  id: string,
): ProjectDetailType | undefined => {
  const project = projectsData.find((p) => p.id === id);
  if (!project) return undefined;

  return {
    id: project.id,
    title: project.title,
    description: project.shortDescription,
    longDescription: project.description,
    category: project.category,
    year: project.year,
    duration: "15 minutes", // This could be added to the Project type if needed
    director: project.collaborators
      ? project.collaborators[0]
      : "Self-directed",
    thumbnailUrl: project.thumbnailUrl,
    images: project.images,
    videoUrl: project.videoEmbedUrl,
    role: "Director, Cinematographer", // This could be added to the Project type if needed
  };
};

export default projectsData;
