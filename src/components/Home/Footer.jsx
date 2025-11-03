import { useEffect, useState } from 'react';
import { FaArrowUp, FaStar } from 'react-icons/fa';
import { CgGitFork } from "react-icons/cg";

const thanks = [
  { label: 'THANKS', key: 'english' },
  { label: 'شکریہ', key: 'urdu' },
  { label: 'ধন্যবাদ', key: 'bengali' },
];

const githubUrl = 'https://github.com/omarfaruk-dev';

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.round(scrollPercent));
    };

    window.addEventListener('scroll', handleScroll);
    // initialize
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-base-200 py-6 text-secondary border-t border-primary/20">
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
          {/* Scroll to Top Button */}
          {scrollProgress > 0 && (
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Scroll to top"
              className="fixed bottom-4 right-4 w-10 h-10 md:bottom-6 md:right-6 md:w-14 md:h-14 rounded-full flex items-center justify-center z-50 overflow-hidden transform transition-all duration-300 hover:scale-105"
              style={{
                // Progress track uses a conic gradient: primary color for completed portion
                background: `conic-gradient(#47d1d1 ${scrollProgress}%, rgba(15,23,42,0.12) ${scrollProgress}%)`,
                boxShadow: '0 10px 30px rgba(71,209,209,0.12)'
              }}
            >
              {/* Inner knob */}
              <div className="absolute inset-1 bg-base-100/95 rounded-full flex items-center justify-center border border-primary/20 shadow-sm">
                {scrollProgress === 100 ? (
                  <FaArrowUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                ) : (
                  <span className="text-primary text-xs md:text-sm font-semibold">{scrollProgress}%</span>
                )}
              </div>
              {/* subtle ring for focus */}
              <span className="sr-only">Scroll progress {scrollProgress} percent</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;