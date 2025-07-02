"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Boxes } from "../components/ui/background-boxes";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div
          className="relative z-20 text-center space-y-8 max-w-4xl px-4"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Daiwiik Harihar
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light">
            A passionate B. Tech Student at Dr. Vishwanath Karad MIT WPU, Pune
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a dedicated student passionate about technology and
                innovation. Currently pursuing my B.Tech degree, I&apos;m focused on
                building a strong foundation in software development and
                engineering principles.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-700 rounded-lg" data-aos="fade-up">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Computer Science Engineering
                  </h3>
                  <p className="text-gray-300">TY Student</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg" data-aos="fade-up">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300">Pune, India</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    My Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                      Full Stack Development
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                      Next JS
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                      React
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                      React Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
              data-aos="flip-left"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  VUI for Automation in Workplaces
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a voice-controlled interface using WebSpeech API for
                  hands-free automation in corporate environments.
                </p>
                <a
                  href="https://github.com/daiv09/V1.0.0"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              data-aos="flip-left"
            >
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Typing Tutor
                </h3>
                <p className="text-gray-400 mb-4">
                  A C++ based Typing Tutor that helps users improve their typing
                  speed and accuracy through real-time feedback and progress
                  tracking.
                </p>
                <a
                  href="https://github.com/daiv09/Typing-Tutor"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              data-aos="flip-left"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  SkyAlign – IoT-Based Autonomous Satellite Ground Tracking Ground Station
                </h3>
                <p className="text-gray-400 mb-4">
                  A smart IoT module for rescue missions that uses GPS to
                  transmit precise coordinates and controls dual motors for 360°
                  antenna alignment.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <a
            href="/pages/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Send Me a Message
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/daiv09"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="www.linkedin.com/in/daiwiik-harihar"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
