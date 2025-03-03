import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaShieldAlt, FaMicrophone } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: 'briefcase' | 'code' | 'shield' | 'microphone';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Speech & Audio Processing Intern",
    company: "Speech Research Center-KL University",
    location: "Guntur, India",
    period: "Jan 2024 - Present",
    description: [
      "Gaining hands-on experience in Speech & Audio Processing, working with signal processing techniques and machine learning models for audio analysis.",
      "Developing Speaker Verification for Multisensor, Multichannel, Fake Speech detection systems.",
      "Collaborating with research teams on innovative audio processing solutions."
    ],
    icon: "microphone"
  },
  {
    id: 2,
    title: "Cybersecurity Virtual Intern",
    company: "EduSkills Foundation",
    location: "Remote",
    period: "Apr 2023 - Jun 2023",
    description: [
      "Developed a real-time threat detection system, reducing response time by 30%.",
      "Analyzed network traffic to identify attack patterns and recommend preventive actions.",
      "Presented findings at the Palo Alto Cybersecurity Summit, earning recognition for contributions to threat intelligence."
    ],
    icon: "shield"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "NabCode IT Solutions",
    location: "Guntur, India",
    period: "May 2022 - Dec 2022",
    description: [
      "Led a team of 5 developers to create custom web applications for clients, meeting all deadlines and requirements.",
      "Implemented responsive designs using React and Material UI, improving user experience and engagement by 25%.",
      "Optimized backend API performance, reducing load times by 40% through efficient database queries and caching strategies."
    ],
    icon: "code"
  }
];

const Experience: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase': return FaBriefcase;
      case 'code': return FaCode;
      case 'shield': return FaShieldAlt;
      case 'microphone': return FaMicrophone;
      default: return FaBriefcase;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-background transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-gradient-start rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute right-1/3 bottom-1/3 w-72 h-72 bg-gradient-end rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="heading-xl mb-4 relative">
              Work Experience
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-primary dark:bg-accent absolute bottom-0 left-0"
              ></motion.div>
            </h2>
          </div>
          <p className="text-content text-xl max-w-3xl mx-auto">
            My professional journey in technology and development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-dark-primary rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center justify-center w-16 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary dark:bg-accent rounded-lg flex items-center justify-center shadow-lg">
                    <IconWrapper icon={getIcon(experience.icon)} className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-white">{experience.title}</h3>
                      <p className="text-accent dark:text-dark-accent font-medium">{experience.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{experience.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex">
                        <span className="mr-2 text-accent dark:text-dark-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 