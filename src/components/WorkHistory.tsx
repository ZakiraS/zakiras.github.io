import { useState } from 'react';
import { FiChevronDown, FiBriefcase, FiCalendar } from 'react-icons/fi';

interface Job {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
  projects?: { name: string; period: string; details: string[] }[];
}

const jobs: Job[] = [
  {
    company: 'Barclays Global Service Centre',
    title: 'Test Lead',
    period: 'August 2018 - August 2025',
    responsibilities: [
      'Led UAT delivery for Secure Channel, Premier, Open Banking, and API products.',
      'Managed planning, execution, and reporting of all test phases.',
      'Oversaw project management activities – estimations, schedules, and risk tracking.',
      'Ensured compliance with QA standards and product performance benchmarks.',
      'Applied Agile and Scrum practices for sprint planning and milestone delivery.',
      'Coordinated with Product Owners and Developers to align business needs and test coverage.',
      'Directed mobile app UAT for Android and iOS platforms.',
      'Maintained testing artifacts and published UAT metrics to stakeholders.',
    ],
  },
  {
    company: 'Barclays Global Service Centre',
    title: 'Senior Test Analyst',
    period: 'April 2015 - August 2018',
    responsibilities: [
      'Delivered UAT testing for ROLB web platform and Barclays Mobile App.',
      'Managed test planning, execution, and closure independently.',
      'Owned IA estimation, timeline planning, and test strategy preparation.',
      'Led two testers, assigning tasks and tracking daily progress.',
      'Joined Scrum calls to coordinate with Product Owners and developers.',
      'Maintained encrypted test cases and ensured JIRA traceability.',
      'Drove process efficiency in test execution and defect handling.',
    ],
  },
  {
    company: 'DXC Technology, CSC',
    title: 'Test Engineer',
    period: 'August 2010 - April 2015',
    responsibilities: [
      'Performed System Integration Testing (SIT) and manual validation.',
      'Executed functional, regression, and sanity testing across multiple releases.',
      'Conducted backend data verification using SQL queries.',
      'Supported pre-production and post-production testing activities.',
      'Contributed to test planning, execution, and closure documentation.',
      'Participated in requirement analysis and design reviews.',
      'Validated functional and code-level compliance with client standards.',
      'Identified potential code break scenarios and optimized logic through early reviews.',
    ],
    projects: [
      {
        name: 'Esurance Project',
        period: 'January 2012 – April 2015',
        details: [
          'Performed System Integration Testing (SIT) and manual validation for the Esurance application.',
          'Executed functional, regression, and sanity testing across multiple releases.',
          'Conducted backend data verification using SQL queries.',
          'Supported pre-production and post-production testing activities.',
        ],
      },
      {
        name: 'Progressive Project',
        period: 'August 2010 – January 2012',
        details: [
          'Participated in requirement analysis and design reviews for Progressive systems.',
          'Validated functional and code-level compliance with client standards.',
          'Identified potential code break scenarios and optimized logic through early reviews.',
        ],
      },
    ],
  },
];

export const WorkHistory = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="gradient-tint relative py-12 transition-colors duration-300">
      <div className="gradient-tint-section absolute inset-0"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 slide-in-left">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center">
            <FiBriefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work History</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center hover:scale-110 transition-transform">
                      <FiBriefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-13 text-slate-600 dark:text-slate-400">
                    <FiCalendar className="w-4 h-4" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <FiChevronDown
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-700/30 dark:to-transparent">
                  <div className="pl-13">
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    {job.projects && (
                      <div className="mt-6 space-y-4">
                        {job.projects.map((project, projIdx) => (
                          <div
                            key={projIdx}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-blue-900/30 rounded-lg p-4 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-650 transition-colors duration-300"
                          >
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{project.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.period}</p>
                            <ul className="space-y-2">
                              {project.details.map((detail, detailIdx) => (
                                <li key={detailIdx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <span className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0"></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
