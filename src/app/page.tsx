import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <motion.div 
          className="relative z-20 text-center space-y-8 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Daiwiik Harihar
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-neutral-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate B.Tech Student at Dr. Vishwanath Karad MIT WPU, Pune
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated student passionate about technology and innovation. Currently pursuing my B.Tech degree, 
                I'm focused on building a strong foundation in software development and engineering principles.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-700 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-300">B.Tech Student</p>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-300">Pune, India</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">Web Development</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">Python</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">JavaScript</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Project One</h3>
                <p className="text-gray-400 mb-4">A brief description of your first project and its key features.</p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Project Two</h3>
                <p className="text-gray-400 mb-4">A brief description of your second project and its key features.</p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Project Three</h3>
                <p className="text-gray-400 mb-4">A brief description of your third project and its key features.</p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
