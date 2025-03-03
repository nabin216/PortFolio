import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hi there! I'm Asadur's AI assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): string => {
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes('hello') || userInputLower.includes('hi')) {
      return "Hello! I'm Asadur's AI assistant. How can I help you learn more about his work and experience?";
    }
    
    if (userInputLower.includes('experience') || userInputLower.includes('work')) {
      return "Asadur has experience in full-stack development, cybersecurity, and blockchain technology. He's worked as a Speech & Audio Processing Intern at KL University and completed cybersecurity internships with EduSkills Foundation. He's also the founder of Nabcode IT Solutions.";
    }
    
    if (userInputLower.includes('project') || userInputLower.includes('portfolio')) {
      return "Asadur has worked on several notable projects including a Chat Messenger Decryption Tool, Blockchain Certificate Validation System, and various web applications like Nabcode IT Solutions, Zotpot, and SSN Online Shop.";
    }
    
    if (userInputLower.includes('education') || userInputLower.includes('study')) {
      return "Asadur is pursuing a B.Tech in Computer Science & Engineering at Koneru Lakshmaiah Education Foundation University (2021-2025) with a CGPA of 8.94/10. He's studying on a fully funded scholarship from the Study in India program.";
    }
    
    if (userInputLower.includes('skill') || userInputLower.includes('technology')) {
      return "Asadur is skilled in programming languages like C, Java, Python, and JavaScript. He's proficient in web technologies (MERN Stack, Django), database systems (MySQL, MongoDB), cloud technologies (AWS), and specialized in cybersecurity and blockchain.";
    }
    
    if (userInputLower.includes('contact') || userInputLower.includes('reach')) {
      return "You can contact Asadur via email at asadurzamannabin@gmail.com or by phone at +91 8074662792. You can also connect with him on LinkedIn, GitHub, or Twitter.";
    }
    
    if (userInputLower.includes('research') || userInputLower.includes('publication')) {
      return "Asadur has published research papers including 'Strategic Contextualization for Improved Security in LLM-Driven Code Generation' and 'Navigating the Cloud: A Review of Emerging Trends in Security'. He's also working on a paper about LLMs in cybersecurity.";
    }
    
    return "I'm not sure I understand. Could you please ask about Asadur's experience, projects, education, skills, research, or how to contact him?";
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
      >
        <IconWrapper icon={FaRobot} className="h-6 w-6" />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <IconWrapper icon={FaRobot} className="h-6 w-6 mr-2" />
                <h3 className="font-bold">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                <IconWrapper icon={FaTimes} className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3/4 rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white text-gray-800 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center">
                      <IconWrapper icon={FaSpinner} className="animate-spin h-4 w-4 mr-2" />
                      <p>AI is typing...</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Asadur..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="p-2 rounded-full bg-accent text-white hover:bg-blue-700 transition-colors"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <IconWrapper icon={FaPaperPlane} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot; 