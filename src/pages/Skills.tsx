import React, { useEffect, useState } from "react";

const skillsData = [
  // Frontend
  {
    section: "Frontend",
    color: "orange",
    bg: "bg-black bg-gradient-to-r from-gradientStart to-gradientEnd border-2 border-orange-500",
    icon: { name: "monitor", color: "text-orange-400" },
    skills: [
      { name: "React.js", percent: 90, bar: "bg-orange-500", bg: "bg-orange-900" },
      { name: "JavaScript", percent: 85, bar: "bg-orange-400", bg: "bg-orange-900" },
      { name: "Tailwind CSS", percent: 80, bar: "bg-orange-300", bg: "bg-orange-900" },
    ],
  },
  // Backend
  {
    section: "Backend",
    color: "green",
    bg: "bg-black bg-gradient-to-r from-gradientStart to-gradientEnd border-2 border-blue-500",
    icon: { name: "server", color: "text-blue-400" },
    skills: [
      { name: "Node.js", percent: 85, bar: "bg-blue-500", bg: "bg-blue-900" },
      { name: "Express.js", percent: 80, bar: "bg-blue-400", bg: "bg-blue-900" },
      { name: "REST APIs", percent: 85, bar: "bg-blue-300", bg: "bg-blue-900" },
    ],
  },
  // Database & Tools
  {
    section: "Database & Tools",
    color: "purple",
    bg: "bg-black bg-gradient-to-r from-gradientStart to-gradientEnd border-2 border-purple-500",
    icon: { name: "database", color: "text-purple-400" },
    skills: [
      { name: "MongoDB", percent: 80, bar: "bg-purple-500", bg: "bg-purple-900" },
      { name: "Git & GitHub", percent: 85, bar: "bg-purple-400", bg: "bg-purple-900" },
      { name: "Docker", percent: 70, bar: "bg-purple-300", bg: "bg-purple-900" },
    ],
  },
];

const AnimatedBar = ({ percent, bar, bg }: { percent: number; bar: string; bg: string }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setWidth(percent), 300);
  }, [percent]);
  return (
    <div className={`w-full ${bg} rounded-full h-2`}>
      <div
        className={`${bar} h-2 rounded-full transition-all duration-1000`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

const AnimatedPercent = ({ percent }: { percent: number }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1000;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * percent));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setVal(percent);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [percent]);
  return <span>{val}%</span>;
};

const Skills = () => (
  <section id="skills" className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((section) => (
            <div
              key={section.section}
              className={`${section.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="text-center mb-6">
                <i
                  data-lucide={section.icon.name}
                  className={`w-12 h-12 ${section.icon.color} mx-auto mb-4`}
                ></i>
                <h3 className={`text-xl font-semibold ${section.icon.color}`}>{section.section}</h3>
              </div>
              <div className="space-y-4">
                {section.skills.map((skill) => (
                  <div className="flex items-center space-x-3" key={skill.name}>
                    <div className={`w-8 h-8 ${skill.bar} rounded flex items-center justify-center`}>
                      <i data-lucide="code" className="w-4 h-4 text-white"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <AnimatedPercent percent={skill.percent} />
                      </div>
                      <AnimatedBar percent={skill.percent} bar={skill.bar} bg={skill.bg} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
