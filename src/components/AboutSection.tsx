import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  photoUrl?: string;
}

const AboutSection = ({
  name = "Alex Johnson",
  title = "Cinematographer & Director",
  bio = "I'm a passionate filmmaker with a focus on visual storytelling through innovative cinematography. My work explores themes of human connection and environmental consciousness. Through my lens, I aim to capture authentic moments that resonate with audiences on a deeper level.\n\nAfter graduating from the New York Film Academy, I've worked on a variety of projects ranging from short films to documentaries and music videos. My approach combines technical precision with artistic intuition, always seeking to push boundaries and explore new visual languages.\n\nWhen I'm not behind the camera, I'm constantly exploring new locations, studying light, and finding inspiration in everyday moments. I believe that great cinematography isn't just about creating beautiful images, but about serving the story and evoking emotion.",
  photoUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
}: AboutSectionProps) => {
  // Split bio into paragraphs
  const bioParagraphs = bio.split("\n\n");

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Left column - Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[3/4] overflow-hidden"
        >
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Right column - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl font-light mb-3">{name}</h1>
          <h2 className="text-lg md:text-xl font-light text-gray-500 mb-8">
            {title}
          </h2>

          <div className="space-y-6">
            {bioParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-light leading-relaxed text-gray-800"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              <a
                href="mailto:contact@alexjohnson.com"
                className="text-gray-800 hover:text-black transition-colors"
              >
                contact@alexjohnson.com
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Based in</span>
              <span className="text-gray-800">Los Angeles, California</span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Connect</span>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
