'use client';
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { BadgeCheck } from 'lucide-react';

const skills = {
  'Programming Languages': ['C++', 'JavaScript', 'Python', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Tailwind CSS', 'Express.js'],
  Tools: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  'Soft Skills': ['Teamwork', 'Problem Solving', 'Time Management', 'Creativity'],
};

const SkillsPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <div className="py-20 px-6">
        <h1 className="text-5xl font-bold text-center text-white mb-12 drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
          🌟 My Skill Set
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 hover:bg-gray-700/80 transition duration-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                {category}
              </h2>
              <ul className="space-y-3">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 hover:text-white transition"
                  >
                    <BadgeCheck className="w-5 h-5 text-green-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;