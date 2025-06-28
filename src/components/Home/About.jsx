import React from 'react';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center py-8 md:pt-12 lg:py-16">
            {/* Section Title */}
            <div className='w-1/2 mx-auto'>
                <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
                    <h2>About Me</h2>
                </div>
            </div>
            
            {/* Content Container */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 my-10">
                {/* Left Side Image */}
                <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
                    <div
                        className="w-80 h-80 flex items-center justify-center shadow-lg relative bg-primary"
                        style={{
                            clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                            border: '4px solid var(--tw-prose-primary, #46D0D1)'
                        }}
                    >
                        <img
                            src="/Headshot.jpg"
                            alt="Omar Faruk"
                            className="w-full h-full object-cover relative z-10"
                            style={{
                                clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                            }}
                        />
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl px-2 md:px-0">
                    <p className="text-lg md:text-xl text-secondary mb-4 space-grotesk-font">
                        I'm Omar Faruk, a <span className="text-primary font-semibold">Frontend Developer</span> focused on building beautiful, performant, and accessible web experiences. I love working with modern JavaScript frameworks and responsive design.
                    </p>
                    <p className="text-base md:text-lg text-secondary mb-6 space-grotesk-font">
                        I enjoy learning new technologies, collaborating with teams, and turning creative ideas into reality. Outside of coding, I like exploring new places and sharing knowledge with the community.
                    </p>
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-2">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded bg-primary text-base-100 font-semibold hover:bg-opacity-90 transition">Get Resume</a>
                        <a href="#skills" className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-base-100 transition">My Skills</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;