import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaHome, FaGithub, FaLinkedin, FaArrowLeft, FaCode, FaBug } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const ErrorPage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const errorMessages = [
        "Oops! Looks like this page got lost in the code.",
        "404: Page not found in this route.",
        "This route doesn't exist in our component tree.",
        "Error 404: Undefined route detected.",
        "Page not found - must be a deployment issue!",
        "404: This endpoint returned null."
    ];

    const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                         <div className="absolute top-20 left-10 text-primary/10 text-7xl" style={{ animation: 'spin 8s linear infinite' }}>
                        <FaCode />
                    </div>
                    <div className="absolute top-40 right-20 text-primary/10 text-6xl animate-pulse">
                        <FaBug />
                    </div>
                    <div className="absolute bottom-20 left-20 text-primary/10 text-7xl animate-spin-slow">
                        <FaReact />
                    </div>
                    <div className="absolute bottom-40 right-10 text-primary/10 text-5xl animate-bounce">
                        <BiLogoTypescript />
                    </div>
                    <div className="absolute top-1/2 left-1/4 text-primary/10 text-6xl animate-pulse">
                        <SiTailwindcss />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    {/* 404 Number */}
                    <div className="mb-8 relative">
                        <h1 className="text-9xl md:text-[12rem] font-black text-primary/20 select-none">
                            404
                        </h1>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h2 className="text-4xl md:text-6xl font-bold wireframe-text space-grotesk-font whitespace-nowrap">
                                Page Not Found
                            </h2>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <p className="text-xl md:text-2xl text-secondary/80 mb-4 space-grotesk-font">
                            {randomMessage}
                        </p>
                        <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 max-w-2xl mx-auto">
                            <p className="text-secondary/70 text-lg">
                                Don't worry, even the best developers encounter bugs! 
                                Let's get you back on track.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link
                            to="/"
                            className="group flex items-center gap-3 px-8 py-4 bg-primary text-base-100 font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <FaHome className={`transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
                            Back to Home
                        </Link>
                        
                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center gap-3 px-8 py-4 bg-base-200/50 backdrop-blur-sm border border-primary/20 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                            Go Back
                        </button>
                    </div>

                    {/* Developer Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-3xl font-bold text-primary mb-2">500+</div>
                            <div className="text-secondary/70">Hours of Coding</div>
                        </div>
                        <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                            <div className="text-secondary/70">Projects Completed</div>
                        </div>
                        <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                            <div className="text-secondary/70">Uptime (Almost!)</div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mb-8">
                        <p className="text-secondary/70 mb-4">While you're here, let's connect!</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://github.com/omarfaruk-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-12 h-12 bg-base-200/50 backdrop-blur-sm rounded-lg border border-primary/20 text-secondary/80 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dev-omar-faruk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-12 h-12 bg-base-200/50 backdrop-blur-sm rounded-lg border border-primary/20 text-secondary/80 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Fun Developer Quote */}
                    <div className="bg-gradient-to-r from-primary/10 via-transparent to-primary/10 p-6 rounded-xl border border-primary/20">
                        <p className="text-secondary/80 italic">
                            "The best error message is the one that never shows up." 
                            <span className="block text-primary font-semibold mt-2">- Unknown Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;