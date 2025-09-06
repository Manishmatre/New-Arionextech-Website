import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon, CloudArrowUpIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const Home = () => {
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
      title: 'Custom Software',
      description: 'Tailored solutions designed specifically for your business needs.',
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
    },
    {
      icon: <CpuChipIcon className="h-8 w-8 text-primary" />,
      title: 'AI & ML',
      description: 'Leverage the power of artificial intelligence and machine learning.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/90"></div>
          <div className="absolute inset-0 bg-grid-white/5"></div>
        </div>
        
        <div className="relative z-10 section">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center py-20 md:py-32"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Empowering Ideas, <span className="text-yellow-300">Building Futures</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto"
              >
                We deliver innovative software solutions that drive business growth and digital transformation.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="btn btn-primary inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated Wave Background */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
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
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ArionexTech?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our custom software solutions.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Get a Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
