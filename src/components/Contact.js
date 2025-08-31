import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const contactInfo = [
  {
    icon: <HiOutlinePhone className="w-6 h-6" />,
    title: 'Phone Numbers',
    details: [
      { number: '+91 9592882249', link: 'tel:+919592882249' },
      { number: '+91 8360919650', link: 'tel:+918360919650' },
      { number: '+91 9855911176', link: 'tel:+919855911176' }
    ],
    isMultiple: true
  },
  {
    icon: <HiOutlineMail className="w-6 h-6" />,
    title: 'Email',
    details: 'mahasharmanhealthcare@gmail.com',
    link: 'mailto:mahasharmanhealthcare@gmail.com',
    isMultiple: false
  },
  {
    icon: <HiOutlineLocationMarker className="w-6 h-6" />,
    title: 'Address',
    details: 'Maha Sharman Healthcare, 395/2, Basant Road, Near Sharman Jain Sweets, Civil Lines, Ludhiana, Punjab, India 141001',
    link: 'https://maps.app.goo.gl/WZXkoFzUEo7MdLJ88',
    isMultiple: false
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have questions about our products or interested in business opportunities? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 text-gray-800"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                <div className="text-accent">
                  {info.icon}
                </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-white">{info.title}</h3>
                    {info.isMultiple ? (
                      <div className="space-y-1">
                        {info.details.map((phone, phoneIndex) => (
                          <a
                            key={phoneIndex}
                            href={phone.link}
                            className="block text-gray-200 hover:text-white transition-colors duration-300"
                          >
                            {phone.number}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Find Maha Sharman Healthcare</h3>
            <p className="text-gray-200">Visit our manufacturing facility in Ludhiana</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.1234567890123!2d75.8500!3d30.9010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837f72c85d8d%3A0x57450dd3078cc3f5!2sGhumar%20Mandi%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahasharman Healthcare Location - Ludhiana, Punjab"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/WZXkoFzUEo7MdLJ88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                <HiOutlineLocationMarker className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 