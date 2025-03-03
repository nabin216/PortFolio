import React from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const renderIcon = (Icon: any) => React.createElement(Icon, { size: 20 });

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon (Light Mode) */}
        <motion.div
          initial={false}
          animate={{
            rotate: darkMode ? 360 : 0,
            opacity: darkMode ? 0 : 1,
            scale: darkMode ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute text-[#FAA500] dark:text-yellow-400"
        >
          {renderIcon(BsSun)}
        </motion.div>

        {/* Moon Icon (Dark Mode) */}
        <motion.div
          initial={false}
          animate={{
            rotate: darkMode ? 0 : -360,
            opacity: darkMode ? 1 : 0,
            scale: darkMode ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className="absolute text-[#FAA500] dark:text-yellow-400"
        >
          {renderIcon(BsMoonStars)}
        </motion.div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAA500] to-yellow-400 
                      opacity-0 hover:opacity-10 dark:hover:opacity-20 
                      rounded-full transition-opacity duration-200"></div>
    </motion.button>
  );
};

export default DarkModeToggle;
