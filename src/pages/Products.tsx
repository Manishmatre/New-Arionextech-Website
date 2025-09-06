import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, ClockIcon, CloudArrowUpIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const products = [
    {
      name: 'DentalOS',
      description: 'Comprehensive practice management software for modern dental clinics. Streamline appointments, patient records, and billing in one platform.',
      status: 'Coming Soon',
      features: ['Appointment Scheduling', 'Patient Records', 'Billing & Invoicing', 'Treatment Planning'],
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
    },
    {
      name: 'FleetPro',
      description: 'End-to-end fleet management solution for businesses with vehicle fleets. Track, maintain, and optimize your fleet operations.',
      status: 'In Development',
      features: ['Real-time Tracking', 'Maintenance Scheduling', 'Fuel Management', 'Driver Performance'],
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
    },
    {
      name: 'SecureVault',
      description: 'Enterprise-grade document management and secure file sharing platform with advanced encryption and access controls.',
      status: 'Coming Soon',
      features: ['End-to-End Encryption', 'Access Controls', 'Audit Trails', 'Secure Sharing'],
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Innovative SaaS solutions designed to transform your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                      {product.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="w-full btn btn-outline flex items-center justify-center">
                    Get Notified
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Custom Project in Mind?</h3>
              <p className="text-gray-600 mb-6">
                Our team specializes in building custom software solutions tailored to your specific business needs.
              </p>
              <a
                href="/contact"
                className="btn btn-primary inline-flex items-center justify-center"
              >
                Request a Consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
