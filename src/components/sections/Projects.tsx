import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  category: 'web' | 'cybersecurity' | 'blockchain';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chat Messenger Decryption Tool",
    description: "A recovery and decryption tool for WeChat, which employs numerous layers of security for both local device storage and data transport. Created as part of the national hackathon for Kavach-2023.",
    image: "/projects/chat-decryption.jpg",
    technologies: ["Python", "Cryptography", "Reverse Engineering", "Data Analysis"],
    githubLink: "https://github.com/nabin216/chat-decryption",
    category: "cybersecurity"
  },
  {
    id: 2,
    title: "Blockchain Certificate Validation System",
    description: "Developed an online blockchain-based certificate generation and validation system to enhance security and authenticity for government-issued certificates. Created for the Smart India Hackathon 2024.",
    image: "/projects/blockchain-certificate.jpg",
    technologies: ["Blockchain", "Solidity", "React", "Node.js", "Web3.js"],
    githubLink: "https://github.com/nabin216/blockchain-certificates",
    liveLink: "https://blockchain-certificates.vercel.app",
    category: "blockchain"
  },
  {
    id: 3,
    title: "Nabcode IT Solutions",
    description: "A web development agency offering services in MERN stack development, UI/UX design, e-commerce solutions, digital marketing, and DevOps.",
    image: "/projects/nabcode.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "https://nabcode.tech",
    category: "web"
  },
  {
    id: 4,
    title: "Zotpot - Instant Grocery Delivery App",
    description: "An instant grocery delivery application with features for ordering, tracking, and payment processing.",
    image: "/projects/zotpot.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    liveLink: "https://zotpot.com",
    category: "web"
  },
  {
    id: 5,
    title: "SSN Online Shop",
    description: "An e-commerce web application for Bangladesh with features for product browsing, cart management, and secure checkout.",
    image: "/projects/ssn-shop.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/nabin216/ssn-shop",
    liveLink: "https://ssn-shop.vercel.app",
    category: "web"
  },
  {
    id: 6,
    title: "Real-time Threat Detection System",
    description: "Developed a real-time threat detection system that reduced response time by 30%. Analyzed network traffic to identify attack patterns and recommend preventive actions.",
    image: "/projects/threat-detection.jpg",
    technologies: ["Python", "Machine Learning", "Network Security", "Data Analysis"],
    category: "cybersecurity"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent work in web development, cybersecurity, and blockchain technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'web' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'cybersecurity' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'blockchain' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Blockchain
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-accent transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <IconWrapper icon={FaGithub} className="h-6 w-6" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-accent transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <IconWrapper icon={FaExternalLinkAlt} className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 