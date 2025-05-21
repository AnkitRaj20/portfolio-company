import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, Globe } from "lucide-react";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [counts, setCounts] = useState({ clients: 0, projects: 0, years: 0, countries: 0 });

  const stats = [
    { name: "Happy Clients", value: 250, icon: <Users className="h-8 w-8" />, color: "from-blue-500 to-indigo-600" },
    { name: "Projects Completed", value: 520, icon: <Award className="h-8 w-8" />, color: "from-rose-500 to-pink-600" },
    { name: "Years Experience", value: 12, icon: <Clock className="h-8 w-8" />, color: "from-amber-500 to-orange-600" },
    { name: "Countries Served", value: 30, icon: <Globe className="h-8 w-8" />, color: "from-emerald-500 to-teal-600" },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const animateStat = (stat) => {
        let startTime;
        const updateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const key = stat.name.toLowerCase().split(" ")[0];
          setCounts((prev) => ({
            ...prev,
            [key]: Math.floor(progress * stat.value),
          }));
          if (progress < 1) requestAnimationFrame(updateCount);
        };
        requestAnimationFrame(updateCount);
      };
      stats.forEach(animateStat);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-500">Impact</span> in Numbers
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-300">
            We're proud of what we've accomplished together with our clients over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const key = stat.name.toLowerCase().split(" ")[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${stat.color.split(" ")[1]}, ${stat.color.split(" ")[3]})`,
                  }}
                />
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 text-white`}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {counts[key]}
                  {stat.name === "Years Experience" && "+"}
                </h3>
                <p className="text-slate-300 font-medium">{stat.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
