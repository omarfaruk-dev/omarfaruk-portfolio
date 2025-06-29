import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-sm" />,
      text: "omarfaruk.dev@gmail.com"
    },
    {
      icon: <FaPhone className="text-sm" />,
      text: "+8801739460198"
    },
    {
      icon: <FaMapMarkerAlt className="text-sm" />,
      text: "Bogura, Bangladesh"
    }
  ];

  return (
    <footer className="bg-base-200 py-6 text-secondary border-t border-primary/20">
      <div className="max-w-7xl px-4 mx-auto">
        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-secondary/70">
              <span className="font-semibold">Contact:</span>
            </div>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-secondary/70">
                <span className="text-primary">{info.icon}</span>
                <span>{info.text}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-4 text-sm text-secondary/70">
            <span className="font-semibold">Tech Stack:</span>
            <span>React • Tailwind CSS • JavaScript • Node.js</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-secondary">Go to Top</span>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="group flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg border border-primary/20 text-primary hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp className="group-hover:scale-110 transition-transform duration-300 text-sm" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 my-4"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/70">
          <p>
            © {currentYear} Omar Faruk. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;