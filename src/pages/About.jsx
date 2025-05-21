

import Lottie from "lottie-react";
import React, { useState } from "react";
import InnovativeAnim from "../assets/lottie/anime1.json";
import FlawlessAnim from "../assets/lottie/anime2.json";
import ExclusiveAnim from "../assets/lottie/anime3.json";
import ReliableAnim from "../assets/lottie/anime4.json";
import researchLottie from "../assets/lottie/anime5.json";
import designLottie from "../assets/lottie/anime7.json";
import developLottie from "../assets/lottie/anime6.json";

const services = [
  {
    title: "Innovative Ideas",
    description:
      "Here, our specialized team uses extraordinary strategies, vast market analysis, and even some secret professional remedies producing great mobile apps.",
    animation: InnovativeAnim,
  },
  {
    title: "Flawless Graphic",
    description:
      "Our experienced and creative designers will brand your business with effective and creative graphic designs, visual arts, and page layout.",
    animation: FlawlessAnim,
  },
  {
    title: "Exclusive Solution",
    description:
      "We know how to integrate your business with the mobile app ecosystem correctly and beneficially.",
    animation: ExclusiveAnim,
  },
  {
    title: "Reliable Service",
    description:
      "We offer mobile apps of the best quality with reliable performance and effective sales service support. We are committed to our customers.",
    animation: ReliableAnim,
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("Research");

   const getLottieData = () => {
    switch (activeSection) {
      case "Research":
        return researchLottie;
      case "Design":
        return designLottie;
      case "Develop":
        return developLottie;
      default:
        return researchLottie;
    }
  };


  const sectionItems = [
    {
      title: "Research",
      desc: "Identify a winning strategy.",
      color: "#8254F8",
    },
    {
      title: "Design",
      desc: "The actual conceptualizing of the solution.",
    },
    {
      title: "Develop",
      desc: "Move towards success.",
    },
  ];

  return (
    <div className="min-h-screen  py-28 bg-slate-100 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl px-5 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-72 h-72 flex-shrink-0">
              <Lottie animationData={service.animation} loop={true} />
            </div>
            <div className="self-center">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* thought process */}
      <div className="px-6 md:px-16 py-20 bg-slate-100">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Making your thought process real, in one place
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We develop mobile apps with the latest tech stack in order for your
          business to run seamlessly.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {sectionItems.map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveSection(item.title)}
              className={`cursor-pointer rounded-md p-6 shadow-md border transition-all duration-300 ${
                activeSection === item.title
                  ? "bg-[#8254F8] text-white"
                  : "bg-white text-black hover:shadow-lg"
              }`}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Side Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Lottie animationData={getLottieData()} loop={true} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
