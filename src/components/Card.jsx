import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ title, items }) {
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="sm:text-center pb-8">
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animated state
            transition={{ duration: 0.5 }} // Duration of the transition
            whileHover={{ scale: 1.05 }}
          >
            <div className="overflow-hidden rounded-md w-full flex items-center justify-center">
              <motion.img
                src={item.imageSrc}
                alt={item.name}
                className="h-16 w-16 object-contain sm:h-24 sm:w-24 lg:h-32 lg:w-32"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm">
                <a href={item.href} className="text-blue-600 hover:underline">
                  {item.name}
                </a>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
