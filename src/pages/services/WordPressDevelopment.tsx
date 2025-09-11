import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ShoppingCartIcon, 
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const WordPressDevelopment = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
      title: 'Custom WordPress Development',
      description: 'Tailored WordPress solutions built from scratch to meet your specific business requirements.'
    },
    {
      icon: <ShoppingCartIcon className="h-8 w-8 text-primary" />,
      title: 'E-commerce Integration',
      description: 'WooCommerce and custom e-commerce solutions with payment gateways and inventory management.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.'
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-primary" />,
      title: 'Custom Themes & Plugins',
      description: 'Bespoke themes and plugins developed specifically for your brand and functionality needs.'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'Performance Optimization',
      description: 'Speed optimization, caching, and performance tuning for lightning-fast loading times.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Security & Maintenance',
      description: 'Regular updates, security monitoring, and ongoing maintenance to keep your site secure.'
    }
  ];

  const services = [
    'WordPress Website Development',
    'WooCommerce E-commerce Stores',
    'Custom Theme Development',
    'Plugin Development & Customization',
    'WordPress Migration & Hosting',
    'SEO Optimization',
    'Performance Optimization',
    'Security Hardening',
    'Maintenance & Support',
    'Content Management Training'
  ];

  const packages = [
    {
      name: 'Starter WordPress',
      price: '₹15,000',
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Custom WordPress Installation',
        'Responsive Theme Setup',
        'Basic SEO Configuration',
        'Contact Form Integration',
        '5 Pages Setup',
        '1 Month Support'
      ]
    },
    {
      name: 'Business WordPress',
      price: '₹35,000',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Theme Development',
        'Advanced SEO Setup',
        'E-commerce Ready (WooCommerce)',
        'Payment Gateway Integration',
        'Blog Setup',
        'Social Media Integration',
        '3 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise WordPress',
      price: '₹75,000',
      description: 'For large-scale business websites',
      features: [
        'Fully Custom Development',
        'Advanced E-commerce Features',
        'Multi-language Support',
        'Custom Plugin Development',
        'Performance Optimization',
        'Security Hardening',
        '6 Months Support'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CodeBracketIcon className="h-4 w-4 mr-2" />
              WordPress Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">WordPress</span> Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Custom WordPress websites and e-commerce solutions that combine powerful functionality with stunning design to grow your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn bg-white text-gray-900 hover:bg-gray-100">
                Start Your Project
              </a>
              <a href="#packages" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">WordPress Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver WordPress solutions that are fast, secure, and tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
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
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">WordPress Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive WordPress development services to meet all your website needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WordPress <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect WordPress package for your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  pkg.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
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
              Ready to Build Your <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">WordPress Website</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a powerful WordPress solution that drives your business forward.
            </p>
            <a
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
