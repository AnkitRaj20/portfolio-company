import React from "react";
import {
  Youtube,
  Instagram,
  Twitter,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="w-full h-full flex items-center justify-center px-2 md:px-10 py-8"
      >
        <footer className="w-full max-w-7xl text-gray-300 flex flex-col h-full">
          {/* Animated Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-grow flex flex-col items-center justify-center text-center px-4"
          >
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Out of Business ideas?
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Get new ideas directly into your inbox on each product launch.
            </motion.p>

            {/* Email Input */}
            <motion.div
              className="flex items-center border-b border-white max-w-md w-full mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none text-white py-2 placeholder-gray-400"
              />
              <button className="text-white p-2 hover:scale-110 transition">
                <ArrowRight size={20} />
              </button>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="mt-6 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Do you have any question ?
              <div>
                <a
                  href="#"
                  className="underline text-white hover:text-purple-400 transition"
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Row at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          >
            {/* Left: Copyright */}
            <p className="mb-4 md:mb-0">
              © {currentYear} YourCompany. All rights reserved.
            </p>

            {/* Center: Social Icons */}
            <div className="flex space-x-4 text-white text-lg mb-4 md:mb-0">
              {[Youtube, Instagram, Twitter, MessageCircle].map((Icon, i) => (
                <motion.a
                  href="#"
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Right: Footer Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </footer>
      </Vortex>
    </div>
  );
}
