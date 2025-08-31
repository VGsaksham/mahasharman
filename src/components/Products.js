import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiOutlineClock, HiOutlineScale, HiOutlineShieldCheck } from 'react-icons/hi';

// Enhanced products array with detailed information
const products = [
  {
    name: 'Hair Oil',
    description: 'Natural Ayurvedic hair oil for hair growth, strength, and scalp health',
    benefits: ['Hair Growth', 'Scalp Health', 'Hair Strength'],
    image: '/products/img1.jpeg',
    detailedInfo: {
      ingredients: ['Brahmi', 'Amla', 'Bhringraj', 'Neem', 'Coconut Oil', 'Sesame Oil'],
      dosage: 'Apply 2-3 times weekly, leave overnight',
      duration: 'Use regularly for 2-3 months for best results',
      precautions: 'Avoid if allergic to any ingredients, test on small area first',
      howToUse: 'Warm oil slightly, massage into scalp and hair, leave for 2-3 hours or overnight',
      benefits: [
        'Promotes natural hair growth and thickness',
        'Strengthens hair roots and prevents hair fall',
        'Improves scalp health and reduces dandruff',
        'Nourishes hair with natural oils and vitamins',
        'Prevents premature graying and hair damage'
      ]
    }
  },
  {
    name: 'Shilajit',
    description: 'Pure Himalayan Shilajit for energy, vitality, and overall wellness',
    benefits: ['Energy Boost', 'Vitality', 'Overall Wellness'],
    image: '/products/img2.jpeg',
    detailedInfo: {
      ingredients: ['Pure Shilajit Resin', 'Natural Binders', 'No Artificial Additives'],
      dosage: '1-2 tablets, twice daily with warm milk or water',
      duration: 'Take for 6-8 weeks for optimal benefits',
      precautions: 'Avoid if pregnant, consult doctor if on medication',
      howToUse: 'Take with warm milk or water, preferably on empty stomach',
      benefits: [
        'Boosts energy levels and physical stamina',
        'Enhances mental clarity and focus',
        'Improves immune system function',
        'Supports reproductive health and vitality',
        'Natural adaptogen for stress management'
      ]
    }
  },
  {
    name: 'Urjavardhak Oil',
    description: 'Traditional Ayurvedic oil for male vitality and reproductive health',
    benefits: ['Male Vitality', 'Reproductive Health', 'Energy'],
    image: '/products/img3.jpeg',
    detailedInfo: {
      ingredients: ['Ashwagandha', 'Safed Musli', 'Kaunch Beej', 'Gokshura', 'Sesame Oil', 'Coconut Oil'],
      dosage: 'Apply 2-3 times daily to affected areas',
      duration: 'Use regularly for 2-3 months for best results',
      precautions: 'For external use only, avoid contact with eyes',
      howToUse: 'Apply oil to affected areas and massage gently for 10-15 minutes',
      benefits: [
        'Improves male reproductive health and vitality',
        'Enhances energy levels and stamina',
        'Supports overall male wellness',
        'Natural and safe formulation',
        'Traditional Ayurvedic remedy'
      ]
    }
  },
  {
    name: 'Jod Dard Tablet',
    description: 'Ayurvedic tablets for joint pain relief and mobility improvement',
    benefits: ['Joint Pain Relief', 'Mobility', 'Anti-inflammatory'],
    image: '/products/img4.jpeg',
    detailedInfo: {
      ingredients: ['Guggulu', 'Shallaki', 'Ginger', 'Turmeric', 'Black Pepper', 'Ashwagandha'],
      dosage: '1-2 tablets, twice daily with warm water',
      duration: 'Take for 8-12 weeks for joint health',
      precautions: 'Consult doctor if you have bleeding disorders',
      howToUse: 'Take with warm water after meals for better absorption',
      benefits: [
        'Reduces joint inflammation and pain naturally',
        'Improves joint flexibility and mobility',
        'Strengthens bones and connective tissues',
        'Natural pain relief without side effects',
        'Supports overall musculoskeletal health'
      ]
    }
  },
  {
    name: 'Stabhan Tablet',
    description: 'Natural tablets for sexual performance',
    benefits: ['Sexual Performance', 'Endurance', 'Confidence'],
    image: '/products/img5.png',
    detailedInfo: {
      ingredients: ['Safed Musli', 'Kaunch Beej', 'Ashwagandha', 'Gokshura', 'Shilajit', 'Natural Binders'],
      dosage: '1-2 tablets, twice daily with warm milk',
      duration: 'Take for 4-6 weeks for optimal results',
      precautions: 'Consult doctor if you have heart conditions',
      howToUse: 'Take with warm milk, preferably on empty stomach',
      benefits: [
        'Improves sexual performance and endurance',
        'Helps with premature ejaculation',
        'Boosts confidence and self-esteem',
        'Natural and safe formulation',
        'Supports overall male reproductive health'
      ]
    }
  },
  {
    name: 'Piles Tablet',
    description: 'Ayurvedic tablets for hemorrhoids and digestive health',
    benefits: ['Hemorrhoid Relief', 'Digestive Health', 'Pain Relief'],
    image: '/products/img6.jpeg',
    detailedInfo: {
      ingredients: ['Haritaki', 'Amla', 'Bibhitaki', 'Neem', 'Turmeric', 'Natural Binders'],
      dosage: '1-2 tablets, twice daily with warm water',
      duration: 'Take for 4-6 weeks for piles relief',
      precautions: 'Consult doctor if symptoms persist or worsen',
      howToUse: 'Take with warm water after meals',
      benefits: [
        'Relieves hemorrhoid pain and inflammation',
        'Improves digestive system function',
        'Reduces bleeding and swelling',
        'Natural and safe treatment',
        'Supports overall digestive health'
      ]
    }
  },
  {
    name: 'Growthex Tablet',
    description: 'Natural tablets for height growth and bone development',
    benefits: ['Height Growth', 'Bone Development', 'Growth Support'],
    image: '/products/img7.jpeg',
    detailedInfo: {
      ingredients: ['Shatavari', 'Ashwagandha', 'Gokshura', 'Amla', 'Natural Binders', 'Growth Factors'],
      dosage: '1-2 tablets, twice daily with warm milk',
      duration: 'Take for 6-12 months for growth support',
      precautions: 'Best results before age 25, consult doctor',
      howToUse: 'Take with warm milk, preferably on empty stomach',
      benefits: [
        'Supports natural height growth and development',
        'Strengthens bones and improves bone density',
        'Enhances overall growth and development',
        'Natural and safe formulation',
        'Supports healthy growth patterns'
      ]
    }
  },
  {
    name: 'Nari Prabha Tablet',
    description: 'Ayurvedic tablets for women\'s health, beauty, and hormonal balance',
    benefits: ['Women\'s Health', 'Hormonal Balance', 'Beauty'],
    image: '/products/img8.jpeg',
    detailedInfo: {
      ingredients: ['Shatavari', 'Lodhra', 'Manjistha', 'Kumari', 'Natural Binders', 'Women\'s Health Herbs'],
      dosage: '1-2 tablets, twice daily with warm water',
      duration: 'Take for 3-6 months for optimal results',
      precautions: 'Consult doctor if pregnant or on medication',
      howToUse: 'Take with warm water, preferably on empty stomach',
      benefits: [
        'Supports women\'s reproductive health',
        'Helps maintain hormonal balance naturally',
        'Improves skin complexion and beauty',
        'Supports menstrual health and regularity',
        'Enhances overall women\'s wellness'
      ]
    }
  }
];

