import React from "react";
import { Avatar } from "./ui/avatar";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

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
}

const AboutSection = ({
  name = "Alex Johnson",
  title = "Cinematographer & Director",
  bio = "I'm a passionate filmmaker with a focus on visual storytelling through innovative cinematography. My work explores themes of human connection and environmental consciousness. Currently completing my MFA in Film Production at NYU Tisch School of the Arts.",
  photoUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  socialLinks = [
    { platform: "Instagram", url: "#", icon: null },
    { platform: "Vimeo", url: "#", icon: null },
    { platform: "LinkedIn", url: "#", icon: null },
  ],
  skills = [
    "Cinematography",
    "Directing",
    "Editing",
    "Color Grading",
    "Screenwriting",
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
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Photo Column */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
              <img
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-center">{name}</h3>
            <p className="text-gray-600 mb-4 text-center">{title}</p>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`${link.platform} profile`}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Bio Column */}
          <div className="md:col-span-2">
            <Card className="p-6 shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Biography</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>

              <Separator className="my-6" />

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Education</h4>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">
                        {edu.degree} • {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
