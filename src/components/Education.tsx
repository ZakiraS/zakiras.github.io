import { FiBook } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi';

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'University Of Madras',
    location: 'Chennai',
    year: '2010',
  },
  {
    degree: 'Bachelor of Science: Computer Science',
    institution: 'Shri S S Shasun Jain College',
    location: 'Chennai',
    year: '2010',
  },
];

export const Education = () => {
  return (
    <section className="gradient-tint relative py-12 transition-colors duration-300">
      <div className="gradient-tint-section absolute inset-0"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 slide-in-left">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center">
            <HiAcademicCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  <HiAcademicCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FiBook className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
