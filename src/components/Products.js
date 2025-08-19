import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Updated products array - should show 8 unique products
const products = [
  {
    name: 'Ayush Kwath',
    description: 'Immunity boosting herbal tea blend with traditional herbs',
    benefits: ['Boosts Immunity', 'Respiratory Health', 'Natural Detox'],
    image: '/products/img1.jpeg'
  },
  {
    name: 'Ashwagandha Tablets',
    description: 'Pure herb tablets for stress relief and vitality',
    benefits: ['Stress Relief', 'Better Sleep', 'Enhanced Vitality'],
    image: '/products/img2.jpeg'
  },
  {
    name: 'Triphala Churna',
    description: 'Traditional digestive and detoxification powder',
    benefits: ['Digestive Health', 'Detoxification', 'Antioxidant'],
    image: '/products/img3.jpeg'
  },
  {
    name: 'Joint Care Formula',
    description: 'Herbal blend for joint health and flexibility',
    benefits: ['Joint Support', 'Anti-inflammatory', 'Pain Relief'],
    image: '/products/img4.jpeg'
  },
  {
    name: 'Liver Care Syrup',
    description: 'Natural syrup for liver health and detoxification',
    benefits: ['Liver Health', 'Detoxification', 'Digestive Aid'],
    image: '/products/img5.png'
  },
  {
    name: 'Diabetes Care',
    description: 'Ayurvedic formula for blood sugar management',
    benefits: ['Blood Sugar Control', 'Metabolic Health', 'Natural Support'],
    image: '/products/img6.jpeg'
  },
  {
    name: 'Heart Care Formula',
    description: 'Natural formula for cardiovascular health',
    benefits: ['Heart Health', 'Circulation', 'Blood Pressure Support'],
    image: '/products/img7.jpeg'
  },
  {
    name: 'Respiratory Care',
    description: 'Herbal blend for respiratory wellness',
    benefits: ['Lung Health', 'Breathing Support', 'Immunity'],
    image: '/products/img8.jpeg'
  },
  {
    name: 'Respiratory Care',
    description: 'Herbal blend for respiratory wellness',
    benefits: ['Lung Health', 'Breathing Support', 'Immunity'],
    image: '/products/img8.jpeg'
  },
  {
    name: 'Respiratory Care',
    description: 'Herbal blend for respiratory wellness',
    benefits: ['Lung Health', 'Breathing Support', 'Immunity'],
    image: '/products/img8.jpeg'
  },
];

const ProductCard = ({ product, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative flex items-center justify-center p-4">
        {!imageError ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className={`max-w-full max-h-full object-contain transform hover:scale-110 transition-all duration-300 filter drop-shadow-lg ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                maxWidth: '85%',
                maxHeight: '85%',
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(false);
              }}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <div className="animate-pulse">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          // Fallback when image fails to load
          <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <div className="text-center text-white p-4">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-serif font-medium">{product.name}</span>
            </div>
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
  const [visibleProducts, setVisibleProducts] = useState(9);
  const PRODUCTS_PER_PAGE = 9;
  
  // Determine which products to show
  const productsToShow = products.slice(0, visibleProducts);
  const hasMoreProducts = products.length > visibleProducts;

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + PRODUCTS_PER_PAGE);
  };

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
          {productsToShow.map((product, index) => (
            <ProductCard key={`${product.name}-${index}`} product={product} index={index} />
          ))}
        </div>

        {/* Load More Button - only show if there are more products to load */}
        {hasMoreProducts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load More Products
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block ml-2"
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {/* Products count indicator */}
        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">
            Showing {productsToShow.length} of {products.length} products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products; 