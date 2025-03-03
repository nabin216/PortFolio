import React from 'react';
import Layout from '../components/layout/Layout';
import Projects from '../components/sections/Projects';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';

const ProjectsPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of web development, cybersecurity, and blockchain projects.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Projects />
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">My Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I approach project development from concept to completion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-3">1. Discovery</h3>
              <p className="text-gray-700">
                I begin by understanding the problem, researching existing solutions, and defining clear objectives for the project.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-3">2. Planning</h3>
              <p className="text-gray-700">
                I create a detailed roadmap, select appropriate technologies, and establish milestones to ensure efficient development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-3">3. Development</h3>
              <p className="text-gray-700">
                I implement the solution using best practices, focusing on clean code, security, and scalability throughout the process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-3">4. Delivery</h3>
              <p className="text-gray-700">
                I thoroughly test, refine, and deploy the solution, providing documentation and support to ensure long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <AIChatbot />
    </Layout>
  );
};

export default ProjectsPage; 