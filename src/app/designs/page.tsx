"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const DesignsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Spline full-screen background */}
      <div className="h-screen w-full">
        <Spline scene="https://prod.spline.design/FjYtX3F0K5SZvfz2/scene.splinecode" />
      </div>

      {/* Overlaid Text Box, slightly below center */}
      <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl px-8 py-6 max-w-xl text-center"
        >
          <h1 className="text-4xl font-bold text-black mb-2">Oops! 🚧</h1>
          <p className="text-lg text-gray-700 mb-6">
            This page is currently under construction. I&apos;m crafting something awesome, stay tuned!
          </p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Go Back Home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignsPage;
