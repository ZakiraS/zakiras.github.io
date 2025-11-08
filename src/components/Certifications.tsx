import { FiAward } from 'react-icons/fi';
import { BiTestTube } from 'react-icons/bi';

export const Certifications = () => {
  return (
    <section className="gradient-tint relative py-12 transition-colors duration-300">
      <div className="gradient-tint-section absolute inset-0"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 slide-in-left">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center">
            <BiTestTube className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 scale-in">
          <div className="rounded-lg p-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <FiAward className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Information System Examination Board (ISEB)</h4>
              <p className="text-slate-700 dark:text-slate-300">Professional Testing Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
