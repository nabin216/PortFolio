import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Asadur Zaman Nabin</h3>
            <p className="text-gray-300 mt-2">Full-Stack Developer | Cybersecurity Researcher | Entrepreneur</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/Asadur-Zaman-Nabin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <IconWrapper icon={FaLinkedin} className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/nabin216" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <IconWrapper icon={FaGithub} className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/Nabin_216" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <IconWrapper icon={FaTwitter} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Asadur Zaman Nabin. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                <a href="mailto:asadurzamannabin@gmail.com" className="hover:text-white">
                  asadurzamannabin@gmail.com
                </a>
                {' | '}
                <a href="tel:+8801674662792" className="hover:text-white">
                  +91 8074662792
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 