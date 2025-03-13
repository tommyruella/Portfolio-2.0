import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import {
  Instagram,
  Video,
  Linkedin,
  Award,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

interface AboutSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  photoUrl?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
  skills?: string[];
  education?: {
    institution: string;
    degree: string;
    year: string;
  }[];
  awards?: {
    name: string;
    project: string;
    year: string;
  }[];
}

const AboutSection = ({
  name = "Alex Johnson",
  title = "Cinematographer & Director",
  bio = "I'm a passionate filmmaker with a focus on visual storytelling through innovative cinematography. My work explores themes of human connection and environmental consciousness. Currently completing my MFA in Film Production at NYU Tisch School of the Arts.",
  photoUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  socialLinks = [
    {
      platform: "Instagram",
      url: "#",
      icon: <Instagram className="w-5 h-5" />,
    },
    { platform: "Vimeo", url: "#", icon: <Video className="w-5 h-5" /> },
    { platform: "LinkedIn", url: "#", icon: <Linkedin className="w-5 h-5" /> },
  ],
  skills = [
    "Cinematography",
    "Directing",
    "Editing",
    "Color Grading",
    "Screenwriting",
    "Sound Design",
    "Production Management",
    "Visual Effects",
  ],
  education = [
    {
      institution: "NYU Tisch School of the Arts",
      degree: "MFA in Film Production",
      year: "2021-Present",
    },
    {
      institution: "UCLA",
      degree: "BA in Film Studies",
      year: "2017-2021",
    },
  ],
  awards = [
    {
      name: "Best Cinematography",
      project: "Urban Solitude",
      year: "2023",
    },
    {
      name: "Student Film Award",
      project: "Threshold",
      year: "2022",
    },
    {
      name: "Emerging Filmmaker Grant",
      project: "Ephemeral",
      year: "2022",
    },
  ],
}: AboutSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-32 px-4 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Photo Column */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-4 ring-white shadow-xl">
              <img
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-center mt-4">{name}</h3>
            <p className="text-gray-600 mb-8 text-center">{title}</p>

            <div className="flex space-x-6 mb-10">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2 text-sm font-medium"
                  aria-label={`${link.platform} profile`}
                >
                  <span className="bg-gray-100 p-2 rounded-full">
                    {link.icon}
                  </span>
                  {link.platform}
                </a>
              ))}
            </div>

            <motion.div className="w-full" variants={itemVariants}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-yellow-500" />
                <h4 className="text-lg font-semibold text-center">
                  Awards & Recognition
                </h4>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                {awards.map((award, index) => (
                  <div key={index} className="text-center">
                    <p className="font-semibold text-gray-900">{award.name}</p>
                    <p className="text-gray-600 text-sm">
                      {award.project} • {award.year}
                    </p>
                    {index < awards.length - 1 && (
                      <Separator className="my-3" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Bio Column */}
          <motion.div className="md:col-span-8" variants={itemVariants}>
            <Card className="p-12 shadow-md bg-white border-none rounded-xl overflow-hidden">
              <div className="relative mb-12 pb-10 border-b border-gray-100">
                <div className="absolute top-0 left-0 w-1 h-full bg-black rounded-full"></div>
                <h3 className="text-3xl font-bold mb-8 pl-6">Biography</h3>
                <p className="text-gray-700 leading-relaxed text-xl pl-6">
                  {bio}
                </p>
              </div>

              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  <h4 className="text-2xl font-bold">Skills & Expertise</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-5 h-5 text-green-500" />
                  <h4 className="text-2xl font-bold">Education</h4>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-5 rounded-lg border-l-4 border-black"
                    >
                      <p className="font-semibold text-lg">{edu.institution}</p>
                      <p className="text-gray-600">
                        {edu.degree} • {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quote Section */}
            <motion.div
              className="mt-10 bg-black text-white p-10 rounded-xl shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="text-2xl italic font-light">
                "Cinema is a matter of what's in the frame and what's out."
              </blockquote>
              <p className="text-right mt-4 text-gray-400">— Martin Scorsese</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
