import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: When you use our services, we may collect personal information such as your name, email address, phone number, company name, and billing information.',
        'Usage Data: We automatically collect information about how you interact with our website and services, including IP addresses, browser type, pages visited, and time spent on our site.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.',
        'Communication Data: When you contact us, we collect the information you provide in your communications with our support team.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our software development services and products.',
        'Communication: To respond to your inquiries, provide customer support, and send important updates about our services.',
        'Billing and Payments: To process payments, send invoices, and manage your account.',
        'Marketing: To send you promotional materials about our services (with your consent), which you can opt out of at any time.',
        'Legal Compliance: To comply with applicable laws, regulations, and legal processes.',
        'Security: To protect our services, prevent fraud, and ensure the security of our systems and your data.'
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors, hosting providers, and analytics services.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.',
        'Legal Requirements: We may disclose your information when required by law, court order, or government request.',
        'Consent: We may share your information with your explicit consent for specific purposes not covered in this policy.',
        'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Encryption: We use industry-standard encryption to protect your data both in transit and at rest.',
        'Access Controls: We implement strict access controls to ensure only authorized personnel can access your information.',
        'Regular Audits: We conduct regular security audits and assessments to identify and address potential vulnerabilities.',
        'Secure Infrastructure: Our systems are hosted on secure, regularly updated infrastructure with multiple layers of protection.',
        'Employee Training: Our team is trained on data protection best practices and confidentiality requirements.',
        'While we implement robust security measures, no system is 100% secure. We continuously work to improve our security practices.'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'Service Data: We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.',
        'Legal Requirements: Some information may be retained longer to comply with legal obligations, resolve disputes, or enforce our agreements.',
        'Account Deletion: When you request account deletion, we will delete or anonymize your personal information, except where retention is required by law.',
        'Backup Systems: Information may persist in backup systems for a limited time after deletion for disaster recovery purposes.'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'Access: You have the right to request access to the personal information we hold about you.',
        'Correction: You can request correction of inaccurate or incomplete personal information.',
        'Deletion: You may request deletion of your personal information, subject to legal and contractual obligations.',
        'Portability: You have the right to request a copy of your data in a structured, machine-readable format.',
        'Opt-out: You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails.',
        'Cookies: You can control cookie preferences through your browser settings.',
        'To exercise these rights, please contact us at privacy@arionextech.com.'
      ]
    },
    {
      title: 'International Data Transfers',
      content: [
        'Global Services: As we serve clients globally, your information may be transferred to and processed in countries other than your country of residence.',
        'Adequate Protection: We ensure that international transfers are protected by appropriate safeguards, such as standard contractual clauses or adequacy decisions.',
        'Data Processing Agreements: We enter into data processing agreements with our service providers to ensure your data is protected according to applicable privacy laws.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Age Restriction: Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
        'Parental Consent: If we become aware that we have collected information from a child under 13 without parental consent, we will take steps to delete that information.',
        'Educational Products: For our educational software products used in schools, we comply with applicable laws regarding student data privacy, including FERPA where applicable.'
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
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

      {/* Privacy Policy Content */}
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
                  ArionexTech ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                  use our services, or interact with our software products.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </motion.div>

            {/* Policy Sections */}
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Contact Us
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@arionextech.com</p>
                  <p><strong>Address:</strong> 123 Tech Street, Jabalpur, MP 482001, India</p>
                  <p><strong>Phone:</strong> +91 (761) 123-4567</p>
                </div>
              </div>
            </motion.div>

            {/* Updates Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Policy Updates
              </h3>
              <p className="text-blue-800">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy 
                periodically for any changes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
