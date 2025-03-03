import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </div>
      
      <Contact />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about my services and collaboration opportunities.
            </p>
          </motion.div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-2">What services do you offer?</h3>
              <p className="text-gray-700">
                I offer a range of services including full-stack web development, cybersecurity consulting, blockchain development, and technical research collaboration. My expertise spans across the MERN stack, cloud technologies, and secure software development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-2">Are you available for freelance work?</h3>
              <p className="text-gray-700">
                Yes, I am available for freelance projects, particularly in web development, cybersecurity assessments, and blockchain implementations. I'm open to both short-term and long-term engagements, depending on project requirements and my current schedule.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-2">How can we collaborate on research?</h3>
              <p className="text-gray-700">
                I'm always interested in research collaborations, especially in cybersecurity, blockchain technology, and AI applications. If you have a research project or paper where my expertise could be valuable, please reach out with details about the project scope and goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-2">What is your typical project process?</h3>
              <p className="text-gray-700">
                My project process typically involves an initial consultation to understand requirements, followed by a detailed proposal outlining scope, timeline, and deliverables. Once approved, I follow an agile development approach with regular updates and feedback sessions. The project concludes with thorough testing, deployment, and post-launch support.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <AIChatbot />
    </Layout>
  );
};

export default ContactPage; 