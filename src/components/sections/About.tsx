import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaFlask, FaAward } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Computer Science student with expertise in Cybersecurity, Blockchain, and Full-Stack Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaGraduationCap} className="text-accent text-3xl mr-4" />
              <h3 className="text-xl font-bold text-primary">Education</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-600">Koneru Lakshmaiah Education Foundation University</p>
                <p className="text-gray-500">2021-2025 | CGPA: 8.94/10</p>
              </li>
              <li>
                <p className="font-semibold">Higher Secondary School Certificate</p>
                <p className="text-gray-600">Notre Dame College Mymensingh</p>
                <p className="text-gray-500">2020 | GPA: 5.0/5.0</p>
              </li>
              <li>
                <p className="font-semibold">Secondary School Certificate</p>
                <p className="text-gray-600">Barhatta C&P Govt. Pilot High School</p>
                <p className="text-gray-500">2018 | GPA: 5.0/5.0</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaLaptopCode} className="text-accent text-3xl mr-4" />
              <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-40 font-medium">Programming:</span>
                <span className="text-gray-600">C, Java, Python, JS</span>
              </li>
              <li className="flex items-center">
                <span className="w-40 font-medium">Web Technologies:</span>
                <span className="text-gray-600">MERN Stack, Django</span>
              </li>
              <li className="flex items-center">
                <span className="w-40 font-medium">Database Systems:</span>
                <span className="text-gray-600">MySQL, MongoDB</span>
              </li>
              <li className="flex items-center">
                <span className="w-40 font-medium">Cloud Technologies:</span>
                <span className="text-gray-600">AWS Solution Architect</span>
              </li>
              <li className="flex items-center">
                <span className="w-40 font-medium">DevOps:</span>
                <span className="text-gray-600">Git, CI/CD, Docker</span>
              </li>
              <li className="flex items-center">
                <span className="w-40 font-medium">Specialized Areas:</span>
                <span className="text-gray-600">Cybersecurity, Blockchain</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaFlask} className="text-accent text-3xl mr-4" />
              <h3 className="text-xl font-bold text-primary">Research Interests</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Cybersecurity threat detection and mitigation strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Blockchain technology for secure certificate validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Machine learning applications in network security</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Secure software development practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>LLM applications in cybersecurity</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <IconWrapper icon={FaAward} className="text-accent text-3xl mr-4" />
              <h3 className="text-xl font-bold text-primary">Achievements</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">2nd Position in Kavach National Hackathon</p>
                <p className="text-gray-600">Ministry of Home Affairs, India (Nov 2023)</p>
              </li>
              <li>
                <p className="font-semibold">Study in India Scholarship</p>
                <p className="text-gray-600">Fully funded scholarship for academic excellence (2021-2025)</p>
              </li>
              <li>
                <p className="font-semibold">Technical Coordinator</p>
                <p className="text-gray-600">Winter School on Speech and Audio Processing (Nov 2024)</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 