// Product Modal Component - Redesigned
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] shadow-2xl border border-gray-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modern Header with Gradient */}
            <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 text-white overflow-hidden flex-shrink-0">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                  <p className="text-primary-100 text-lg max-w-md">{product.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                >
                  <HiOutlineX size={20} />
                </button>
              </div>
            </div>

            {/* Content with Side-by-Side Layout */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto scroll-smooth">
              {/* Left Side - Product Image and Quick Info */}
              <div className="lg:w-1/2 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Product Image */}
                <div className="mb-6">
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <HiOutlineScale className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold text-gray-800">Dosage</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{product.detailedInfo.dosage}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <HiOutlineClock className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold text-gray-800">Duration</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{product.detailedInfo.duration}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Key Benefits Only */}
              <div className="lg:w-1/2 p-8">
                {/* Key Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <HiOutlineShieldCheck className="w-6 h-6 text-primary mr-3" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {product.detailedInfo.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-4 bg-green-50 rounded-xl border-l-4 border-green-400 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-8 pb-4 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      document.getElementById('contact').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact for Purchase
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProductCard = ({ product, index, onLearnMore }) => {
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
          onClick={() => onLearnMore(product)}
          className="mt-6 w-full btn-primary"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const PRODUCTS_PER_PAGE = 8;
  
  // Determine which products to show
  const productsToShow = products.slice(0, visibleProducts);
  const hasMoreProducts = products.length > visibleProducts;

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + PRODUCTS_PER_PAGE);
  };

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
            <ProductCard 
              key={`${product.name}-${index}`} 
              product={product} 
              index={index}
              onLearnMore={handleLearnMore}
            />
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

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Products; 