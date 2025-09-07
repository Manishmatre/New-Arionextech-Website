import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUpIcon, 
  ChatBubbleLeftRightIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Check if user is scrolling up
      if (scrolled < lastScrollY && socialExpanded) {
        setSocialExpanded(false);
      }
      
      setShowScrollTop(scrolled > 300);
      setShowSocial(scrolled > 500);
      setLastScrollY(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, socialExpanded]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '+918817088544';
    const message = 'Hi';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <FaFacebook className="h-5 w-5" />, 
      url: 'https://facebook.com/arionextech',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Twitter', 
      icon: <FaTwitter className="h-5 w-5" />, 
      url: 'https://twitter.com/arionextech',
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin className="h-5 w-5" />, 
      url: 'https://linkedin.com/company/arionextech',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram className="h-5 w-5" />, 
      url: 'https://instagram.com/arionextech',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    { 
      name: 'YouTube', 
      icon: <FaYoutube className="h-5 w-5" />, 
      url: 'https://youtube.com/@arionextech',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Social Media Links */}
      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-end space-y-3"
          >
            {/* Social Links Container */}
            <AnimatePresence>
              {socialExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="flex flex-col space-y-2"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${social.color} text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social Toggle Button */}
            <motion.button
              onClick={() => setSocialExpanded(!socialExpanded)}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: socialExpanded ? 180 : 0 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: socialExpanded ? 45 : 0 }}
            >
              {socialExpanded ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -5, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaWhatsapp className="h-6 w-6 relative z-10" />
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </motion.button>

      {/* Go to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUpIcon className="h-6 w-6 relative z-10" />
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
