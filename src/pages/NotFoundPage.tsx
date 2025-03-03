import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-4xl font-bold text-primary mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 