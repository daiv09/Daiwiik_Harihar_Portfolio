"use client";
import Navbar from "@/components/ui/navbar";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import Footer from "@/components/ui/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

        <p className="text-lg mb-12 text-center max-w-2xl text-gray-300">
          Always excited to connect! Whether it&apos;s for collaboration,
          questions, or just saying hi — feel free to reach out through any of
          the channels below.
        </p>

        <div className="w-full max-w-2xl space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-700 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300">
            <FaEnvelope className="text-2xl text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <a
                href="mailto:daiwiikharihar@google.com"
                className="text-lg font-medium hover:underline"
              >
                daiwiikharihar@google.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-700 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300">
            <FaPhoneAlt className="text-2xl text-green-400" />
            <div>
              <p className="text-sm text-gray-300">Phone</p>
              <a
                href="tel:+917755921891"
                className="text-lg font-medium hover:underline"
              >
                +91 77559 21891
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-gray-700 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300">
            <FaLinkedin className="text-2xl text-blue-500" />
            <div>
              <p className="text-sm text-gray-300">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/daiwiik-harihar-bb6215344/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:underline"
              >
                linkedin.com/in/daiwiik-harihar
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
