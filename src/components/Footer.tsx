import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Logo from '@/assets/arionextech_Logo.png';

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
        { name: 'Cloud Solutions', path: '/services#cloud' },
        { name: 'AI & ML', path: '/services#ai' },
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

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="ArionexTech Logo" className="h-8 w-auto select-none" loading="eager" decoding="async" />
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
          <p className="text-gray-400 mb-4 md:mb-0">
            {currentYear} ArionexTech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
