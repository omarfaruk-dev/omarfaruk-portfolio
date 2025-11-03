import { useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaJs, FaReact, FaNodeJs, FaFigma, FaCode, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAdobeillustrator, SiAdobephotoshop, SiExpress, SiFirebase, SiMongodb, SiRedux, SiTailwindcss, SiNetlify, SiVercel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const iconMap = {
  JavaScript: <FaJs className="text-yellow-400 text-3xl md:text-5xl" />,
  React: <FaReact className="text-cyan-400 text-3xl md:text-5xl animate-spin-slow" />,
  NextJS: <RiNextjsFill  className="text-black dark:text-white text-3xl md:text-5xl" />,
  TypeScript: <BiLogoTypescript  className="text-blue-400 text-3xl md:text-5xl" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 text-3xl md:text-5xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-3xl md:text-5xl" />,
  NodeJS: <FaNodeJs className="text-green-600 text-3xl md:text-5xl" />,
  ExpressJS: <SiExpress className="text-gray-300 text-3xl md:text-5xl" />,
  Firebase: <SiFirebase className="text-red-600 text-3xl md:text-5xl" />,
  Redux: <SiRedux className="text-purple-500 text-3xl md:text-5xl" />,
  Figma: <FaFigma className="text-pink-500 text-3xl md:text-5xl" />,
  Photoshop: <SiAdobephotoshop className="text-blue-500 text-3xl md:text-5xl" />,
  Illustrator: <SiAdobeillustrator className="text-orange-600 text-3xl md:text-5xl" />,
  VSCode: <VscVscode className="text-blue-400 text-3xl md:text-5xl" />,
  GitHub: <FaGithub className="text-white text-3xl md:text-5xl" />,
  Netlify: <SiNetlify className="text-green-400 text-3xl md:text-5xl" />,
  Vercel: <SiVercel className="text-black dark:text-white text-3xl md:text-5xl" />,
};

const skillData = {
  Web: [
    { name: "TailwindCSS", value: 85 },
    { name: "React", value: 70 },
    { name: "JavaScript", value: 70 },
    { name: "NodeJS", value: 75 },
    { name: "ExpressJS", value: 70 },
    { name: "MongoDB", value: 70 },
    { name: "Firebase", value: 75 },
    { name: "NextJS", value: 60 },
    { name: "TypeScript", value: 50 },
  ],
  Others: [
    { name: "Figma", value: 80 },
    { name: "Photoshop", value: 95 },
    { name: "Illustrator", value: 70 },
  ],
  Tools: [
    { name: "GitHub", value: 70 },
    { name: "VSCode", value: 95 },
    { name: "Cursor", value: 80 },
    { name: "Netlify", value: 70 },
    { name: "Vercel", value: 70 },
  ],
};

const tabs = ['Web', 'Tools', 'Others'];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('Web');

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className='w-full md:w-7/11 mx-auto mb-16' data-aos="fade-up" data-aos-delay="200">
          <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
          <h2>My Skills</h2>
        </div>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="300">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md border border-primary font-semibold text-lg transition-all duration-200 focus:outline-none hover:shadow-md hover:shadow-primary/20 transform hover:-translate-y-1 ${
                activeTab === tab
                  ? 'bg-primary text-base-100'
                  : 'text-primary hover:bg-primary/10'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="400">
          {skillData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="relative bg-base-200/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/20 hover:shadow-md hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="flex flex-col items-center justify-center mr-6">
                  <div className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {iconMap[skill.name] || <FaCode className="text-primary " />}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-secondary md:text-xl space-grotesk-font group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    {/* Skill level badge */}
                    <div className="flex items-center gap-2 ml-2">
                      <div className="flex items-center gap-1">
                        {skill.value >= 90 ? (
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Expert</span>
                          </div>
                        ) : skill.value >= 80 ? (
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">Advanced</span>
                          </div>
                        ) : skill.value >= 70 ? (
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Intermediate</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/30 rounded-full">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Learning</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

