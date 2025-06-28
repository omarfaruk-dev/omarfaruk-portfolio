import { useState, useEffect } from 'react';
import { FaJs, FaReact, FaNodeJs, FaFigma, FaCode, FaGithub } from 'react-icons/fa';
import ProgressBar from '@ramonak/react-progress-bar';
import { SiAdobeillustrator, SiAdobephotoshop, SiExpress, SiFirebase, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const iconMap = {
  JavaScript: <FaJs className="text-yellow-400 text-5xl" />,
  React: <FaReact className="text-cyan-400 text-5xl animate-spin-slow" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 text-5xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-5xl" />,
  NodeJS: <FaNodeJs className="text-green-600 text-5xl" />,
  ExpressJS: <SiExpress className="text-gray-300 text-5xl" />,
  Firebase: <SiFirebase className="text-red-600 text-5xl" />,
  Redux: <SiRedux className="text-purple-500 text-5xl" />,
  Figma: <FaFigma className="text-pink-500 text-5xl" />,
  Photoshop: <SiAdobephotoshop className="text-blue-500 text-5xl" />,
  Illustrator: <SiAdobeillustrator className="text-orange-600 text-5xl" />,
  VSCode: <VscVscode className="text-blue-400 text-5xl" />,
  GitHub: <FaGithub className="text-white text-5xl" />,
};

const skillData = {
  Web: [
    { name: "TailwindCSS", value: 90 },
    { name: "React", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "NodeJS", value: 75 },
    { name: "ExpressJS", value: 70 },
    { name: "MongoDB", value: 70 },
    { name: "Firebase", value: 65 },
  ],
  Others: [
    { name: "Redux", value: 80 },
  ],
  Tools: [
    { name: "GitHub", value: 90 },
    { name: "Figma", value: 80 },
    { name: "VSCode", value: 95 },
    { name: "Cursor", value: 70 },
    { name: "Photoshop", value: 75 },
    { name: "Illustrator", value: 70 },
  ],
};


const tabs = ['Web', 'Others', 'Tools'];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('Web');
  const [progress, setProgress] = useState([]);
  const [displayedValue, setDisplayedValue] = useState([]);

  useEffect(() => {
    // Animate all progress bars from 0 to their value
    setProgress(Array(skillData[activeTab].length).fill(0));
    setDisplayedValue(Array(skillData[activeTab].length).fill(0));
    const timeouts = skillData[activeTab].map((skill, idx) =>
      setTimeout(() => {
        setProgress((prev) => {
          const updated = [...prev];
          updated[idx] = skill.value;
          return updated;
        });
      }, 200 + idx * 200)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [activeTab]);

  useEffect(() => {
    // Animate the displayed value for each skill
    const intervals = skillData[activeTab].map((skill, idx) => {
      if (progress[idx] === 0) return null;
      return setInterval(() => {
        setDisplayedValue((prev) => {
          const updated = [...prev];
          if (updated[idx] < skill.value) {
            updated[idx] = Math.min(updated[idx] + 1, skill.value);
          }
          return updated;
        });
      }, 15);
    });
    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [progress, activeTab]);

  return (
    <section id="skills" className="w-full min-h-[60vh] flex flex-col items-center justify-center py-16 md:py-24 bg-base-100">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
          <h2>My Skills</h2>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded border border-primary font-semibold text-lg transition-all duration-200 focus:outline-none ${activeTab === tab
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
        <div className="grid md:grid-cols-2 gap-8">
          {skillData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-base-200 p-6 rounded shadow flex items-center gap-6 hover:shadow-xl transition group"
            >
              <div className="flex flex-col items-center justify-center mr-4">
                {iconMap[skill.name] || <FaCode className="text-primary text-5xl" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-secondary text-lg space-grotesk-font">{skill.name}</span>
                </div>
                <ProgressBar
                  completed={progress[index] || 0}
                  maxCompleted={100}
                  height="10px"
                  isLabelVisible={false}
                  baseBgColor="#e5e7eb"
                  bgColor="#47d1d1"
                  animateOnRender
                  transitionDuration="1.2s"
                  className="rounded-full"
                  customLabel={null}
                />
              </div>
              <div className="ml-4 text-primary font-bold text-xl min-w-[48px] text-right">
                {displayedValue[index] || 0}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

