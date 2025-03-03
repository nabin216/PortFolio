import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconWrapper } from '../../utils/IconWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, you would send the form data to a backend API
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <IconWrapper icon={FaEnvelope} className="h-6 w-6 text-accent mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Email</h4>
                  <a href="mailto:asadurzamannabin@gmail.com" className="text-gray-600 hover:text-accent">
                    asadurzamannabin@gmail.com
                  </a>
                  <p className="text-gray-600">
                    asadurzaman.netlify.app
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <IconWrapper icon={FaPhone} className="h-6 w-6 text-accent mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Phone</h4>
                  <a href="tel:+918074662792" className="text-gray-600 hover:text-accent">
                    +91 8074662792
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <IconWrapper icon={FaMapMarkerAlt} className="h-6 w-6 text-accent mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Location</h4>
                  <p className="text-gray-600">
                    Barhatta, Netrakona - 2440, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-primary mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/Asadur-Zaman-Nabin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-accent transition-colors"
                >
                  <IconWrapper icon={FaLinkedin} className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/nabin216" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-accent transition-colors"
                >
                  <IconWrapper icon={FaGithub} className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com/Nabin_216" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-accent transition-colors"
                >
                  <IconWrapper icon={FaTwitter} className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p>{submitError}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 