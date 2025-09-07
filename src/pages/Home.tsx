import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon, CloudArrowUpIcon, CpuChipIcon, StarIcon, CheckCircleIcon, ClockIcon, PhoneIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, PresentationChartLineIcon, CogIcon, RocketLaunchIcon, DevicePhoneMobileIcon, SparklesIcon, PlayIcon } from '@heroicons/react/24/outline';
import bgVideo from '../assets/arionextech_bg-Video.mp4';
import { useState, useEffect } from 'react';

const Home = () => {
  // Animated text for services
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const services = [
    {
      name: 'Web Development',
      subtitle: 'From responsive websites to complex web applications, we build digital experiences that engage and convert your audience.'
    },
    {
      name: 'Mobile Apps',
      subtitle: 'Native and cross-platform mobile solutions that deliver seamless user experiences across iOS and Android devices.'
    },
    {
      name: 'AI & Machine Learning',
      subtitle: 'Intelligent systems that learn, adapt, and automate your business processes for maximum efficiency and insights.'
    },
    {
      name: 'Custom Software',
      subtitle: 'Tailored enterprise solutions designed specifically for your unique business requirements and workflows.'
    },
    {
      name: 'UI/UX Design',
      subtitle: 'Beautiful, intuitive interfaces that create memorable user experiences and drive customer satisfaction.'
    },
    {
      name: 'Digital Marketing',
      subtitle: 'Strategic online campaigns that boost your brand visibility, engagement, and drive measurable business growth.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // Framer Motion v12 expects an Easing function or a bezier array
        // Equivalent to an easeOut curve
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
      title: 'Expert Development Team',
      description: '5+ years of experience with skilled developers who deliver high-quality, scalable solutions using the latest technologies.',
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Proven Track Record',
      description: '50+ successful projects delivered on time and within budget, with 40+ satisfied clients across various industries.',
    },
    {
      icon: <CpuChipIcon className="h-8 w-8 text-primary" />,
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock technical support and ongoing maintenance to ensure your software runs smoothly at all times.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStart Solutions',
      company: 'TechStart Solutions',
      image: 'RK',
      rating: 5,
      text: 'ArionexTech delivered an exceptional CRM solution that transformed our business operations. Their team understood our requirements perfectly and delivered beyond expectations.',
    },
    {
      name: 'Priya Sharma',
      position: 'Director, EduVision Institute',
      company: 'EduVision Institute',
      image: 'PS',
      rating: 5,
      text: 'The education management system they built for us has streamlined our entire workflow. Student management, fee tracking, and reporting - everything is now seamless.',
    },
    {
      name: 'Amit Patel',
      position: 'Founder, RetailMax',
      company: 'RetailMax',
      image: 'AP',
      rating: 5,
      text: 'Outstanding work on our e-commerce platform! The team delivered a robust, scalable solution that handles our growing customer base effortlessly.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.',
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our designers create intuitive UI/UX and interactive prototypes.',
      icon: <PresentationChartLineIcon className="h-8 w-8 text-primary" />,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers build your solution using cutting-edge technologies.',
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      duration: 'Ongoing'
    }
  ];

  const topServices = [
    {
      icon: <CodeBracketIcon className="h-12 w-12 text-white" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['React/Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
      price: 'Starting from ₹9,999',
      link: '/services/web-development',
      gradient: 'from-blue-600 to-blue-800',
      popular: true
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-white" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Ready'],
      price: 'Starting from ₹24,999',
      link: '/services/mobile-app-development',
      gradient: 'from-purple-600 to-purple-800',
      popular: false
    },
    {
      icon: <SparklesIcon className="h-12 w-12 text-white" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business needs.',
      features: ['Custom Development', 'Enterprise Solutions', 'API Integration', 'Scalable Architecture'],
      price: 'Starting from ₹49,999',
      link: '/services/custom-software',
      gradient: 'from-emerald-600 to-emerald-800',
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <CheckCircleIcon className="h-6 w-6" /> },
    { number: '40+', label: 'Happy Clients', icon: <StarIcon className="h-6 w-6" /> },
    { number: '5+', label: 'Years Experience', icon: <ClockIcon className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <ChatBubbleLeftRightIcon className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Background Video */}
      <section className="relative overflow-hidden min-h-screen flex items-center text-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          {/* Enhanced overlay for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/3"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto text-center py-20"
            >
              {/* Badge */}
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20"
              >
                <SparklesIcon className="h-4 w-4 mr-2 text-blue-300" />
                Leading Software Development Company
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              >
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Innovative Solutions for
                </motion.span>
                
                {/* Animated changing text for services */}
                <div className="block h-16 md:h-20 lg:h-24 overflow-hidden -mb-2 md:-mb-4">
                  <motion.span 
                    key={currentServiceIndex}
                    className="block bg-gradient-to-r from-blue-400 via-primary to-blue-600 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -100, rotateX: 90 }}
                    transition={{ 
                      duration: 0.8, 
                      type: "spring", 
                      stiffness: 100,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {services[currentServiceIndex].name}
                  </motion.span>
                </div>
                
                <motion.span 
                  className="block text-white text-3xl md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  That Drive Success
                </motion.span>
              </motion.h1>
              
              {/* Dynamic subtitle based on current service */}
              <motion.p 
                key={`subtitle-${currentServiceIndex}`}
                variants={fadeInUp}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {services[currentServiceIndex].subtitle}
              </motion.p>

              {/* Key Features */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              >
                {[
                  { icon: <CodeBracketIcon className="h-6 w-6" />, text: "Custom Development" },
                  { icon: <CpuChipIcon className="h-6 w-6" />, text: "AI-Powered Solutions" },
                  { icon: <CloudArrowUpIcon className="h-6 w-6" />, text: "Cloud-Native Architecture" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20"
                  >
                    <span className="text-blue-300 mr-3">{feature.icon}</span>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-6 py-3 rounded-lg text-base hover:from-blue-500 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center"
                >
                  <RocketLaunchIcon className="mr-2 h-5 w-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </Link>
                
                <Link
                  to="/portfolio"
                  className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-medium px-6 py-3 rounded-lg text-base hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <PlayIcon className="mr-2 h-5 w-5" />
                  View Our Work
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-16"
              >
                {[
                  { number: '50+', label: 'Projects Delivered' },
                  { number: '40+', label: 'Happy Clients' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center px-2"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wide leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2 uppercase tracking-wide">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Top Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Our Top Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Flagship</span> Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and proven services that drive business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {topServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-8 text-white h-full transform group-hover:scale-105 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-white/80">
                          <CheckCircleIcon className="h-4 w-4 mr-2 text-white/60" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">{service.price}</span>
                        <div className="text-xs text-white/60">Starting Price</div>
                      </div>
                      
                      <Link
                        to={service.link}
                        className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-colors duration-300 inline-flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg group"
            >
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full overflow-hidden -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
          style={{
            fill: '#ffffff',
            transform: 'scaleX(-1)'
          }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <StarIcon className="h-4 w-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Trusted <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Technology</span> Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just build software - we build lasting partnerships. Here's what sets ArionexTech apart from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Proven</span> Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we follow a structured process that ensures your project's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-x-4 z-0"></div>
                )}
                
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <div className="inline-flex items-center text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ready to Start Your <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Project</span>?</h3>
              <p className="text-gray-600 mb-6">Get a free consultation and project estimate within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Schedule Free Consultation
                </Link>
                <Link to="/services" className="btn btn-outline inline-flex items-center justify-center">
                  View Our Services
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with ArionexTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{testimonial.image}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/about#testimonials"
              className="btn btn-outline inline-flex items-center justify-center"
            >
              View More Testimonials
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Limited Time: Free Project Analysis Worth ₹25,000
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">10X</span> Your <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Business</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 40+ successful businesses who transformed their operations with our custom software solutions. 
              <span className="font-semibold text-white"> Get started today with a FREE consultation!</span>
            </p>
            
            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              {[
                { icon: <CheckCircleIcon className="h-5 w-5" />, text: "Free Consultation & Quote" },
                { icon: <ClockIcon className="h-5 w-5" />, text: "24-Hour Response Time" },
                { icon: <StarIcon className="h-5 w-5" />, text: "5-Star Rated Service" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center text-blue-100"
                >
                  <span className="text-yellow-300 mr-2">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Get FREE Consultation Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <div className="text-sm text-blue-200">
                <div className="flex items-center justify-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  No commitment • 100% Free • 24hr response
                </div>
              </div>
            </div>

            {/* Urgency Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm"
            >
              ⚡ Only 3 consultation slots left this week!
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
