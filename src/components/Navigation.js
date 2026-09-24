import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Mandatory Disclosures', path: '/mandatory-disclosures' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'SLC', path: '/slc' },
  ];

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4 gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0" onClick={closeMenu}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={logo} alt="BITS logo" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-primary-800 leading-tight truncate">
                BITS International School
              </h1>
              <p className="text-[11px] sm:text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden flex-shrink-0 w-10 h-10 rounded-xl border border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-200 focus:outline-none flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-primary-400 to-primary-900 text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {createPortal(
        <>
          <div
            className={`lg:hidden fixed inset-0 z-[80] bg-slate-900/40 backdrop-blur-md transition-opacity duration-300 ${
              isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMenu}
            aria-hidden={!isOpen}
          />
          <aside
            className="lg:hidden fixed top-0 right-0 z-[90] h-full w-[min(86vw,340px)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out"
            style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
            aria-hidden={!isOpen}
          >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <p className="text-sm font-bold text-primary-800">BITS International</p>
            <p className="text-xs text-gray-500">School menu</p>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:text-primary-700 flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium mb-1.5 transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-primary-500 to-primary-800 text-white shadow-md'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              {item.name}
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="px-5 py-4 border-t border-gray-100 text-sm">
          <a href="tel:+919812526326" className="block text-primary-700 font-semibold">
            +91 9812526326
          </a>
          <a href="mailto:bisbhiwani@gmail.com" className="block text-gray-500 mt-1 break-all">
            bisbhiwani@gmail.com
          </a>
        </div>
          </aside>
        </>,
        document.body
      )}
    </nav>
  );
};

export default Navigation;
