'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const UnderConstruction = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <Navbar/>
      {/* Spline scene as background */}
      <Spline scene="https://prod.spline.design/FjYtX3F0K5SZvfz2/scene.splinecode" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 mt-100 text-center">
        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100 bg-white/70 dark:bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
          🚧 This page is currently under construction. <br />
          Come back soon to see what people say about me!
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default UnderConstruction;