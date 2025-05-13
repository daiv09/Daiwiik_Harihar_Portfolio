"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const projects = [
  {
    title: "Typing Master",
    description:
      "A speed typing tutor built using C++ with real-time feedback.",
    image: "/typing-master.png",
    link: "#",
  },
  {
    title: "Smart Rescue GPS",
    description:
      "Offline GPS module for rescue ops with motor-controlled antenna.",
    image: "/rescue-gps.png",
    link: "#",
  },
  {
    title: "Voice Data Entry",
    description:
      "Voice-based UI for hands-free workplace automation using WebSpeech API.",
    image: "/voice-ui.png",
    link: "#",
  },
  {
    title: "3D Portfolio",
    description: "Interactive portfolio with Spline 3D scenes and animated UI.",
    image: "/3d-portfolio.png",
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          🚀 My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
