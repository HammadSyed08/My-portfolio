import {
  Atom,
  Server,
  Database,
  Brain,
  Workflow,
  Sparkles,
  Code2,
  Terminal,
} from 'lucide-react';

const highlights = [
  {
    icon: <Atom size={24} />,
    title: 'Frontend Development',
    description: 'React.js, Next.js, Tailwind CSS, shadcn/ui & Material UI',
  },
  {
    icon: <Server size={24} />,
    title: 'Backend & Database',
    description: 'Node.js, Express.js, MongoDB & Firebase',
  },
  {
    icon: <Workflow size={24} />,
    title: 'AI Automation',
    description: 'n8n, Make.com, Zapier & Webhooks integration',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI Integration',
    description: 'ChatGPT, Claude.ai, Gemini & DeepSeek APIs',
  },
];

const additionalSkills = [
  { icon: <Code2 size={16} />, text: 'JavaScript, TypeScript & Python' },
  { icon: <Terminal size={16} />, text: 'Git & GitHub Version Control' },
  { icon: <Database size={16} />, text: 'REST APIs & Webhooks' },
  { icon: <Sparkles size={16} />, text: 'Process Optimization' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-dark-900/50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get to Know Me Better
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Passionate developer focused on building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Aspiring Full-Stack Developer with a passion for{' '}
              <span className="bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">
                AI & Automation
              </span>
            </h3>

            <div className="space-y-4">
              <p className="text-dark-300 leading-relaxed">
                I&apos;m an Associate Software Engineer at Astute Technology, specializing in
                building dynamic web applications and automating workflows. My expertise spans
                across modern frontend frameworks, backend development, and AI-powered solutions.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Currently pursuing my ADP in Computer Science while working professionally,
                I combine academic knowledge with practical industry experience. My focus is on
                creating efficient, scalable solutions that leverage the power of AI and automation.
              </p>

              <p className="text-dark-300 leading-relaxed">
                I&apos;m passionate about exploring emerging technologies, particularly in the
                AI space, and implementing them to solve real-world problems. From building
                responsive UIs to setting up complex automation workflows, I enjoy the entire
                development spectrum.
              </p>
            </div>

            {/* Additional skills tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-800/80 text-dark-200 
                    text-xs font-medium rounded-lg border border-dark-700/60"
                >
                  <span className="text-primary-400">{skill.icon}</span>
                  {skill.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-dark-900/60 backdrop-blur-md rounded-2xl border border-dark-800 
                  p-6 text-center transition-all duration-300 
                  hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/5
                  hover:transform hover:-translate-y-1"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-transparent 
                  rounded-2xl transition-all duration-300 group-hover:from-primary-500/5" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
                    bg-primary-500/10 text-primary-400 mb-4 transition-all duration-300 
                    group-hover:scale-110 group-hover:bg-primary-500/20">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-dark-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats or quick facts */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Frontend', value: 'React/Next.js' },
            { label: 'Backend', value: 'Node/Express' },
            { label: 'AI Tools', value: 'LLM Integration' },
            { label: 'Automation', value: 'n8n/Zapier' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-dark-900/60 backdrop-blur-md rounded-xl border border-dark-800 
                p-4 text-center transition-all duration-300 hover:border-primary-500/40"
            >
              <div className="text-primary-400 text-xs font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-white text-sm font-bold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}