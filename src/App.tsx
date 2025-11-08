import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Header } from './components/Header';
import { About } from './components/About';
import { WorkHistory } from './components/WorkHistory';
import { Skills } from './components/Skills';
import { Accomplishments } from './components/Accomplishments';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <ThemeToggle />
        <Header />
        <About />
        <Skills />
        <WorkHistory />
        <Accomplishments />
        <Certifications />
        <Education />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
