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
    period: "Jan 2023 - Present",
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
    title: "Networking Virtual Intern",
    company: "EduSkills Foundation",
    location: "Remote",
    period: "Dec 2022 - Feb 2023",
    description: [
      "Completed the Juniper Network Networking Virtual Internship, gaining hands-on experience in networking fundamentals.",
      "Enhanced knowledge of network protocols, routing, and security.",
      "Built practical expertise in virtual network environments and troubleshooting."
    ],
    icon: "code"
  },
  {
    id: 4,
    title: "Founder & CEO",
    company: "Nabcode IT Solutions",
    location: "Barhatta, Bangladesh",
    period: "Jan 2022 - Present",
    description: [
      "Founded and leading a web development agency specializing in MERN stack development, UI/UX design, e-commerce solutions, and digital marketing.",
      "Managing client relationships and project delivery for businesses across Bangladesh.",
      "Overseeing a team of developers and designers to deliver high-quality web solutions."
    ],
    icon: "briefcase"
  }
];

const Experience: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase':
        return <IconWrapper icon={FaBriefcase} className="h-6 w-6 text-accent" />;
      case 'code':
        return <IconWrapper icon={FaCode} className="h-6 w-6 text-accent" />;
      case 'shield':
        return <IconWrapper icon={FaShieldAlt} className="h-6 w-6 text-accent" />;
      case 'microphone':
        return <IconWrapper icon={FaMicrophone} className="h-6 w-6 text-accent" />;
      default:
        return <IconWrapper icon={FaBriefcase} className="h-6 w-6 text-accent" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through internships and professional roles in technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-accent items-center justify-center z-10">
                  {getIcon(exp.icon)}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:order-first'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex md:hidden items-center mb-4">
                      {getIcon(exp.icon)}
                      <h3 className="text-xl font-bold text-primary ml-3">{exp.title}</h3>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                    </div>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.location} | {exp.period}</p>
                    <ul className={`space-y-2 text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start md:items-center">
                          <span className="text-accent mr-2 md:hidden">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 