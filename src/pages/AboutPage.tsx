import React from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';

const AboutPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about my background, skills, and journey in technology.
            </p>
          </motion.div>
        </div>
      </div>
      
      <About />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The path that led me to where I am today.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700 mb-4">
              My journey in technology began with a fascination for computers and how they work. Growing up in Barhatta, Bangladesh, I was always curious about the digital world and how it could be used to solve real-world problems.
            </p>
            <p className="text-gray-700 mb-4">
              After excelling in my secondary education, I was fortunate to receive a fully funded scholarship through the Study in India program, which allowed me to pursue my B.Tech in Computer Science & Engineering at Koneru Lakshmaiah Education Foundation University.
            </p>
            <p className="text-gray-700 mb-4">
              During my academic journey, I discovered my passion for cybersecurity and blockchain technology. I realized the immense potential these fields have in creating secure and transparent systems that can benefit society.
            </p>
            <p className="text-gray-700 mb-4">
              Alongside my studies, I founded Nabcode IT Solutions to provide web development services to businesses in Bangladesh. This entrepreneurial venture has allowed me to apply my technical skills in real-world scenarios while developing my business acumen.
            </p>
            <p className="text-gray-700">
              Today, I continue to expand my knowledge through internships, research, and personal projects. My goal is to contribute to the field of cybersecurity and blockchain technology, creating innovative solutions that make the digital world safer and more accessible for everyone.
            </p>
          </motion.div>
        </div>
      </div>
      
      <AIChatbot />
    </Layout>
  );
};

export default AboutPage; 