import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive e-commerce solution with advanced product filtering, user accounts, and secure payment processing.",
      image: "https://images.unsplash.com/photo-1579389082947-e54d8e911928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description:
        "An intuitive financial dashboard that visualizes complex data in an accessible and actionable format.",
      image: "https://plus.unsplash.com/premium_photo-1674675646732-ba4fa66122b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      category: "Mobile Development",
      description:
        "A cross-platform fitness application with workout tracking, nutrition planning, and social features.",
      image: "https://images.unsplash.com/photo-1579389082947-e54d8e911928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Corporate Rebrand",
      category: "Branding",
      description:
        "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      image: "https://plus.unsplash.com/premium_photo-1674675646732-ba4fa66122b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Multi-channel marketing campaign that increased client conversion rates by 45% over three months.",
      image: "https://images.unsplash.com/photo-1579389082947-e54d8e911928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Analytics Platform",
      category: "Data Analytics",
      description:
        "Custom analytics solution that processes millions of data points to provide actionable business insights.",
      image: "https://plus.unsplash.com/premium_photo-1674675646732-ba4fa66122b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 100 V 50 Q 50 0 100 50 V 100 Z"
            fill="url(#gradient)"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-300">
            Explore our portfolio of successful projects that showcase our expertise and creative approach.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-300">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-blue-400 font-medium flex items-center"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-slate-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-72 sm:h-96">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                    onClick={() => setActiveProject(null)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full mb-2">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{activeProject.title}</h3>
                  <p className="text-slate-300 mb-6">{activeProject.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Client</h4>
                      <p className="text-slate-300">Fortune 500 Company</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Timeline</h4>
                      <p className="text-slate-300">3 months</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Services</h4>
                      <p className="text-slate-300">{activeProject.category}, Strategy, Development</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Technologies</h4>
                      <p className="text-slate-300">React, Node.js, AWS</p>
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    View Live Project
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
