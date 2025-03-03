import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaFlask, FaAward } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-light-background to-gray-100 dark:from-dark-background dark:to-gray-900 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-light-background to-transparent dark:from-dark-background opacity-80 -top-32 z-10"></div>
      <div className="absolute left-1/4 top-10 w-72 h-72 bg-gradient-start rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute right-1/4 bottom-10 w-72 h-72 bg-gradient-end rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-primary dark:to-dark-accent text-transparent bg-clip-text">About Me</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-gradient-start to-gradient-end absolute bottom-0 left-0"
              ></motion.div>
            </h2>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            A passionate Computer Science student with expertise in Cybersecurity, Blockchain, and Full-Stack Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Card background with hover effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white mr-4">
                  <IconWrapper icon={FaGraduationCap} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">Education</h3>
              </div>
              <ul className="space-y-6">
                <li className="transform transition-transform duration-300 hover:translate-x-2">
                  <div className="border-l-4 border-gradient-start pl-4">
                    <p className="font-semibold text-lg text-primary dark:text-white">B.Tech in Computer Science & Engineering</p>
                    <p className="text-gray-600 dark:text-gray-300">Koneru Lakshmaiah Education Foundation University</p>
                    <p className="text-gradient-start dark:text-gradient-end font-medium">2021-2025 | CGPA: 8.94/10</p>
                  </div>
                </li>
                <li className="transform transition-transform duration-300 hover:translate-x-2">
                  <div className="border-l-4 border-gradient-mid pl-4">
                    <p className="font-semibold text-lg text-primary dark:text-white">Higher Secondary School Certificate</p>
                    <p className="text-gray-600 dark:text-gray-300">Notre Dame College Mymensingh</p>
                    <p className="text-gradient-mid dark:text-gradient-mid font-medium">2020 | GPA: 5.0/5.0</p>
                  </div>
                </li>
                <li className="transform transition-transform duration-300 hover:translate-x-2">
                  <div className="border-l-4 border-gradient-end pl-4">
                    <p className="font-semibold text-lg text-primary dark:text-white">Secondary School Certificate</p>
                    <p className="text-gray-600 dark:text-gray-300">Barhatta C&P Govt. Pilot High School</p>
                    <p className="text-gradient-end dark:text-gradient-end font-medium">2018 | GPA: 5.0/5.0</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Card background with hover effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-end to-gradient-start rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-gradient-end to-gradient-start text-white mr-4">
                  <IconWrapper icon={FaLaptopCode} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">Technical Skills</h3>
              </div>
              
              {/* Skills with progress bars */}
              <div className="space-y-5">
                <SkillBar skill="Cybersecurity" percentage={90} color="from-gradient-start to-gradient-mid" />
                <SkillBar skill="Blockchain Development" percentage={85} color="from-gradient-mid to-gradient-end" />
                <SkillBar skill="Full-Stack Development" percentage={95} color="from-gradient-end to-gradient-start" />
                <SkillBar skill="Machine Learning" percentage={80} color="from-gradient-start to-gradient-end" />
                <SkillBar skill="Cloud Computing" percentage={75} color="from-gradient-mid to-gradient-start" />
              </div>
            </div>
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

// Skill bar component
const SkillBar: React.FC<{ skill: string; percentage: number; color: string }> = ({ skill, percentage, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="font-medium text-gradient-start dark:text-gradient-end">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default About; 