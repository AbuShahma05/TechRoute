import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-32 py-16 ">
      <div>
        <p className="opacity-50 hover:opacity-100">
          Discover community-driven roadmaps,
          <br /> in-depth theory, AI-powered resume assistance, <br /> valuable
          resources, and guided career journeys—all <br /> designed to support you
          in choosing the right path and <br /> growing in your career. We're here
          to help you succeed.
        </p>
      </div>
      <div className="flex justify-center space-x-4 pt-2">

        {/* instagram info */}
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/abu______shahma/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
        >
          <FaInstagram className="w-8 h-6" />
        </motion.a>

        {/* x/twitter info */}
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://x.com/Abushahma24"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"
        >
          <FaSquareXTwitter className="w-8 h-6" />

          {/* linkedin info */}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/abu-shahma"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <FaLinkedinIn className="w-8 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
