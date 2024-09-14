import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { projects } from "../utils/projects";

export default function WorkCard() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full py-10">
      <div className="relative w-full flex justify-between items-center">
        {/* Left Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-gray-800 hover:bg-opacity-50 p-2 sm:p-3 rounded-full shadow-md transition-all duration-300 z-10"
          onClick={handlePrev}
        >
          <motion.div whileHover={{ scale: 1.2 }}>&#8592;</motion.div>
        </button>

        {/* Carousel */}
        <motion.div
          className="carousel w-full max-w-4xl overflow-hidden relative mx-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              id={`item${index + 1}`}
              className={`carousel-item w-full rounded-3xl shadow-lg relative ${currentIndex === index ? "block" : "hidden"
                }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                x: currentIndex === index ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <motion.img
                  src={project.image}
                  className="w-full rounded-3xl object-cover h-56 sm:h-64 md:h-72 lg:h-96"
                  alt={`Project ${index + 1}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="rounded-3xl absolute inset-0 flex justify-center items-center bg-gradient-to-b from-transparent to-gray-900 opacity-0 hover:opacity-90 transition-opacity duration-500"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base mb-4">
                      {project.description}
                    </p>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {t("View Repository")}
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-gray-800 hover:bg-opacity-50 p-2 sm:p-3 rounded-full shadow-md transition-all duration-300 z-10"
          onClick={handleNext}
        >
          <motion.div whileHover={{ scale: 1.2 }}>&#8594;</motion.div>
        </button>
      </div>
    </div>
  );
}
