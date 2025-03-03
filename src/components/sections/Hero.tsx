import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from "../../assets/images/nabin.jpg"
import resumePdf from "../../assets/images/Nabin_s_Academic_CV.pdf"

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with solid color */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark-background"></div>
      
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-primary dark:bg-accent absolute -top-4 left-0"
              ></motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-primary dark:text-white">
                Asadur Zaman Nabin
              </h1>
            </div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl text-secondary dark:text-gray-200 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Cybersecurity Enthusiastic | ML Engineer | Software Engineer | Researcher
            </motion.h2>

            <motion.p
              className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              Specializing in machine learning, cybersecurity, and software development. 
              Creating innovative solutions to complex problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-[#FAA500] hover:bg-[#E69500] text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Resume
                </button>
              </a>
              <Link to="/projects">
                <button className="px-8 py-3 bg-white dark:bg-dark-secondary text-primary dark:text-white border-2 border-primary dark:border-dark-accent font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary dark:bg-dark-primary rounded-full opacity-10 blur-md transform -rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-secondary dark:bg-dark-secondary rounded-full opacity-10 blur-md transform rotate-12 scale-105"></div>
              <div className="absolute inset-0 rounded-full p-2 bg-white dark:bg-gray-800 shadow-xl">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700">
                  <img 
                    src={Image} 
                    alt="Asadur Zaman Nabin" 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400?text=Asadur+Zaman+Nabin';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-primary dark:text-white text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary dark:border-white rounded-full flex justify-center bg-white/50 dark:bg-black/30">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary dark:bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 