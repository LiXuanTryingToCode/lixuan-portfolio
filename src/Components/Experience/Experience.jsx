import React from 'react'

const Experience = () => {
    const experiences = [
        {
          title: "Senior Software Engineer",
          company: "Tech Corp",
          period: "2022 - Present",
          description: "Led development of cloud-native applications and mentored junior developers.",
          skills: ["React", "Node.js", "AWS"]
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions Inc",
          period: "2020 - 2022",
          description: "Developed and maintained multiple web applications using modern technologies.",
          skills: ["Vue.js", "Python", "Docker"]
        },
        {
          title: "Frontend Developer",
          company: "StartUp Co",
          period: "2018 - 2020",
          description: "Built responsive user interfaces and implemented design systems.",
          skills: ["JavaScript", "CSS", "HTML"]
        },
        {
          title: "Frontend Developer",
          company: "StartUp Co",
          period: "2018 - 2020",
          description: "Built responsive user interfaces and implemented design systems.",
          skills: ["JavaScript", "CSS", "HTML"]
        },
        {
          title: "Frontend Developer",
          company: "StartUp Co",
          period: "2018 - 2020",
          description: "Built responsive user interfaces and implemented design systems.",
          skills: ["JavaScript", "CSS", "HTML"]
        }
      ];
    
      // Function to interpolate between two hex colors
      const interpolateColor = (color1, color2, factor) => {
        // Convert hex to RGB
        const hex1 = color1.replace('#', '');
        const hex2 = color2.replace('#', '');
        
        // Get RGB values
        const r1 = parseInt(hex1.slice(0, 2), 16);
        const g1 = parseInt(hex1.slice(2, 4), 16);
        const b1 = parseInt(hex1.slice(4, 6), 16);
        
        const r2 = parseInt(hex2.slice(0, 2), 16);
        const g2 = parseInt(hex2.slice(2, 4), 16);
        const b2 = parseInt(hex2.slice(4, 6), 16);
        
        // Interpolate
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        
        // Convert back to hex
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      };
    
      // Get color for each dot based on its position
      const getDotColor = (index) => {
        const factor = index / (experiences.length - 1);
        return interpolateColor('#F74949', '#F2147B', factor);
      };
    
      return (
        <section className="max-w-4xl mx-auto py-8 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Vertical line - adjusted for mobile */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
  
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 md:mb-12 ml-8 md:ml-16">
              {/* Dot with interpolated color - adjusted position */}
              <div 
                className="absolute -left-12 md:-left-20 w-6 h-6 md:w-8 md:h-8 rounded-full"
                style={{
                  backgroundColor: getDotColor(index),
                  boxShadow: '0 0 0 4px white'
                }}
              />
  
              {/* Content - adjusted padding */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                  <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-600 text-sm md:text-base">{exp.period}</span>
                </div>
                <div className="text-base md:text-lg text-gray-700 mb-2">{exp.company}</div>
                <p className="text-sm md:text-base text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Experience