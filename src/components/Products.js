import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Ayush Kwath',
    description: 'Immunity boosting herbal tea blend with traditional herbs',
    benefits: ['Boosts Immunity', 'Respiratory Health', 'Natural Detox'],
    image: '/products/img1.jpeg' // Add image path here when available
  },
  {
    name: 'Ashwagandha Tablets',
    description: 'Pure herb tablets for stress relief and vitality',
    benefits: ['Stress Relief', 'Better Sleep', 'Enhanced Vitality'],
    image: '/products/img2.jpeg' // Add image path here when available
  },
  {
    name: 'Triphala Churna',
    description: 'Traditional digestive and detoxification powder',
    benefits: ['Digestive Health', 'Detoxification', 'Antioxidant'],
    image: '/products/img3.jpeg' // Add image path here when available
  },
  {
    name: 'Joint Care Formula',
    description: 'Herbal blend for joint health and flexibility',
    benefits: ['Joint Support', 'Anti-inflammatory', 'Pain Relief'],
    image: '/products/img4.jpeg' // Add image path here when available
  },
  {
    name: 'Liver Care Syrup',
    description: 'Natural syrup for liver health and detoxification',
    benefits: ['Liver Health', 'Detoxification', 'Digestive Aid'],
    image: '/products/img5.png' // Add image path here when available
  },
  {
    name: 'Diabetes Care',
    description: 'Ayurvedic formula for blood sugar management',
    benefits: ['Blood Sugar Control', 'Metabolic Health', 'Natural Support'],
    image: '/products/img6.jpeg' // Add image path here when available
  },
  {
    name: 'Diabetes Care',
    description: 'Ayurvedic formula for blood sugar management',
    benefits: ['Blood Sugar Control', 'Metabolic Health', 'Natural Support'],
    image: '/products/img7.jpeg' // Add image path here when available
  },
  {
    name: 'Diabetes Care',
    description: 'Ayurvedic formula for blood sugar management',
    benefits: ['Blood Sugar Control', 'Metabolic Health', 'Natural Support'],
    image: '/products/img8.jpeg' // Add image path here when available
  },
  {
    name: 'Diabetes Care',
    description: 'Ayurvedic formula for blood sugar management',
    benefits: ['Blood Sugar Control', 'Metabolic Health', 'Natural Support'],
    image: '/products/img9.jpeg' // Add image path here when available
  },
];

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        {product.image ? (
          // Image section - will be used when images are available
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-accent', 'to-secondary', 'flex', 'items-center', 'justify-center');
              e.target.parentElement.innerHTML = `<span class="text-white text-xl font-serif">${product.name}</span>`;
            }}
          />
        ) : (
          // Placeholder section - used when no image is available
          <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <span className="text-white text-xl font-serif">{product.name}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="space-y-2">
          {product.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center text-sm text-gray-500"
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2" />
              {benefit}
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full btn-primary"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="products" className="section-padding bg-natural">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Ayurvedic Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic Ayurvedic medicines, crafted with precision and care to promote holistic wellness and natural healing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 