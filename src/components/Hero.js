import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900" />
        
        {/* Overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Geometric pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {/* Large decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

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
            Discover the power of authentic Ayurvedic medicines crafted with centuries-old wisdom and modern scientific precision at Maha Sharman Healthcare.
          </p>
          <p className="text-base mb-8 text-gray-300 max-w-2xl">
            Proudly manufacturing medicines for <strong>Sanyasi Ayurveda</strong> and <strong>Shri Sanatani Enterprises</strong> with GMP compliance.
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