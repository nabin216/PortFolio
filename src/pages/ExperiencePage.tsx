import React from 'react';
import Layout from '../components/layout/Layout';
import Experience from '../components/sections/Experience';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';
import { FaLaptopCode, FaUserGraduate, FaCertificate } from 'react-icons/fa';
import { IconWrapper } from '../utils/IconWrapper';

const ExperiencePage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">Professional Experience</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey through internships, research positions, and entrepreneurial ventures.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Experience />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Professional Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I continue to grow and expand my skills in the technology field.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <IconWrapper icon={FaLaptopCode} className="text-accent text-3xl mr-4" />
                <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
              </div>
              <p className="text-gray-700 mb-4">
                I continuously enhance my technical skills through:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Online courses and tutorials</li>
                <li>Hands-on project development</li>
                <li>Contributing to open-source projects</li>
                <li>Participating in coding challenges</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <IconWrapper icon={FaUserGraduate} className="text-accent text-3xl mr-4" />
                <h3 className="text-xl font-bold text-primary">Academic Growth</h3>
              </div>
              <p className="text-gray-700 mb-4">
                I pursue academic excellence through:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>University coursework in advanced topics</li>
                <li>Research collaborations with professors</li>
                <li>Academic paper publications</li>
                <li>Attending technical workshops and seminars</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <IconWrapper icon={FaCertificate} className="text-accent text-3xl mr-4" />
                <h3 className="text-xl font-bold text-primary">Certifications</h3>
              </div>
              <p className="text-gray-700 mb-4">
                I validate my expertise through professional certifications:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Juniper Networks Certified Associate (May 2023)</li>
                <li>Google IT Support Professional (Feb 2023)</li>
                <li>Linux Foundation: Developing Secure Software (Mar 2024)</li>
                <li>AWS Solution Architect (In progress)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      <AIChatbot />
    </Layout>
  );
};

export default ExperiencePage; 