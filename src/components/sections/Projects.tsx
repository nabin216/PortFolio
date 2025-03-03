import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';
import ProjectImage1 from "../../assets/images/smart_india_project.png"
import ProjectImage2 from "../../assets/images/DIAGRAM - ENIGMA HUNTERS_page-0001.jpg"
import ProjectImage3 from "../../assets/images/snr_online.png"


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
    image: ProjectImage2,
    technologies: ["Python", "Cryptography", "Reverse Engineering", "Data Analysis"],
    githubLink: "https://github.com/nabin216/-Chat-messenger-decryption-tool/tree/main",
    category: "cybersecurity"
  },
  {
    id: 2,
    title: "Blockchain Certificate Validation System",
    description: "Developed an online blockchain-based certificate generation and validation system to enhance security and authenticity for government-issued certificates. Created for the Smart India Hackathon 2024.",
    image: ProjectImage1,
    technologies: ["Blockchain", "Solidity", "React", "Node.js", "Web3.js"],
    githubLink: "https://github.com/nabin216/Smart-India-Hackathon-Project-2023",
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
    liveLink: "https://zotpot.shop",
    category: "web"
  },
  {
    id: 5,
    title: "SSN Online Shop",
    description: "An e-commerce web application for Bangladesh with features for product browsing, cart management, and secure checkout.",
    image: ProjectImage3,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/nabin216/MERN-Stack-Ecommerce-web-app",
    liveLink: "https://www.snronline.shop/",
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
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Reset visible projects when filter changes
  React.useEffect(() => {
    setVisibleProjects(6);
  }, [filter]);

  return (
    <section className="py-20 bg-white dark:bg-dark-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="heading-xl text-primary dark:text-white mb-4 relative">
              Featured Projects
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
            Explore my portfolio of web development, cybersecurity, and blockchain projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-accent text-white dark:bg-dark-accent' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'web' 
                  ? 'bg-accent text-white dark:bg-dark-accent' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'cybersecurity' 
                  ? 'bg-accent text-white dark:bg-dark-accent' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'blockchain' 
                  ? 'bg-accent text-white dark:bg-dark-accent' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Blockchain
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-white dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="heading-small mb-2">{project.title}</h3>
                <p className="text-content mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md"
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
                      className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors"
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
                      className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors"
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

        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-[#FAA500] hover:bg-[#E69500] text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 