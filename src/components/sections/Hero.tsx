import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent opacity-10 dark:opacity-20"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-start rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-mid rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-end rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
                className="h-1 bg-gradient-to-r from-gradient-start to-gradient-end absolute -top-4 left-0"
              ></motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-transparent bg-clip-text">
                Asadur Zaman Nabin
              </h1>
            </div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl text-primary dark:text-gray-300 mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-Stack Developer | Cybersecurity Researcher | Entrepreneur
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Enthusiastic and detail-oriented Computer Science student with a strong foundation in Cyber Security and Blockchain Technology, actively seeking a Cyber Security internship to apply technical knowledge and problem-solving skills.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link 
                to="/contact" 
                className="relative overflow-hidden group bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-end hover:to-gradient-start text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              
              <Link 
                to="/projects" 
                className="relative overflow-hidden group bg-transparent text-primary dark:text-white font-bold py-3 px-8 rounded-full border-2 border-gradient-start dark:border-dark-accent hover:border-gradient-end dark:hover:border-dark-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gradient-mid to-gradient-end rounded-full opacity-50 blur-sm animate-pulse-slow"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Asadur Zaman Nabin" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/400x400.png?text=Asadur+Zaman+Nabin";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-primary dark:border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary dark:bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 