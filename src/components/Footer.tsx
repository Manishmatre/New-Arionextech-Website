import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import Logo from '@/assets/arionextech_Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, url: 'https://facebook.com/arionextech', name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <FaInstagram className="h-5 w-5" />, url: 'https://instagram.com/arionextech', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <FaLinkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/company/arionextech-software/about/?viewAsMember=true', name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <FaYoutube className="h-5 w-5" />, url: 'https://www.youtube.com/@arionextech', name: 'YouTube', color: 'hover:text-red-500' },
    { icon: <FaTwitter className="h-5 w-5" />, url: 'https://twitter.com/arionextech', name: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <FaGithub className="h-5 w-5" />, url: 'https://github.com/arionextech', name: 'GitHub', color: 'hover:text-gray-300' },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      text: '+91 8817088544',
      link: 'tel:+918817088544'
    },
    {
      icon: <EnvelopeIcon className="h-5 w-5" />,
      text: 'info@arionextech.com',
      link: 'mailto:info@arionextech.com'
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      text: 'India',
      link: null
    }
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', path: '/services#web' },
        { name: 'Mobile Apps', path: '/services#mobile' },
        // { name: 'Cloud Solutions', path: '/services#cloud' },
        // { name: 'AI & ML', path: '/services#ai' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'ArionexCRM', path: '/products#crm' },
        { name: 'EduTrack Pro', path: '/products#edutrack' },
        { name: 'RetailFlow', path: '/products#retail' },
        { name: 'DataViz Analytics', path: '/products#analytics' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQs', path: '/faqs' },
        { name: 'Help Center', path: '/help' },
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Fallback background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
          {/* Company Info - Takes 2 columns on large screens */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <motion.img 
                src={Logo} 
                alt="ArionexTech Logo" 
                className="h-10 w-auto select-none" 
                loading="eager" 
                decoding="async"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Empowering businesses with innovative software solutions and cutting-edge technology that drives digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center justify-center md:justify-start space-x-3 text-gray-300"
                >
                  <span className="text-primary">{contact.icon}</span>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110`}
                  aria-label={social.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="col-span-1 text-center"
            >
              <h3 className="text-xl font-bold mb-6 text-white relative flex justify-center">
                {section.title}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-blue-500"></div>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center justify-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <RocketLaunchIcon className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-white">Ready to Transform Your Business?</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Start Your Project
              </Link>
              <a 
                href="https://wa.me/918817088544?text=Hi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0 flex items-center"
          >
            © {currentYear} ArionexTech. All rights reserved. Made with ❤️ in India
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"
          >
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
            <Link to="/faqs" className="hover:text-primary transition-colors duration-300">FAQs</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  