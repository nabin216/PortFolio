import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaTrophy } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

const ResearchHighlights: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaFlask} className="text-primary h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold text-primary dark:text-white">Research Interests</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">
                  Cybersecurity threat detection and mitigation strategies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">
                  Blockchain technology for secure certificate validation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">
                  Machine learning applications in network security
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">
                  Secure software development practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">
                  LLM applications in cybersecurity
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaTrophy} className="text-accent h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold text-primary dark:text-white">Achievements</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">
                  2nd Position in Kavach National Hackathon
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ministry of Home Affairs, India (Nov 2023)
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">
                  Study in India Scholarship
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Fully funded scholarship for academic excellence (2021-2025)
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">
                  Technical Coordinator
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Winter School on Speech and Audio Processing (Nov 2024)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights; 