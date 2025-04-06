import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-sm rounded-t-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400 antialiased">
      <p className="text-center sm:text-left mb-4 sm:mb-0">
        &copy; 2025{" "}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          className="hover:underline text-blue-600 dark:text-blue-400"
          target="_blank"
        >
          Daiwiik Harihar
        </a>
        . All rights reserved.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <a
          href="mailto:your-email@example.com"
          className="hover:text-gray-800 dark:hover:text-white"
          title="Email"
        >
          <FaEnvelope className="w-5 h-5" />
        </a>
        <a
          href="tel:+911234567890"
          className="hover:text-gray-800 dark:hover:text-white"
          title="Call"
        >
          <FaPhoneAlt className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-blue-400"
          title="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/daiv09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 dark:hover:text-white"
          title="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
