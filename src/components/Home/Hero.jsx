import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-16 w-full min-h-[80vh] flex flex-col lg:flex-row  items-center justify-between py-12 md:py-16 lg:py-24 gap-10 md:gap-10">
            {/* Left Side Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl px-2 md:px-0" data-aos="fade-right" data-aos-delay="200">
                <h3 className='text-2xl font-semibold text-primary space-grotesk-font' data-aos="fade-up" data-aos-delay="300">Hello! I am </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary space-grotesk-font" data-aos="fade-up" data-aos-delay="400">Omar Faruk</h2>
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-primary space-grotesk-font" data-aos="fade-up" data-aos-delay="500">
                    <Typewriter
                        words={['Frontend Developer', 'MERN Stack Developer', 'JavaScript Lover', 'Web Developer']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>
                <p className="mb-6 text-lg text-gray-500 dark:text-gray-300" data-aos="fade-up" data-aos-delay="600">
                    I build modern, responsive web applications with a focus on performance and user experience. Let's create something amazing together!
                </p>
                {/* Social Icons */}
                <div className="flex gap-4 mt-2 mb-6" data-aos="fade-up" data-aos-delay="700">
                    <a href="https://github.com/omarfaruk-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl text-secondary hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/dev-omar-faruk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-secondary hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/omarfaruk_dev" target="_blank" rel="noopener noreferrer" aria-label="x" className="text-2xl text-secondary hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                        <FaXTwitter />
                    </a>
                    <a href="https://codepen.io/omarfaruk-dev" target="_blank" rel="noopener noreferrer" aria-label="CodePen" className="text-2xl text-secondary hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                        <FaCodepen />
                    </a>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4" data-aos="fade-up" data-aos-delay="800">
                    <a href="https://drive.google.com/file/d/1JTMaWyCpL03kqFhMM41nvyHmmb-xEEsn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 md:px-6 py-2 rounded-md bg-primary text-base-100 font-semibold hover:bg-opacity-90 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 transform hover:-translate-y-1">Get Resume</a>
                    <Link to="contact" smooth={true} duration={1500} className="px-4 md:px-6 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 transform hover:-translate-y-1 cursor-pointer">Contact Me</Link>
                </div>
            </div>
            {/* Right Side code block */}
            <div className="flex-1 flex items-center justify-center" data-aos="fade-left" data-aos-delay="400">
                {/* Branded Code Block Interface */}
                <div className="w-full max-w-full md:w-[600px] bg-base-200 border-2 border-primary shadow-xl relative font-mono text-sm overflow-x-auto rounded-md" style={{
                    boxShadow: '0 8px 32px 0 rgba(24, 106, 121, 0.25)',
                    position: 'relative',
                }}>
                    <div className="flex items-center gap-2 mb-4 p-3 bg-primary/20 backdrop-blur-sm border border-primary/20">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                    </div>
                    <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed select-text p-4" style={{ background: 'transparent', color: '#d4d4d4', margin: 0 }}>
                        <span style={{ color: '#ff79c6' }}>const</span> <span style={{ color: '#fabd2f' }}>developer</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>&#123;</span>{`
  `}<span style={{ color: '#fabd2f' }}>name</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#d4d4d4' }}>'Omar Faruk'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
  `}<span style={{ color: '#fabd2f' }}>role</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#d4d4d4' }}>'Frontend Developer | MERN Stack | JavaScript Lover'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
  `}<span style={{ color: '#fabd2f' }}>location</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#d4d4d4' }}>'Bangladesh'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
  `}<span style={{ color: '#fabd2f' }}>skills</span><span style={{ color: '#d4d4d4' }}>: [
                        </span><span style={{ color: '#d4d4d4' }}>'JavaScript','React', TailwindCSS', 'NodeJS', 'ExpressJS',
                            'MongoDB', 'Firebase', 'Redux', 'Figma', 'VSCode', 'GitHub', 'Cursor'
                            'Photoshop', 'Illustrator'</span><span style={{ color: '#d4d4d4' }}>],</span>{`
  `}<span style={{ color: '#fabd2f' }}>hireable</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#27c93f' }}>true</span><span style={{ color: '#d4d4d4' }}>,</span>{`
  `}<span style={{ color: '#fabd2f' }}>contact</span><span style={{ color: '#d4d4d4' }}>: &#123;
                        </span><span style={{ color: '#fabd2f' }}>email</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#7dcfff' }}>'omarfaruk.dev@gmail.com'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
    `}<span style={{ color: '#fabd2f' }}>github</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#7dcfff' }}>'https://github.com/omarfaruk-dev'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
    `}<span style={{ color: '#fabd2f' }}>linkedin</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#7dcfff' }}>'https://linkedin.com/in/dev-omarfaruk'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
    `}<span style={{ color: '#fabd2f' }}>portfolio</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#7dcfff' }}>'https://omarfaruk-dev.web.app'</span><span style={{ color: '#d4d4d4' }}>,</span>{`
    `}<span style={{ color: '#fabd2f' }}>x</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#7dcfff' }}>'https://x.com/omarfarukb7'</span>{`
  `}<span style={{ color: '#d4d4d4' }}>&#125;</span>{`
`}<span style={{ color: '#d4d4d4' }}>&#125;;</span>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Hero;