import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-dark-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Asadur Zaman Nabin</h3>
            <p className="text-gray-300 mb-4">Full-Stack Developer | Cybersecurity Researcher | Entrepreneur</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/Asadur-Zaman-Nabin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FAA500] transition-colors duration-300"
              >
                <IconWrapper icon={FaLinkedin} className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/nabin216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FAA500] transition-colors duration-300"
              >
                <IconWrapper icon={FaGithub} className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/Nabin_216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FAA500] transition-colors duration-300"
              >
                <IconWrapper icon={FaTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#FAA500] transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-[#FAA500] transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FAA500] transition-colors">Contact</Link>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FAA500] transition-colors">Resume</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <IconWrapper icon={FaEnvelope} className="h-5 w-5 text-[#FAA500]" />
                <a href="mailto:asadurzamannabin@gmail.com" className="text-gray-300 hover:text-[#FAA500] transition-colors">
                  asadurzamannabin@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <IconWrapper icon={FaPhone} className="h-5 w-5 text-[#FAA500]" />
                <a href="tel:+8801674662792" className="text-gray-300 hover:text-[#FAA500] transition-colors">
                  +91 8074662792
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <IconWrapper icon={FaMapMarkerAlt} className="h-5 w-5 text-[#FAA500]" />
                <span className="text-gray-300">Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Cybersecurity', 'ML/AI'].map((skill) => (
                <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Asadur Zaman Nabin. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 