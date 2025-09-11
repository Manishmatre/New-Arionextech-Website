import { motion } from 'framer-motion';
import { BuildingOfficeIcon, LightBulbIcon, UserGroupIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from '@/assets/arionextech_Logo.png';

const About = () => {

  const stats = [
    { label: 'Years Experience', value: '5+', icon: ClockIcon },
    { label: 'Projects Completed', value: '50+', icon: BuildingOfficeIcon },
    { label: 'Happy Clients', value: '40+', icon: UserGroupIcon },
    { label: 'Global Reach', value: '10+', icon: GlobeAltIcon },
  ];

  const values = [
    {
      name: 'Innovation',
      description: 'We embrace change and constantly seek new ways to solve problems.',
      icon: LightBulbIcon,
    },
    {
      name: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Collaboration',
      description: 'We believe in the power of teamwork and strong partnerships.',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Fallback background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <UserGroupIcon className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">ArionexTech</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Empowering businesses through innovative technology solutions. We combine 5+ years of expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leaders - discover how we've grown and evolved.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 text-gray-600">
                <p>
                  ArionexTech is a dynamic technology company built on 5+ years of combined industry experience. We started with a vision to create 
                  innovative software solutions that make a real difference for businesses worldwide.
                </p>
                <p>
                  As a full-service technology company, we help businesses of all sizes 
                  transform their ideas into reality through cutting-edge technology and exceptional service. Our team brings together 
                  years of expertise from various tech domains to deliver outstanding results.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction drives everything we do. We believe in building 
                  long-term partnerships with our clients and delivering solutions that exceed expectations.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 bg-gray-100 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary/10 to-blue-100 h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-200"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-blue-300/40 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-20 h-20 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/40 rounded-full"></div>
                <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                  <img
                    src={Logo}
                    alt="ArionexTech Logo"
                    className="h-32 w-auto mb-4 select-none"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-sm text-primary/70 mt-2">Innovation • Excellence • Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.name}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              { 
                name: 'Manish Matre', 
                role: 'CEO & Founder', 
                image: 'CEO',
                social: {
                  linkedin: 'https://linkedin.com/in/manishmatre',
                  twitter: 'https://twitter.com/manishmatre',
                  github: 'https://github.com/manishmatre'
                },
                isFounder: true
              },
              { 
                name: 'Rahul Singh', 
                role: 'Lead Developer', 
                image: 'Developer',
                social: {
                  linkedin: '#',
                  github: '#',
                  instagram: '#'
                },
                isFounder: false
              },
              { 
                name: 'Anjali Patel', 
                role: 'UI/UX Designer', 
                image: 'Designer',
                social: {
                  linkedin: '#',
                  instagram: '#',
                  twitter: '#'
                },
                isFounder: false
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">{member.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-start space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.isFounder ? member.social.linkedin : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.isFounder ? member.social.twitter : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaTwitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.isFounder ? member.social.github : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.isFounder ? member.social.instagram : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
