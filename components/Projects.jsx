import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Otoboe Event Organization',
    description: 'Full-featured event organization website with booking & management systems.',
    category: 'Web Application',
  },
  {
    title: 'POS Admin Panel',
    description: 'Point of Sale administration dashboard with real-time data & inventory management.',
    category: 'Admin Dashboard',
  },
  {
    title: 'Weather Updates',
    description: 'Real-time weather tracking application with location-based forecasts.',
    category: 'Web Application',
  },
  {
    title: 'Onertrip',
    description: 'Travel planning platform with destination guides & booking features.',
    category: 'Travel Platform',
  },
  {
    title: 'Onereducation',
    description: 'Educational platform for online learning & course management.',
    category: 'Education Platform',
  },
  {
    title: 'Luxum Builders',
    description: 'Professional WordPress website for a construction & building company.',
    category: 'WordPress',
  },
  {
    title: 'Nature Fitness',
    description: 'Fitness & wellness website with class schedules & membership management.',
    category: 'WordPress',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-dark-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects I&apos;ve Built</h2>
          <p className="section-subtitle">Showcasing my best work</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs font-medium rounded-lg border border-primary-500/20">
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}