import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Quality', to: 'quality' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Mahasharman
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`cursor-pointer transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-primary' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="px-4 py-5 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block text-gray-700 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 