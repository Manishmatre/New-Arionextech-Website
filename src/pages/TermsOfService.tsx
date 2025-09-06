import { motion } from 'framer-motion';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using ArionexTech\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use our services.'
      ]
    },
    {
      title: 'Description of Services',
      content: [
        'ArionexTech provides software development services including web development, mobile application development, cloud solutions, AI/ML implementation, and custom software products.',
        'We also offer SaaS products including CRM systems, educational management software, analytics platforms, and other business solutions.',
        'Our services are provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
        'We may impose limits on certain features or restrict access to parts or all of our services without notice or liability.'
      ]
    },
    {
      title: 'User Accounts and Registration',
      content: [
        'To access certain features of our services, you may be required to create an account and provide accurate, current, and complete information.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You agree to notify us immediately of any unauthorized use of your account or any other breach of security.',
        'We reserve the right to suspend or terminate accounts that violate these terms or are inactive for extended periods.',
        'You must be at least 18 years old to create an account and use our services.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms vary by service type and are specified in individual service agreements or product subscriptions.',
        'For project-based services, payment schedules will be outlined in the project contract or statement of work.',
        'SaaS product subscriptions are billed monthly or annually as selected during signup.',
        'All fees are non-refundable unless otherwise specified in writing or required by applicable law.',
        'We reserve the right to change our pricing with 30 days\' notice for ongoing subscriptions.',
        'Failure to pay fees may result in suspension or termination of services.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'All content, features, and functionality of our services are owned by ArionexTech and are protected by copyright, trademark, and other intellectual property laws.',
        'For custom development projects, intellectual property ownership will be specified in the project agreement.',
        'You retain ownership of any content, data, or materials you provide to us.',
        'We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these terms.',
        'You may not reproduce, distribute, modify, or create derivative works of our services without explicit written permission.',
        'Our proprietary software, methodologies, and trade secrets remain our exclusive property.'
      ]
    },
    {
      title: 'User Conduct and Prohibited Uses',
      content: [
        'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.',
        'Prohibited activities include but are not limited to: attempting to gain unauthorized access to our systems, transmitting malicious code, engaging in fraudulent activities, or violating any applicable laws.',
        'You may not use our services to store, transmit, or distribute content that is illegal, harmful, threatening, abusive, or violates the rights of others.',
        'Commercial use of our services outside of intended business purposes requires explicit written permission.',
        'We reserve the right to investigate and take appropriate action against users who violate these terms.'
      ]
    },
    {
      title: 'Data Protection and Privacy',
      content: [
        'Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.',
        'You are responsible for ensuring that any data you provide to us complies with applicable data protection laws.',
        'For custom development projects, data handling and protection requirements will be specified in separate data processing agreements.',
        'We implement appropriate technical and organizational measures to protect your data, but cannot guarantee absolute security.',
        'You agree to promptly notify us of any suspected data breaches or security incidents.'
      ]
    },
    {
      title: 'Service Level and Availability',
      content: [
        'We strive to maintain high availability of our services but do not guarantee uninterrupted access.',
        'Scheduled maintenance will be performed with advance notice when possible.',
        'We are not liable for service interruptions due to factors beyond our reasonable control, including internet connectivity issues, third-party service failures, or force majeure events.',
        'Service level agreements for specific services will be detailed in separate agreements.',
        'We reserve the right to implement fair usage policies to ensure service quality for all users.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, ArionexTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability for any claims arising from or related to our services shall not exceed the amount paid by you for the services in the 12 months preceding the claim.',
        'We do not warrant that our services will meet your specific requirements or that they will be error-free or uninterrupted.',
        'You acknowledge that you use our services at your own risk and that we cannot guarantee specific outcomes or results.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.'
      ]
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold harmless ArionexTech, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.',
        'This includes but is not limited to legal fees, court costs, and damages awarded against us.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.',
        'Your indemnification obligations will survive termination of these terms and your use of our services.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate these terms at any time with or without cause by providing written notice.',
        'We may immediately suspend or terminate your access to our services if you violate these terms.',
        'Upon termination, your right to use our services will cease immediately.',
        'Provisions that by their nature should survive termination will remain in effect, including payment obligations, intellectual property rights, and limitation of liability.',
        'We will provide reasonable assistance in data export upon termination, subject to our data retention policies.'
      ]
    }
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
              Terms of Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Please read these terms carefully before using our services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-500"
            >
              Last updated: January 1, 2024
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of ArionexTech's website, services, and products. 
                  These Terms constitute a legally binding agreement between you and ArionexTech Software Private Limited 
                  ("ArionexTech," "we," "us," or "our").
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read these Terms carefully before accessing or using our services. By accessing or using any part of our services, 
                  you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Additional Legal Provisions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                12. Governing Law and Dispute Resolution
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from or relating to these Terms or our services shall be resolved through binding arbitration in Jabalpur, Madhya Pradesh, India, in accordance with the Arbitration and Conciliation Act, 2015.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree to submit to the personal jurisdiction of the courts located in Jabalpur, Madhya Pradesh, India for any actions not subject to arbitration.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                13. Changes to Terms
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                14. Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@arionextech.com</p>
                  <p><strong>Address:</strong> 123 Tech Street, Jabalpur, MP 482001, India</p>
                  <p><strong>Phone:</strong> +91 (761) 123-4567</p>
                </div>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Acknowledgment
              </h3>
              <p className="text-blue-800">
                By using our services, you acknowledge that you have read these Terms of Service, understood them, 
                and agree to be bound by them. If you are entering into these Terms on behalf of a company or other legal entity, 
                you represent that you have the authority to bind such entity to these Terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
