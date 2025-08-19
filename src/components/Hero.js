import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const backgroundImage = '/hero-bg.jpg'; // Add image path here when available

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background with overlay */}
      {!imageError ? (
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onError={() => setImageError(true)}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        // Fallback gradient background
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90">
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ancient Wisdom, Modern Wellness
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover the power of authentic Ayurvedic medicines crafted with centuries-old wisdom and modern scientific precision at Mahasharman Healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explore Products
              </motion.button>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 