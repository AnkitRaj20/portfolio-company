import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/anime9.json";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero3() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 relative overflow-hidden">
      <AuroraBackground>
        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 gap-10 md:gap-0 relative z-10">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-500 leading-tight">
              Building Digital Experiences <br className="hidden md:block" />
              That Inspire.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-indigo-400 mt-4">
              From design to deployment, we craft solutions that elevate your brand and drive results.
            </p>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full sm:w-[350px] md:w-[400px] lg:w-[500px] pt-10 sm:pt-0 h-auto"
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 left-4 flex space-x-4 text-white opacity-70 text-lg sm:text-xl">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-skype"></i>
        </div>
      </AuroraBackground>
    </div>
  );
}
