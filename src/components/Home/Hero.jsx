import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
// import heroLottie from '../../assets/lotties/hero-lottie.json'
// import Lottie from 'lottie-react';


const Hero = () => {
    return (
        <section className="mt-16 w-full min-h-[80vh] flex flex-col lg:flex-row  items-center justify-between py-12 md:py-16 lg:py-24 gap-10 md:gap-10">
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
                {/* Branded Code Block Interface */}
                <div className="w-full max-w-full md:w-[600px] bg-base-200 border-2 border-primary rounded-xl shadow-xl p-3 md:p-6 relative font-mono text-sm overflow-x-auto" style={{
                  borderRadius: '1rem',
                  boxShadow: '0 8px 32px 0 rgba(24, 106, 121, 0.25)',
                  position: 'relative',
                }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                  </div>
                  <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed select-text" style={{background:'transparent', color:'#d4d4d4', margin:0, padding:0}}>
<span style={{color:'#ff79c6'}}>const</span> <span style={{color:'#fabd2f'}}>coder</span> <span style={{color:'#d4d4d4'}}>=</span> <span style={{color:'#d4d4d4'}}>&#123;</span>{`
  `}<span style={{color:'#fabd2f'}}>name</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#d4d4d4'}}>'Omar Faruk'</span><span style={{color:'#d4d4d4'}}>,</span>{`
  `}<span style={{color:'#fabd2f'}}>role</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#d4d4d4'}}>'Frontend Developer | MERN Stack | JavaScript Lover'</span><span style={{color:'#d4d4d4'}}>,</span>{`
  `}<span style={{color:'#fabd2f'}}>location</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#d4d4d4'}}>'Bangladesh'</span><span style={{color:'#d4d4d4'}}>,</span>{`
  `}<span style={{color:'#fabd2f'}}>skills</span><span style={{color:'#d4d4d4'}}>: [
    </span><span style={{color:'#d4d4d4'}}>'TailwindCSS', 'React', 'JavaScript', 'NodeJS', 'ExpressJS',
    'MongoDB', 'Firebase', 'Redux', 'Figma', 'VSCode',
    'Photoshop', 'Illustrator', 'GitHub', 'Cursor'</span><span style={{color:'#d4d4d4'}}>
  ],</span>{`
  `}<span style={{color:'#fabd2f'}}>hireable</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#27c93f'}}>true</span><span style={{color:'#d4d4d4'}}>,</span>{`
  `}<span style={{color:'#fabd2f'}}>contact</span><span style={{color:'#d4d4d4'}}>: &#123;
    </span><span style={{color:'#fabd2f'}}>email</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#7dcfff'}}>'omarfaruk.dev@gmail.com'</span><span style={{color:'#d4d4d4'}}>,</span>{`
    `}<span style={{color:'#fabd2f'}}>github</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#7dcfff'}}>'https://github.com/omarfarukdev'</span><span style={{color:'#d4d4d4'}}>,</span>{`
    `}<span style={{color:'#fabd2f'}}>linkedin</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#7dcfff'}}>'https://linkedin.com/in/omarfarukdev'</span><span style={{color:'#d4d4d4'}}>,</span>{`
    `}<span style={{color:'#fabd2f'}}>portfolio</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#7dcfff'}}>'https://omarfaruk.dev'</span><span style={{color:'#d4d4d4'}}>,</span>{`
    `}<span style={{color:'#fabd2f'}}>x</span><span style={{color:'#d4d4d4'}}>: </span><span style={{color:'#7dcfff'}}>'https://x.com/omarfarukdev'</span>{`
  `}<span style={{color:'#d4d4d4'}}>&#125;</span>{`
`}<span style={{color:'#d4d4d4'}}>&#125;;</span>
                  </pre>
                </div>
            </div>
        </section>
    );
};

export default Hero;