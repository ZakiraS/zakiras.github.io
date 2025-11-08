import { FiCheckCircle } from 'react-icons/fi';
import { BiTestTube } from 'react-icons/bi';

const skillCategories = [
  {
    title: 'Testing Expertise',
    skills: [
      'Functional testing',
      'User Acceptance Testing',
      'Regression testing',
      'API Testing',
      'Test Automation - Selenium',
    ],
  },
  {
    title: 'Methodologies & Processes',
    skills: [
      'Agile methodology',
      'Test planning',
      'Test case design',
      'Test metrics',
      'Quality management',
    ],
  },
];

export const Skills = () => {
  return (
    <section className="gradient-tint relative py-12 transition-colors duration-300">
      <div className="gradient-tint-section absolute inset-0"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 slide-in-left">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center">
            <BiTestTube className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BiTestTube className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center gap-3 group">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
