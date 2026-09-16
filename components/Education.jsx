import Image from 'next/image'; // Import Next.js Image component (or standard <img> for React SPA)
import { FiBookOpen, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'ADP (Computer Science)',
    school: 'The Best College BWP',
    period: '2024 - 2026',
    type: 'Current',
  },
  {
    degree: 'Matric (Science)',
    school: 'Royal Cadet Public School',
    period: '2012 - 2014',
    type: 'Completed',
  },
  {
    degree: 'AI Automation (Short Course)',
    school: 'Rohi eSkills Learning Hub',
    period: 'June - August (3 months)',
    type: 'Completed',
    description:
      'Main course: AI Automation using Zapier, Make.com, n8n, and Python. Short intro to Go High Level.',
  },
];

export default function Education() {
  return (
    <section className="bg-dark-900/50 py-16">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE: Image (5 Columns on Large Screens) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-dark-700 shadow-2xl group">
              {/* Decorative Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-900">
                <Image
                  src="/img/class-edu.jfif" 
                  alt="Education & Academic Background"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Education Cards (7 Columns on Large Screens) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card flex items-start gap-5 p-6 rounded-2xl bg-dark-950/60 border border-dark-800 backdrop-blur-md hover:border-dark-700 transition-colors duration-300"
              >
                {/* Icon Container */}
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 shrink-0">
                  {edu.type === 'Current' ? (
                    <FiBookOpen size={24} />
                  ) : (
                    <FiAward size={24} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${edu.type === 'Current'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-dark-700 text-dark-300'
                        }`}
                    >
                      {edu.type}
                    </span>
                  </div>

                  <p className="text-dark-300 font-medium">{edu.school}</p>
                  <p className="text-dark-500 text-sm mt-1">{edu.period}</p>

                  {edu.description && (
                    <p className="text-dark-400 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}