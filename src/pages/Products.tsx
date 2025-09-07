import { motion } from 'framer-motion';
import { 
  ShoppingCartIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon, 
  CloudArrowUpIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Products = () => {
  const products = [
    {
      name: 'ArionexCRM',
      description: 'Complete customer relationship management solution designed for modern businesses. Manage leads, customers, and sales pipeline efficiently.',
      status: 'Live',
      price: '₹2,999/month',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Email Integration', 'Mobile App'],
      icon: <BuildingOfficeIcon className="h-8 w-8 text-primary" />,
      category: 'Business Management'
    },
    {
      name: 'EduTrack Pro',
      description: 'Comprehensive student information system for educational institutions. Streamline admissions, academics, and administration.',
      status: 'Beta',
      price: '₹1,999/month',
      features: ['Student Management', 'Grade Tracking', 'Attendance System', 'Parent Portal', 'Fee Management'],
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
      category: 'Education'
    },
    {
      name: 'RetailFlow',
      description: 'E-commerce and inventory management platform for retail businesses. Manage products, orders, and customers seamlessly.',
      status: 'Coming Soon',
      price: '₹3,499/month',
      features: ['Inventory Management', 'Order Processing', 'Customer Analytics', 'Multi-channel Sales', 'Payment Gateway'],
      icon: <ShoppingCartIcon className="h-8 w-8 text-primary" />,
      category: 'E-commerce'
    },
    {
      name: 'CloudSync',
      description: 'Secure cloud storage and file synchronization solution for businesses. Access your files anywhere, anytime.',
      status: 'Live',
      price: '₹999/month',
      features: ['File Sync', 'Team Collaboration', 'Version Control', 'Security Encryption', 'API Access'],
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      category: 'Cloud Services'
    },
    {
      name: 'DataViz Analytics',
      description: 'Business intelligence platform that transforms data into actionable insights with beautiful visualizations.',
      status: 'Beta',
      price: '₹4,999/month',
      features: ['Data Visualization', 'Custom Reports', 'Real-time Analytics', 'Dashboard Builder', 'AI Insights'],
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      category: 'Analytics'
    },
    {
      name: 'SecureVault',
      description: 'Enterprise-grade security solution with advanced threat detection and data protection capabilities.',
      status: 'Coming Soon',
      price: '₹5,999/month',
      features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Audit Logs', '24/7 Monitoring'],
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      category: 'Security'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCartIcon className="h-4 w-4 mr-2" />
              Our Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Innovative software solutions designed to transform your business operations. Ready-to-use products that drive growth and efficiency.
            </p>
          </motion.div>
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : product.status === 'Beta'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  {product.icon}
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{product.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">{product.price}</div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {product.features.length > 4 && (
                    <div className="text-sm text-gray-500">+{product.features.length - 4} more features</div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    product.status === 'Coming Soon'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`} disabled={product.status === 'Coming Soon'}>
                    {product.status === 'Coming Soon' ? 'Notify Me' : 'Get Started'}
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors">
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
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
