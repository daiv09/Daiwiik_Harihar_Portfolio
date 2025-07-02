'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificatesData = [
  {
    id: 1,
    name: "Data Structures & Algorithms Using C++",
    issuer: "EdX",
    date: "September 7, 2024",
    image: "/DSA.jpg",
    credential: "4ca80149ef624317a5bfc82af5e69aee",
    link: "https://courses.edx.org/certificates/4ca80149ef624317a5bfc82af5e69aee"
  },
  {
    id: 2,
    name: "Full Stack Development Course",
    issuer: "mycaptain",
    date: "September 2023",
    image: "/FullStackDevelopment.jpg",
    credential: "2EM044UI5S7VS"
  },
  {
    id: 3,
    name: "Coding Interview Preparation",
    issuer: "Coursera",
    date: "November 19, 2024",
    image: "/CodingInterviewPrep.jpg",
    link: "https://coursera.org/verify/EIAKJLNKM21T"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const CertificatesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificatesData.filter(cert =>
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-slate-900 min-h-screen" id="certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements in various technical domains.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search certificates..."
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
            >
              <div className="relative h-48 bg-slate-700">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-400">{certificate.issuer}</span>
                  <span className="text-sm text-gray-400">{certificate.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{certificate.name}</h3>
                {certificate.credential && (
                  <p className="text-gray-400 text-sm mb-4">Credential ID: {certificate.credential}</p>
                )}
                {certificate.link && (
                  <div className="text-right">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Verify →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No certificates found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesPage;
