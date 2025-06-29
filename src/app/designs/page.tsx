"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react'; // Optional: Install lucide-react for nice icons

const DesignsPage = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Design Portfolio</h1>
        
    //     {/* Figma Section */}
    //     <section className="mb-16">
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Figma Prototypes</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <iframe 
    //             className="w-full h-[400px]"
    //             src="YOUR_FIGMA_EMBED_URL_1"
    //             allowFullScreen
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
    //             <p className="text-gray-600">Brief description of your Figma prototype and its purpose.</p>
    //           </div>
    //         </div>
    //         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <iframe 
    //             className="w-full h-[400px]"
    //             src="YOUR_FIGMA_EMBED_URL_2"
    //             allowFullScreen
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold mb-2">Project Name 2</h3>
    //             <p className="text-gray-600">Brief description of your Figma prototype and its purpose.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     {/* Canva Section */}
    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Canva Designs</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <iframe 
    //             className="w-full h-[400px]"
    //             src="YOUR_CANVA_EMBED_URL_1"
    //             allowFullScreen
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold mb-2">Project Name 3</h3>
    //             <p className="text-gray-600">Brief description of your Canva design and its purpose.</p>
    //           </div>
    //         </div>
    //         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <iframe 
    //             className="w-full h-[400px]"
    //             src="YOUR_CANVA_EMBED_URL_2"
    //             allowFullScreen
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold mb-2">Project Name 4</h3>
    //             <p className="text-gray-600">Brief description of your Canva design and its purpose.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: [ -15, 15, -15 ] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <Construction className="w-20 h-20 text-yellow-400" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">Oops! 🚧</h1>
        <p className="text-lg text-gray-300 mb-6">
          This page is currently under construction. I'm crafting something awesome, stay tuned!
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-slate-900 font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Go Back Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default DesignsPage; 