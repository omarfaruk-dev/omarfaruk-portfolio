import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import heroLottie from '../../assets/lotties/hero-lottie.json'
import Lottie from 'lottie-react';


const Hero = () => {
    return (
        <section className="mt-16 w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-16 lg:py-24 gap-10 md:gap-0">
            {/* Left Side Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl px-2 md:px-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary space-grotesk-font">Hi, I'm Omar Faruk</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary space-grotesk-font">
                    <Typewriter
                        words={['Frontend Developer', 'MERN Stack Developer', 'JavaScript Lover']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>
                <p className="mb-6 text-lg text-gray-500 dark:text-gray-300">
                    I build modern, responsive web applications with a focus on performance and user experience. Let's create something amazing together!
                </p>
                {/* Social Icons */}
                <div className="flex gap-4 mt-2 mb-6">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl text-secondary hover:text-primary transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-secondary hover:text-primary transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl text-secondary hover:text-primary transition">
                        <FaTwitter />
                    </a>
                    <a href="https://codepen.io/your-codepen" target="_blank" rel="noopener noreferrer" aria-label="CodePen" className="text-2xl text-secondary hover:text-primary transition">
                        <FaCodepen />
                    </a>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 md:px-6 py-2 rounded bg-primary text-base-100 font-semibold hover:bg-opacity-90 transition">Get Resume</a>
                    <a href="#about" className="px-4 md:px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-base-100 transition">About Me</a>
                </div>
            </div>
            {/* Right Side Image */}
            <div className="flex-1 flex items-center justify-center">
                  <Lottie animationData={heroLottie}></Lottie>
                {/* <div
                    className="w-80 h-80 flex items-center justify-center shadow-lg relative bg-primary"
                    style={{
                        clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                        border: '4px solid var(--tw-prose-primary, #06d6a0)'
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
                </div> */}
            </div>
        </section>
    );
};

export default Hero;