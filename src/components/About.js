import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineHeart } from 'react-icons/hi';

const features = [
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing and quality control measures to ensure the highest standards of purity and efficacy.'
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8" />,
    title: 'Research & Innovation',
    description: 'We combine ancient Ayurvedic wisdom with modern scientific research to create effective and safe formulations.'
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8" />,
    title: 'Holistic Wellness',
    description: 'Our products are designed to promote overall well-being, addressing both physical and mental health naturally.'
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Wellness Through Ancient Wisdom
            </h2>
            <p className="text-gray-600 mb-6">
              At Mahasharman Healthcare, we are dedicated to preserving and advancing the time-tested principles of Ayurveda. With over two decades of experience, our expert team combines traditional knowledge with modern manufacturing practices to create authentic Ayurvedic medicines.
            </p>
            <p className="text-gray-600 mb-8">
              Our state-of-the-art manufacturing facility adheres to GMP standards, ensuring that every product meets the highest quality benchmarks while staying true to traditional Ayurvedic principles.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn About Our Process
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 