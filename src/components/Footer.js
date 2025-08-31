import React from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineOfficeBuilding } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
              Mahasharman Healthcare
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting wellness through ancient Ayurvedic wisdom and modern manufacturing excellence. 
              We proudly manufacture authentic medicines for leading Ayurvedic organizations.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <HiOutlineOfficeBuilding className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <HiOutlineOfficeBuilding className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>

              <li><a href="#products" className="text-gray-300 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#quality" className="text-gray-300 hover:text-primary transition-colors">Quality</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <HiOutlinePhone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 9592882249</p>
                  <p className="text-gray-300 text-sm">+91 8360919650</p>
                  <p className="text-gray-300 text-sm">+91 9855911176</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HiOutlineMail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">mahasharmanhealthcare@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/WZXkoFzUEo7MdLJ88" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    View on Google Maps
                  </a>
                  <p className="text-gray-300 text-sm mt-1">Maha Sharman Healthcare</p>
                  <p className="text-gray-300 text-sm">395/2, Basant Road, Near Sharman Jain Sweets</p>
                  <p className="text-gray-300 text-sm">Civil Lines, Ludhiana, Punjab, India 141001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mahasharman Healthcare. All rights reserved.
            </p>
            <div className="flex flex-col space-y-2 mt-4 md:mt-0">
              <div className="flex space-x-6">
                <span className="text-gray-400 text-sm">GMP Certified</span>
                <span className="text-gray-400 text-sm">ISO Compliant</span>
                <span className="text-gray-400 text-sm">Ayurvedic Excellence</span>
              </div>
              <div className="flex flex-col space-y-1 text-xs">
                <span className="text-primary font-semibold">GSTIN: 03ABXFM5134B1ZE</span>
                <span className="text-primary font-semibold">License No: 947-AY-PB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 