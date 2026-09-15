import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Otoboe Event Organization',
    description: 'Full-featured event organization website with booking & management systems.',
    category: 'Web Application',
    link: 'https://otoobe-event.vercel.app/',
    image: 'img/otoobe-event.png', 
  },
  {
    title: 'POS Admin Panel',
    description: 'Point of Sale administration dashboard with real-time data & inventory management.',
    category: 'Admin Dashboard',
    link: 'https://pos-konto-web.vercel.app/',
    image: 'img/pos-admin.png', 
  },
  {
    title: 'Weather Updates',
    description: 'Real-time weather tracking application with location-based forecasts.',
    category: 'Web Application',
    link: 'https://weather-uptodate.netlify.app/',
    image: 'img/weather-updates.png',
    // image: 'https://placehold.co/600x400/1e293b/ffffff?text=Weather+Updates',
  },
  {
    title: 'Onertrip',
    description: 'Travel planning platform with destination guides & booking features.',
    category: 'Travel Platform',
    link: 'https://onertrip.com/',
    image: 'img/one-r-trip.png',
  },
  {
    title: 'Onereducation',
    description: 'Educational platform for online learning & course management.',
    category: 'Education Platform',
    link: 'https://onereducation.eu/',
    image: 'img/one-r-edu.png',
  },
  {
    title: 'Bait-ul-noor',
    description: 'Full-featured Learning Management System with separate student, teacher, and admin dashboards.',
    category: 'Next.js',
    link: 'https://bait-ul-noor.vercel.app/',
    image: 'img/bait-ul-noor.png',
    // image: 'https://placehold.co/600x400/1e293b/ffffff?text=Bait-ul-noor',
  },
  {
    title: 'Lost and Found Marketing',
    description: 'Professional WordPress website for a marketing agency with portfolio & contact features.',
    category: 'WordPress',
    link: 'https://lostandfoundmarketing.com/',
    image: 'img/lost-n-found.png',
  },
  {
    title: 'Belknap Electric',
    description: 'Professional WordPress website for an electrical services company with service listings & contact form.',
    category: 'WordPress',
    link: 'https://belknapelectric.com/',
    image: 'img/bell-k-nap.png',
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
              className="glass-card group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs font-medium rounded-lg border border-primary-500/20">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-colors"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>

                {/* Hero Preview Image Container */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl mb-4 border border-dark-700/50 bg-dark-800/50"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </a>

                <p className="text-dark-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/HammadSyed08"
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