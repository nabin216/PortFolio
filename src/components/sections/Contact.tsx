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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-background via-white to-gray-100 dark:from-dark-background dark:via-gray-900 dark:to-black opacity-80"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-start rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-end rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
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
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-primary dark:to-dark-accent text-transparent bg-clip-text">Get In Touch</span>
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
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl opacity-50 blur-md"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                  <p className="text-green-700 dark:text-green-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group relative z-0">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-0 py-3 text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gradient-start dark:focus:border-gradient-end peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gradient-start dark:peer-focus:text-gradient-end peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="group relative z-0">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-0 py-3 text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gradient-mid dark:focus:border-gradient-mid peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gradient-mid dark:peer-focus:text-gradient-mid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Email
                    </label>
                  </div>
                  
                  <div className="group relative z-0">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full px-0 py-3 text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gradient-end dark:focus:border-gradient-start peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="subject"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gradient-end dark:peer-focus:text-gradient-start peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Subject
                    </label>
                  </div>
                  
                  <div className="group relative z-0">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-0 py-3 text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gradient-start dark:focus:border-gradient-end peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gradient-start dark:peer-focus:text-gradient-end peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Message
                    </label>
                  </div>
                  
                  {submitError && (
                    <div className="text-red-500 dark:text-red-400 text-sm mt-2">
                      {submitError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden group w-full py-3 px-6 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-end hover:to-gradient-start text-white font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gradient-end to-gradient-start rounded-2xl opacity-50 blur-md"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-gradient-to-r from-gradient-start to-gradient-mid text-white">
                        <IconWrapper icon={FaEnvelope} className="text-xl" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-primary dark:text-white">Email</h4>
                      <a href="mailto:asadurzamannabin@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gradient-start dark:hover:text-gradient-end transition-colors duration-300">asadurzamannabin@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-gradient-to-r from-gradient-mid to-gradient-end text-white">
                        <IconWrapper icon={FaPhone} className="text-xl" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-primary dark:text-white">Phone</h4>
                      <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-300 hover:text-gradient-mid dark:hover:text-gradient-mid transition-colors duration-300">+91 98765 43210</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-gradient-to-r from-gradient-end to-gradient-start text-white">
                        <IconWrapper icon={FaMapMarkerAlt} className="text-xl" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-primary dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl opacity-50 blur-md"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/asadurzamannabin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-gradient-start group-hover:to-gradient-mid text-gray-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      <IconWrapper icon={FaLinkedin} className="text-2xl" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/nabin216" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-gradient-mid group-hover:to-gradient-end text-gray-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      <IconWrapper icon={FaGithub} className="text-2xl" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://twitter.com/asadurzamannabin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-gradient-end group-hover:to-gradient-start text-gray-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      <IconWrapper icon={FaTwitter} className="text-2xl" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 