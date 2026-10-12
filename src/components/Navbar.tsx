import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiFolder,
  FiFileText,
  FiBookOpen,
  FiMail,
  FiDownload
} from 'react-icons/fi';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Projects', path: '/projects', icon: FiFolder },
    { name: 'Resume', path: '/resume', icon: FiFileText },
    { name: 'Blog', path: '/blog', icon: FiBookOpen },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-outline shadow-goog-1 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Google Dots */}
            <NavLink to="/" className="flex items-center gap-2.5 sm:gap-3 py-1" onClick={() => setIsOpen(false)}>
              <div className="google-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="font-semibold text-lg sm:text-xl text-text-primary tracking-tight">
                KS Vinayaka
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link text-sm tracking-wide transition-all duration-200 py-1
                    ${isActive ? 'text-g-blue active font-semibold' : 'text-text-secondary hover:text-g-blue'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={resumePdf}
                download="KS_Vinayaka_Resume.pdf"
                className="btn-blue text-xs py-2 px-3.5 flex items-center gap-1.5 font-semibold shadow-goog-1 hover:shadow-goog-2"
                title="Download CV"
              >
                <FiDownload size={14} /> CV
              </a>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary p-2.5 hover:bg-surface-hover rounded-goog transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} className="text-g-red" /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN DRAWER & BACKDROP */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down Drawer Panel */}
          <div className="fixed top-[57px] left-0 right-0 max-h-[calc(100dvh-57px)] overflow-y-auto bg-white border-b border-outline shadow-goog-4 p-5 animate-slideDown">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3.5 text-base py-3 px-4 rounded-xl transition-all duration-150 font-medium min-h-[48px]
                      ${
                        isActive
                          ? 'text-g-blue bg-blue-50 font-bold border border-blue-200/60 shadow-sm'
                          : 'text-text-primary hover:text-g-blue hover:bg-surface-hover'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={20} className="text-text-secondary flex-shrink-0" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Quick Action */}
            <div className="mt-5 pt-4 border-t border-outline flex flex-col gap-2.5">
              <a
                href={resumePdf}
                download="KS_Vinayaka_Resume.pdf"
                className="btn-blue w-full py-3 px-4 flex items-center justify-center gap-2 font-semibold text-sm rounded-xl shadow-goog-1"
                onClick={() => setIsOpen(false)}
              >
                <FiDownload size={18} />
                <span>Download PDF Resume (18 KB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
