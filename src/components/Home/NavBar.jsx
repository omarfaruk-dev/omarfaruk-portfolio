import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Skill", to: "skills" },
    { name: "Portfolio", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className=" fixed bg-base-200 py-3 top-0 left-0 z-99 w-full text-secondary shadow-md">
      <div className="navbar px-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="navbar-start flex items-center">
        <Logo />
        </div>

        {/* Desktop Menu + Resume Button (Right Aligned) */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
          <ul className="flex gap-10 items-center">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer text-secondary hover:text-primary transition-colors duration-200 tracking-wide text-base font-medium"
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-[#0F172A] transition-all font-semibold text-lg ml-4"
          >
            RESUME
          </a>
          <ThemeToggle/>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden ml-auto z-99 flex items-center justify-center">
          <ThemeToggle/>
          <button
            onClick={() => setSidebarOpen(true)}
            className="btn btn-ghost text-2xl text-primary"
          >
            <FaBars/>
          </button>
        </div>

        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg z-[100] transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 flex flex-col`}
          style={{ minWidth: "240px" }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-base-100">
            <Logo/>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-2xl text-primary"
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
                  duration={500}
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-[#0F172A] transition-all font-semibold text-center mt-4"
                onClick={() => setSidebarOpen(false)}
              >
                RESUME
              </a>
            </li>
          </ul>
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
