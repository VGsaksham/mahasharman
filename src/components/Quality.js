import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const qualityPoints = [
  'In-house Quality Control Lab',
  'Raw Material Authentication',
  'Standardized Production Process',
  'Modern Equipment & Technology',
  'Strict Quality Parameters'
];

const Quality = () => {
  const [imageError, setImageError] = useState(false);
  const facilityImage = '/quality/facility.jpg'; // Add image path here when available

  return (
    <section id="quality" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quality Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
          >
            {!imageError ? (
              <img
                src={facilityImage}
                alt="Manufacturing Facility"
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-2xl font-serif">Manufacturing Facility</span>
              </div>
            )}
            <div className="absolute inset-0 bg-primary/20"></div>
          </motion.div>

          {/* Quality Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Quality is Our Priority
            </h2>
            <p className="text-gray-600">
              At Mahasharman Healthcare, we maintain the highest standards of quality in every aspect of our manufacturing process. Our state-of-the-art facility combines traditional Ayurvedic principles with modern technology to ensure product excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <HiOutlineCheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality; 