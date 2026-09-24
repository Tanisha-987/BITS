import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Mandatory Disclosures', path: '/mandatory-disclosures' },
    { name: 'SLC', path: '/slc' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/bitsbhiwani00',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bits.bhiwani?igsh=MWltcDk3MWRhNHRmag==',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.5 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@bitsinternationalschoolbhiwani',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-16 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-blue-300 to-primary-600" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-10 sm:pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-14 h-14 rounded-full bg-white p-1.5 shadow-lg group-hover:scale-105 transition-transform">
                <img src={logo} alt="BITS logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold leading-tight">BITS International</h3>
                <p className="text-primary-300 text-xs tracking-wide">School · CBSE</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Nurturing young minds with quality education, values, and opportunities to become
              responsible citizens and future leaders.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-400 rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-gray-400 leading-relaxed pt-1.5">
                  Opp. MRM Honda agency, adj. Sec 23 HUDA, Bhiwani
                </span>
              </li>
              <li>
                <a href="tel:+919812526326" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-300 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">+91 9812526326</span>
                </a>
              </li>
              <li>
                <a href="mailto:bisbhiwani@gmail.com" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-300 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors break-all">
                    bisbhiwani@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours / CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-400 rounded-full" />
              Office Hours
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <ul className="space-y-3 text-sm mb-5">
                <li className="flex justify-between gap-2">
                  <span className="text-gray-400">Mon – Fri</span>
                  <span className="text-white font-medium">8 AM – 4 PM</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-medium">8 AM – 1 PM</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-primary-300 font-medium">Closed</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-400 hover:to-primary-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-900/40"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} BITS International School. All rights reserved.
          </p>
          <p className="text-gray-500 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Designed & Developed by</span>
            <a
              href="https://www.linkedin.com/in/aryansaini870/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white font-semibold inline-flex items-center gap-1.5 transition-colors group"
            >
              Aryan
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <span>&</span>
            <a
              href="https://www.linkedin.com/in/tanisha-garg-70116b313/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white font-semibold inline-flex items-center gap-1.5 transition-colors group"
            >
              Tanisha
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
