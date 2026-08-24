import {
  Atom,
  Bot,
  Brain,
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Terminal,
  Workflow,
  Webhook,
  Zap,
  Sparkles,
  Blocks,
  Boxes,
  Cpu,
  FileCode2,
  Server,
  Cloud,
  Palette,
  Shield,
  MessageSquare,
  CircuitBoard,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


// TypeScript interfaces for better type safety
interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  icon: React.ComponentType<{ className?: string }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces',
    icon: Layers,
    skills: [
      { name: 'React.js', icon: Atom, color: 'text-cyan-400' },
      { name: 'Next.js', icon: Globe, color: 'text-white' },
      { name: 'Tailwind CSS', icon: Palette, color: 'text-sky-400' },
      { name: 'shadcn/ui', icon: Boxes, color: 'text-slate-200' },
      { name: 'Material UI', icon: Blocks, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Server-side development and data management',
    icon: Server,
    skills: [
      { name: 'Express.js', icon: FileCode2, color: 'text-gray-300' },
      { name: 'Node.js', icon: Terminal, color: 'text-green-500' },
      { name: 'MongoDB', icon: Database, color: 'text-emerald-500' },
      { name: 'Firebase', icon: Cloud, color: 'text-amber-500' },
      { name: 'REST APIs', icon: Braces, color: 'text-indigo-400' },
    ],
  },
  {
    title: 'AI Automation & Workflows',
    description: 'Automating processes and integrating systems',
    icon: Workflow,
    skills: [
      { name: 'n8n', icon: CircuitBoard, color: 'text-rose-500' },
      { name: 'Make.com', icon: Workflow, color: 'text-purple-400' },
      { name: 'Zapier', icon: Zap, color: 'text-orange-500' },
      { name: 'Webhooks', icon: Webhook, color: 'text-teal-400' },
      { name: 'Process Optimization', icon: Cpu, color: 'text-emerald-400' },
    ],
  },
  {
    title: 'AI Assistants & LLM Tooling',
    description: 'Leveraging AI for intelligent solutions',
    icon: Brain,
    skills: [
      { name: 'ChatGPT', icon: MessageSquare, color: 'text-emerald-400' },
      { name: 'Claude.ai', icon: Bot, color: 'text-orange-300' },
      { name: 'Google Gemini', icon: Sparkles, color: 'text-blue-400' },
      { name: 'DeepSeek', icon: Brain, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Languages & Core Tools',
    description: 'Programming languages and development tools',
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: Braces, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
      { name: 'Python', icon: Terminal, color: 'text-amber-300' },
      { name: 'Git', icon: GitBranch, color: 'text-red-500' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='relative bg-gradient-to-b from-dark-950 to-dark-900 py-20 overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-sm font-semibold mb-4'>
            Technical Expertise
          </span>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-dark-400 text-lg max-w-2xl mx-auto'>
            Technologies, frameworks, and automation platforms I specialize in
            to build robust and scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                className='group relative bg-dark-900/60 backdrop-blur-md rounded-2xl border border-dark-800 p-6 
                  transition-all duration-300 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/5
                  hover:transform hover:-translate-y-1'
              >
                {/* Decorative gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary-500/0 to-transparent rounded-2xl transition-all duration-300 group-hover:from-primary-500/5' />

                {/* Category Header */}
                <div className='relative flex items-center gap-3 mb-6'>
                  <div className='w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center'>
                    <CategoryIcon className='w-5 h-5 text-primary-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>
                      {category.title}
                    </h3>
                    <p className='text-xs text-dark-400 mt-0.5'>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className='relative flex flex-wrap gap-2.5'>
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className='inline-flex items-center gap-2 px-3.5 py-2 bg-dark-800/80 text-dark-200 text-sm 
                          font-medium rounded-xl border border-dark-700/60 
                          hover:border-primary-500/40 hover:text-white hover:bg-dark-800 
                          transition-all duration-200 cursor-default group/skill'
                        title={`${skill.name}`}
                      >
                        <Icon
                          className={`w-4 h-4 ${skill.color} transition-transform duration-200 group-hover/skill:scale-110`}
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className='text-center mt-12'>
          <p className='text-dark-400 text-sm inline-flex items-center gap-2'>
            <Sparkles className='w-4 h-4 text-primary-400' />
            Continuously learning and exploring new technologies
            <Sparkles className='w-4 h-4 text-primary-400' />
          </p>
        </div>
      </div>
    </section>
  );
}
