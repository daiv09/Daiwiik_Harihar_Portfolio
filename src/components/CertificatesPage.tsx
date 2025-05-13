'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

// You can replace these with your actual certificates
const certificatesData = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    category: "Web Development",
    image: "/certificates/web-dev.jpg", // Replace with your certificate image
    credential: "UC-12345",
    link: "https://udemy.com/certificate/..."
  },
  {
    id: 2,
    name: "React & Next.js Development",
    issuer: "Coursera",
    date: "2023",
    category: "Web Development",
    image: "/certificates/react.jpg",
    credential: "CRED-67890",
    link: "https://coursera.org/verify/..."
  },
  {
    id: 3,
    name: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    category: "Design",
    image: "/certificates/uiux.jpg",
    credential: "GGL-24680",
    link: "https://google.com/certificates/..."
  },
  {
    id: 4,
    name: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    category: "Design",
    image: "/certificates/uiux.jpg",
    credential: "GGL-24680",
    link: "https://google.com/certificates/..."
  },
  // Add more certificates here
];

const categories = ["All", "Web Development", "Design", "Programming", "Data Science"];

const CertificatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificatesData.filter(cert => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-slate-900 min-h-screen" id="certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements in various technical domains.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search certificates..."
              className="w-full md:w-64 px-4 py-2 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-slate-700">
                {/* Replace with your actual certificate image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-400">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm text-gray-400">
                    {certificate.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {certificate.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Credential ID: {certificate.credential}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-300">
                    {certificate.category}
                  </span>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Verify →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No certificates found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesPage; 