import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b-2 border-transparent"
      style={{ borderImage: 'linear-gradient(90deg, #0078D4, #7FBA00, #FFB900, #F25022) 1' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="font-bold text-2xl uppercase tracking-wider"
          >
            <span className="bg-gradient-to-r from-ms-blue via-ms-green via-ms-yellow to-ms-red bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              KS Vinayaka
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link uppercase text-sm tracking-widest font-medium transition-all duration-300
                  ${isActive ? 'text-ms-blue active' : 'text-text-secondary hover:text-ms-blue'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2 hover:bg-ms-blue/10 rounded-lg transition-colors duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-rainbow rounded-xl p-4 animate-fadeIn shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) => {
                const colors = ['ms-blue', 'ms-green', 'ms-yellow', 'ms-red', 'ms-blue'];
                const color = colors[index % colors.length];
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `uppercase text-sm tracking-widest py-2 px-6 rounded-lg transition-all duration-300 font-medium
                      ${isActive
                        ? `text-${color} bg-${color}/10 border-2 border-${color}/50`
                        : 'text-text-secondary hover:text-ms-blue hover:bg-ms-blue/5'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
