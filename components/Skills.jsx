const skillCategories = [
  {
    title: 'Frontend Core',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Database',
    skills: ['Firebase', 'Node.js', 'REST APIs'],
  },
  {
    title: 'CMS & Tools',
    skills: ['WordPress', 'Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'AI & Emerging Tech',
    skills: ['Claude.AI', 'GPT-5.3', 'DeepSeek-Coder', 'Gemini 1.5 Flash'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-dark-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary-400 rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-800 text-dark-300 text-sm font-medium rounded-lg border border-dark-700 hover:border-primary-500/30 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}