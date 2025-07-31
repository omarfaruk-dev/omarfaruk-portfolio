import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Skill", to: "skills" },
    { name: "Portfolio", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed py-3 top-0 left-0 z-99 w-full text-secondary transition-all duration-300 ${
      isScrolled ? 'bg-base-200 shadow-md' : 'bg-base-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar flex items-center justify-between">
          {/* Logo */}
          <div className="navbar-start flex items-center">
            <div
              onClick={scrollToTop}
              className="cursor-pointer transition-all duration-200"
            >
              <Logo />
            </div>
          </div>

          {/* Desktop Menu + Resume Button (Right Aligned) */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <ul className="flex gap-10 items-center">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={1500}
                    spy={true}
                    offset={-80}
                    className="cursor-pointer text-secondary hover:text-primary transition-all duration-300 tracking-wide text-base"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base-100 hover:bg-primary hover:shadow-md hover:shadow-primary/20 transition-all font-semibold transform hover:-translate-y-1 text-lg ml-4"
            >
              RESUME
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden ml-auto z-99 flex items-center justify-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-2xl text-primary hover:shadow-md hover:shadow-primary/20 transition-all"
            >
              <FaBars/>
            </button>
          </div>

          {/* Sidebar Drawer */}
          <div
            className={`fixed top-0 left-0 h-screen w-64 bg-base-100 shadow-lg z-[100] transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 flex flex-col`}
            style={{ minWidth: "240px" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-base-100">
              <div
                onClick={() => {
                  scrollToTop();
                  setSidebarOpen(false);
                }}
                className="cursor-pointer transition-all duration-200"
              >
                <Logo/>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-2xl text-primary hover:shadow-md hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-8 py-8">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={1500}
                    spy={true}
                    offset={-80}
                    className="cursor-pointer text-secondary hover:text-primary text-lg font-medium"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all font-semibold text-center mt-4"
                  onClick={() => setSidebarOpen(false)}
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[99]"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavBar;

