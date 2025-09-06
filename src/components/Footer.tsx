import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, url: 'https://github.com/arionextech' },
    { icon: <FaLinkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/arionextech' },
    { icon: <FaTwitter className="h-5 w-5" />, url: 'https://twitter.com/arionextech' },
    { icon: <FaEnvelope className="h-5 w-5" />, url: 'mailto:info@arionextech.com' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Careers', path: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '/faq' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'info@arionextech.com', path: 'mailto:info@arionextech.com' },
        { name: '+1 (555) 123-4567', path: 'tel:+15551234567' },
        { name: '123 Tech Street, Jabalpur, MP 482001', path: 'https://maps.google.com' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Arionex</span>
              <span className="text-2xl font-bold">Tech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={social.url.split('/').pop()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ArionexTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
