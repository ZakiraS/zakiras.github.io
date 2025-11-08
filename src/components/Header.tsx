import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-black dark:via-blue-950 dark:to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 fade-in-up">
          Zakira Thasneem Aysha Sikkandar
        </h1>

        <p className="text-2xl text-blue-200 text-center mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>Test Lead</p>

        <div className="flex flex-wrap justify-center gap-6 text-white/90">
          <a href="mailto:zakirathasneemayshas@gmail.com" className="flex items-center gap-2 hover:text-blue-300 hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FiMail className="w-5 h-5" />
            <span className="text-sm">zakirathasneemayshas@gmail.com</span>
          </a>
          <a href="tel:+601117587245" className="flex items-center gap-2 hover:text-blue-300 hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <FiPhone className="w-5 h-5" />
            <span className="text-sm">+60 111 758 7245</span>
          </a>
          <div className="flex items-center gap-2 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <FiMapPin className="w-5 h-5" />
            <span className="text-sm">Kuala Lumpur</span>
          </div>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.5s' }}>
            <FiLinkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};
