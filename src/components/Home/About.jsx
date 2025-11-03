import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center py-8 md:pb-12 lg:pb-16">
            {/* Section Title */}
            <div className='w-full md:w-1/2 mx-auto' data-aos="fade-up" data-aos-delay="200">
                <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
                    <h2>About Me</h2>
                </div>
            </div>
            
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 my-10">
                {/* Left Side Image */}
                <div className="flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="300">
                    <div className="relative w-80 h-80 flex  items-center justify-center border-4 border-primary rounded-md overflow-visible bg-base-100">
                        {/* Stylish second border */}
                        <div className="absolute inset-2 border-2 border-primary/30 rounded-md pointer-events-none z-10"></div>
                        {/* Large background text */}
                        <span className="absolute top-25 left-1/2 -translate-x-1/2 text-5xl md:text-6xl font-extrabold wireframe-text whitespace-nowrap select-none pointer-events-none">DEVELOPER</span>
                        {/* <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[2.5rem] md:text-6xl font-extrabold text-primary/30 whitespace-nowrap select-none pointer-events-none">DEVELOPER</span> */}
                        {/* Image */}
                        <img
                            src="/omar-photo.png"
                            alt="Omar Faruk Web Developer"
                            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-90 object-cover z-20 rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl px-4 md:px-0 group" data-aos="fade-left" data-aos-delay="400">
                    <p className="text-lg md:text-xl text-secondary mb-4 space-grotesk-font group-hover:text-secondary/90 transition-colors duration-300" data-aos="fade-up" data-aos-delay="500">
                        I'm Omar Faruk, a <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors duration-300">Frontend Developer</span> focused on building beautiful, performant, and accessible web experiences. I love working with modern JavaScript frameworks and responsive design.
                    </p>
                    <p className="text-base md:text-lg text-secondary mb-6 space-grotesk-font group-hover:text-secondary/90 transition-colors duration-300" data-aos="fade-up" data-aos-delay="600">
                        I enjoy learning new technologies, collaborating with teams, and turning creative ideas into reality. Outside of coding, I like exploring new places and sharing knowledge with the community.
                    </p>
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-2" data-aos="fade-up" data-aos-delay="700">
                        <a 
                            href="https://drive.google.com/file/d/1JTMaWyCpL03kqFhMM41nvyHmmb-xEEsn/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-6 py-2 rounded-md bg-primary text-base-100 font-semibold hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 shadow-md transform hover:-translate-y-1"
                        >
                            Get Resume
                        </a>
                        <Link 
                            to="skills" 
                            smooth={true}
                            duration={1500}
                            offset={-80}
                            className="btn btn-outline text-primary font-semibold hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 border-primary/60 hover:border-primary shadow-sm transform hover:-translate-y-1"
                        >
                            My Skills
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;