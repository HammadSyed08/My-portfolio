import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Astute Technology',
    period: 'March 2025 - May 2026',
    location: 'Remote',
    tech: ['React.js', 'Next.js', 'Firebase'],
    current: false,
  },
  {
    title: 'Frontend Web Developer',
    company: 'CODECURE.PK',
    period: 'July 2024 - December 2024',
    location: 'Remote',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress Elementor'],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          {/* Open to Work badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to Work
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-dark-700" />
              )}

              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${exp.current
                    ? 'border-primary-400 bg-primary-400/20'
                    : 'border-dark-600 bg-dark-800'
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${exp.current ? 'bg-primary-400' : 'bg-dark-500'
                    }`}
                />
              </div>

              <div className="glass-card ml-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  {exp.current && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-dark-400 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <FiBriefcase className="text-primary-400" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-primary-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMapPin className="text-primary-400" />
                    {exp.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs font-medium rounded-lg border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}