const Skills = () => {
    const skills = [
      { name: 'HTML', level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'CSS', level: 90, color: 'from-red-500 to-red-700' },
      { name: 'JAVASCRIPT', level: 85, color: 'from-purple-500 to-purple-700' },
      { name: 'TAILWIND CSS', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'BOOTSTRAP', level: 92, color: 'from-yellow-500 to-yellow-700' },
      { name: 'REACT.JS', level: 87, color: 'from-indigo-500 to-indigo-700' },
      { name: 'NEXT.JS', level: 83, color: 'from-pink-500 to-pink-700' },
      { name: 'PHYTHON', level: 50, color: 'from-teal-500 to-teal-700' },
    ];
  
    return (
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Development expertise I bring to your business
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;