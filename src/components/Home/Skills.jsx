import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ProgressBar from '@ramonak/react-progress-bar';

const skillData = {
  Web: [
    { name: 'HTML', value: 95 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'React', value: 80 },
  ],
  Others: [
    { name: 'React Native', value: 85 },
    { name: 'Electron JS', value: 90 },
    { name: 'Johnny Five', value: 75 },
    { name: 'Svelte', value: 70 },
    { name: 'Redux', value: 80 },
    { name: 'GraphQL', value: 80 },
    { name: 'Jest', value: 65 },
    { name: 'Mocha', value: 65 },
    { name: 'Cypress', value: 65 },
    { name: 'SVG', value: 80 },
  ],
  Programming: [
    { name: 'C', value: 90 },
    { name: 'C++', value: 85 },
    { name: 'Python', value: 80 },
    { name: 'Java', value: 75 },
  ],
  Tools: [
    { name: 'Git', value: 90 },
    { name: 'Docker', value: 70 },
    { name: 'Figma', value: 80 },
    { name: 'VS Code', value: 95 },
  ],
};

const tabs = ['Web', 'Others', 'Programming', 'Tools'];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('Others');
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
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 space-grotesk-font text-center">My Skills</h2>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded border border-primary font-semibold text-lg transition-all duration-200 focus:outline-none ${
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
        <div className="grid md:grid-cols-2 gap-8">
          {skillData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-base-200 p-6 rounded-xl shadow flex items-center gap-6 hover:shadow-xl transition group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-primary text-lg opacity-80 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-secondary text-lg space-grotesk-font">{skill.name}</span>
                </div>
                <ProgressBar
                  completed={progress[index] || 0}
                  maxCompleted={100}
                  height="10px"
                  isLabelVisible={false}
                  baseBgColor="#e5e7eb"
                  bgColor="#06d6a0"
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

