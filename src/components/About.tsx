import { FiFileText } from 'react-icons/fi';

export const About = () => {
  return (
    <section className="gradient-tint relative py-12 transition-colors duration-300">
      <div className="gradient-tint-section absolute inset-0"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 slide-in-left">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center">
            <FiFileText className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Summary</h2>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Experienced Test Lead with <span className="font-semibold text-blue-600 dark:text-blue-400">15 years of expertise</span> in manual testing
            and user acceptance testing (UAT) across web, mobile, and API applications. Proven ability to lead teams, manage complete testing
            lifecycles, and deliver high-quality solutions within Agile and Scrum frameworks. Strong in test strategy, planning, execution, and
            stakeholder management, with a focus on driving efficiency, process improvement, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};
