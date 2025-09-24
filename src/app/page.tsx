"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FadeContent from "@/components/ui/fade-content";
import { Boxes } from "../components/ui/background-boxes";
import Navbar from "@/components/Navbar";
import TrueFocus from "@/components/ui/true-focus";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  // Animation hooks for different sections
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: projectsRef, isInView: projectsInView } = useScrollAnimation();
  const { ref: publicationsRef, isInView: publicationsInView } = useScrollAnimation();
  const { ref: contactRef, isInView: contactInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <motion.div
          className="relative z-20 text-center space-y-8 max-w-4xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <TrueFocus
              sentence="Daiwiik Harihar"
              manualMode={false}
              blurAmount={5}
              borderColor="blue"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </motion.h1>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <motion.p 
              className="text-xl md:text-2xl text-neutral-300 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              A passionate B. Tech Student at Dr. Vishwanath Karad MIT WPU, Pune
            </motion.p>
          </FadeContent>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Section with Enhanced Animation */}
      <motion.section 
        className="py-12 bg-gradient-to-r from-white via-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='m0 40 40-40h20v20L20 60 0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <ScrollVelocity
          texts={['Projects', 'Hackathons']} 
          velocity={100} 
          className="custom-scroll-text"
        />
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800 relative overflow-hidden" ref={aboutRef}>
        {/* Subtle animated background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `linear-gradient(45deg, 
              rgba(59, 130, 246, 0.1) 25%, 
              transparent 25%, 
              transparent 75%, 
              rgba(139, 92, 246, 0.1) 75%, 
              rgba(139, 92, 246, 0.1)), 
              linear-gradient(-45deg, 
              rgba(59, 130, 246, 0.1) 25%, 
              transparent 25%, 
              transparent 75%, 
              rgba(139, 92, 246, 0.1) 75%, 
              rgba(139, 92, 246, 0.1))`,
            backgroundSize: "60px 60px"
          }}
        />
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                I&apos;m a dedicated student passionate about technology and
                innovation. Currently pursuing my B.Tech degree, I&apos;m focused on
                building a strong foundation in software development and
                engineering principles.
              </motion.p>
              
              {/* Info Cards with Stagger Animation */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Computer Science Engineering
                  </h3>
                  <p className="text-gray-300">TY Student</p>
                </motion.div>
                <motion.div 
                  className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300">Pune, India</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Skills Section with Enhanced Animations */}
            <motion.div 
              className="relative h-80 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: 60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-lg"
                animate={{ 
                  background: [
                    "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)",
                    "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)",
                    "linear-gradient(135deg, #EC4899, #3B82F6, #8B5CF6)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  >
                    My Skills
                  </motion.h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Full Stack Development", "Next JS", "JavaScript", "React", "React Native"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden" ref={projectsRef}>
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  VUI for Automation in Workplaces
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Developed a voice-controlled interface using WebSpeech API for
                  hands-free automation in corporate environments.
                </p>
                <motion.a
                  href="https://github.com/daiv09/V1.0.0"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-r from-green-500 to-blue-500 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  Typing Tutor
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  A C++ based Typing Tutor that helps users improve their typing
                  speed and accuracy through real-time feedback and progress
                  tracking.
                </p>
                <motion.a
                  href="https://github.com/daiv09/Typing-Tutor"
                  className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  SkyAlign – IoT-Based Autonomous Satellite Ground Tracking Ground Station
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  A smart IoT module for rescue missions that uses GPS to
                  transmit precise coordinates and controls dual motors for 360°
                  antenna alignment.
                </p>
                <motion.a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>

            {/* Project Card 4 - New Hospitality Hiring App */}
            <motion.div
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  Hospitality Hiring Platform
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  A comprehensive hiring platform designed specifically for the hospitality industry, streamlining recruitment processes for hotels, restaurants, and service providers.
                </p>
                <motion.a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-slate-800" ref={publicationsRef}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={publicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Publications
          </motion.h2>

          {/* Paper Card */}
          <motion.div
            className="relative bg-slate-900 border-l-4 border-blue-500 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -60 }}
            animate={publicationsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)" }}
          >
            {/* Floating Label */}
            <motion.span 
              className="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={publicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Published
            </motion.span>

            <motion.h3 
              className="text-2xl font-semibold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={publicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Voice-Based User Interface for Hands-Free Data Entry and Automation at Workplaces
            </motion.h3>

            <motion.p 
              className="text-gray-400 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={publicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Published in <span className="font-semibold text-gray-200">MethodsX</span>.
              Research on improving workplace efficiency using a voice-enabled automation interface.
            </motion.p>

            <motion.a
              href="https://www.sciencedirect.com/science/article/pii/S2215016125004406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={publicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              📖 Read Publication
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900" ref={contactRef}>
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </motion.p>
          
          {/* CTA Button with Pulsing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="/pages/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Send Me a Message
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <motion.a
              href="https://github.com/daiv09"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daiwiik-harihar/"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Add Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
