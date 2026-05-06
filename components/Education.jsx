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
];

export default function Education() {
  return (
    <section className="bg-dark-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>

        <div className="max-w-2xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-card flex items-start gap-5">
              <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                {edu.type === 'Current' ? <FiBookOpen size={24} /> : <FiAward size={24} />}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${edu.type === 'Current'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-dark-700 text-dark-300'
                      }`}
                  >
                    {edu.type}
                  </span>
                </div>
                <p className="text-dark-300 font-medium">{edu.school}</p>
                <p className="text-dark-500 text-sm mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}