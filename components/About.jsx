import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: 'Frontend Development',
    description: 'Building responsive UIs with React.js, Next.js & Tailwind CSS',
  },
  {
    icon: <FiServer size={24} />,
    title: 'Full Stack Capable',
    description: 'Experience with Firebase & backend integrations',
  },
  {
    icon: <FiDatabase size={24} />,
    title: 'State Management',
    description: 'Efficient data handling & API integrations',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'AI Integration',
    description: 'Working with GPT, DeepSeek & Gemini APIs',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-dark-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Aspiring Web Developer with a passion for{' '}
              <span className="gradient-text">innovation</span>
            </h3>
            <p className="text-dark-400 leading-relaxed mb-4">
              I&apos;m an Associate Software Engineer at Astute Technology, skilled in building
              dynamic and user-friendly web applications. My journey in tech started with a
              deep curiosity for how things work on the web, and it has evolved into a
              professional career crafting digital experiences.
            </p>
            <p className="text-dark-400 leading-relaxed mb-4">
              Currently pursuing my ADP in Computer Science while working professionally,
              I bring a blend of academic knowledge and practical industry experience to
              every project I undertake.
            </p>
            <p className="text-dark-400 leading-relaxed">
              I&apos;m continuously improving my frontend development skills and exploring
              the latest technologies including AI-powered development tools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card text-center">
                <div className="text-primary-400 mb-3 flex justify-center">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2 text-sm">{item.title}</h4>
                <p className="text-dark-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}