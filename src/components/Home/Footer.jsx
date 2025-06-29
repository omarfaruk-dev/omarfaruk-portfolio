import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp, FaStar } from 'react-icons/fa';
import { CgGitFork } from "react-icons/cg";

const thanks = [
  { label: 'THANKS', key: 'english' },
  { label: 'شکریہ', key: 'urdu' },
  { label: 'ধন্যবাদ', key: 'bengali' },
];

const githubUrl = 'https://github.com/omarfaruk-dev';

const Footer = () => {
  return (
    <footer className="bg-base-200/50 py-6 text-secondary border-t border-anbr">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-y-4 md:gap-y-0">
        {/* Thanks Buttons */}
        <div className="flex gap-2 mb-2 md:mb-0">
          {thanks.map((item) => (
            <div key={item.key} className="flex flex-col items-center">
              <span className="bg-[#232e3e] px-4 py-1 rounded-md text-secondary font-semibold tracking-wide text-sm">
                {item.label}
              </span>
              <span className="w-full h-1 bg-anbr rounded-b mt-1" style={{width: '80%'}}></span>
            </div>
          ))}
        </div>
        {/* Right Side: Star, Fork, By Me, Go to Top */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs md:text-sm text-secondary">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-anbr transition-colors flex items-center gap-1 link-primary">
              <FaStar className="text-anbr" /> STAR
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline hover:text-anbr transition-colors flex items-center gap-1 link-primary">
              <CgGitFork  className="text-anbr text-base" /> FORK
            </a>
            <span className="font-bold ml-2">BY OMAR FARUK</span>
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-2 flex items-center justify-center w-8 h-8 bg-primary rounded-md shadow-md text-base-100 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;