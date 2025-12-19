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
    <nav className="sticky top-0 z-50 bg-white border-b border-outline shadow-goog-1">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Google Dots */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="google-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="font-semibold text-xl text-text-primary">
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
                  `nav-link text-sm tracking-wide transition-all duration-200
                  ${isActive ? 'text-g-blue active' : 'text-text-secondary hover:text-g-blue'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2 hover:bg-surface-hover rounded-goog transition-colors duration-200"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-goog-lg border border-outline p-4 animate-fadeIn shadow-goog-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm py-3 px-4 rounded-goog transition-all duration-200 font-medium
                    ${isActive
                      ? 'text-g-blue bg-g-blue/10'
                      : 'text-text-secondary hover:text-g-blue hover:bg-surface-hover'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
