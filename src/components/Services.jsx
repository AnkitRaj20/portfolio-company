import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, BarChart, Globe, Smartphone, Megaphone } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences that delight your customers.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights and visualizations.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies to grow your online presence.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      color: "from-blue-500 to-red-600",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Results-driven campaigns that increase visibility and conversions.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-5"
            initial={{
              x: `${Math.random() * 100 - 50}%`,
              y: `${Math.random() * 100 - 50}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`,
              ],
              y: [
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`,
              ],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            We offer a comprehensive range of digital services to help your business thrive in today's competitive
            landscape.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-blue-600"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
