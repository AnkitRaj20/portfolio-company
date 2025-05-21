import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Lightbulb, TrendingUp } from "lucide-react";

export default function FeaturedAbout() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            About <span className="text-blue-600">Our Company</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            We're a team of passionate innovators dedicated to creating exceptional digital experiences that help
            businesses thrive in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Story</h3>
            <p className="text-slate-600 mb-4">
              Founded in 2015, our company began with a simple mission: to bridge the gap between complex technology and
              human needs. What started as a small team of three has now grown into a diverse group of specialists
              united by our passion for innovation.
            </p>
            <p className="text-slate-600 mb-6">
              Over the years, we've partnered with businesses across industries, from emerging startups to established
              enterprises, helping them transform their digital presence and achieve remarkable growth.
            </p>

            <motion.div
              className="flex items-center space-x-2 text-blue-600 font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Learn more about our journey</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4.16667 10H15.8333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 5L15.8333 10L10.8333 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/assets/placeholder.jpg"
              alt="Our team working together"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20"></div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              icon: <Users className="h-10 w-10 text-blue-600" />,
              title: "Team of Experts",
              description: "Our diverse team brings together expertise from various disciplines.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
              title: "Innovative Solutions",
              description: "We constantly explore new technologies to deliver cutting-edge results.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
              title: "Quality Assurance",
              description: "Every project undergoes rigorous testing to ensure flawless execution.",
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
              title: "Growth Focus",
              description: "We're committed to helping your business achieve sustainable growth.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-slate-900 text-white rounded-xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#ef4444"
                d="M42.8,-76.1C53.9,-66.2,60.5,-51.3,65.6,-37.1C70.7,-22.9,74.2,-9.6,73.2,3.5C72.2,16.5,66.7,29.3,58.5,39.7C50.3,50.1,39.4,58.1,27.1,63.5C14.8,68.9,1.1,71.6,-13.9,71.7C-28.9,71.8,-45.1,69.3,-57.5,60.9C-69.8,52.5,-78.3,38.3,-81.2,23.3C-84.1,8.4,-81.5,-7.2,-76.6,-21.8C-71.7,-36.4,-64.6,-49.9,-53.3,-59.8C-42,-69.7,-26.5,-76,-10.8,-76.9C4.9,-77.8,31.7,-86,42.8,-76.1Z"
                transform="translate(100 300)"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-6 text-slate-300">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and
              create lasting value in an ever-evolving technological landscape.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300">
              To be the leading creative technology partner that transforms ideas into impactful digital experiences,
              setting new standards of excellence and innovation in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
