import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Asadur Zaman Nabin
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
              Full-Stack Developer | Cybersecurity Researcher | Entrepreneur
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Enthusiastic and detail-oriented Computer Science student with a strong foundation in Cyber Security and Blockchain Technology, actively seeking a Cyber Security internship to apply technical knowledge and problem-solving skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                to="/projects" 
                className="bg-transparent hover:bg-secondary text-white font-bold py-3 px-6 rounded-md border border-white transition duration-300"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl">
              <img 
                src="/profile-photo.jpg" 
                alt="Asadur Zaman Nabin" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 