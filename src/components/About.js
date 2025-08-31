import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineHeart, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { manufacturingPartners } from '../config/partners';

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
            <p className="text-gray-600 mb-6">
              Our state-of-the-art manufacturing facility ensures that every product meets the highest quality benchmarks while staying true to traditional Ayurvedic principles.
            </p>
            <p className="text-gray-600 mb-8">
              We proudly manufacture medicines for <strong>Sanyasi Ayurveda</strong> and <strong>Shri Sanatani Enterprises</strong>, maintaining the highest standards of quality and authenticity in every formulation.
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

        {/* Manufacturing Partners Section - Single, Enhanced Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Manufacturing Partnerships
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with esteemed organizations to manufacture authentic Ayurvedic medicines, ensuring the highest quality standards and traditional authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {manufacturingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Header */}
                <div className="bg-primary p-4 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      {partner.name}
                    </h4>
                    <HiOutlineOfficeBuilding className="w-6 h-6 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`}
                      className="w-20 h-12 object-contain mx-auto mb-3"
                    />
                    <p className="text-gray-600 text-sm text-center">
                      {partner.description}
                    </p>
                  </div>


                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Interested in Our Manufacturing Services?
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                We offer high-quality Ayurvedic medicine manufacturing with traditional authenticity and modern standards.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm px-4 py-2"
              >
                Contact Us Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 