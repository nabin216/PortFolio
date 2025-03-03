import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from '../ui/DarkModeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary dark:bg-dark-primary shadow-md fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                Asadur Zaman Nabin
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" label="Home" />
                <NavLink to="/about" label="About" />
                <NavLink to="/projects" label="Projects" />
                <NavLink to="/research" label="Research" />
                <NavLink to="/experience" label="Experience" />
                <NavLink to="/contact" label="Contact" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <DarkModeToggle />
            <div className="-mr-2 flex md:hidden ml-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-secondary dark:hover:bg-dark-secondary focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary dark:bg-dark-primary">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/projects" label="Projects" />
              <MobileNavLink to="/research" label="Research" />
              <MobileNavLink to="/experience" label="Experience" />
              <MobileNavLink to="/contact" label="Contact" />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

// Extracted NavLink component for better maintainability
const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
      dark:text-gray-50 dark:hover:bg-dark-secondary dark:hover:text-white"
  >
    {label}
  </Link>
);

// Extracted MobileNavLink component for better maintainability
const MobileNavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-secondary hover:text-white
      dark:text-gray-50 dark:hover:bg-dark-secondary dark:hover:text-white transition-colors duration-200"
  >
    {label}
  </Link>
);

export default Navbar; 