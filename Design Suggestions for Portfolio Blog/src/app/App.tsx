import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './components/ui/switch';
import InteractiveBackground from './components/InteractiveBackground';
import GlassNavigation from './components/GlassNavigation';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import BlogPage from './components/pages/BlogPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage darkMode={darkMode} />;
      case 'projects':
        return <ProjectsPage darkMode={darkMode} />;
      case 'blog':
        return <BlogPage darkMode={darkMode} />;
      case 'about':
        return <AboutPage darkMode={darkMode} />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} />;
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-50 dark:from-gray-950 dark:via-amber-950/30 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
        {/* Interactive Background */}
        <InteractiveBackground darkMode={darkMode} mousePosition={mousePosition} />

        {/* Theme Toggle - Glass Style */}
        <div className="fixed top-6 right-6 z-50">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg">
            <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Moon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
        </div>

        {/* Glass Navigation */}
        <GlassNavigation darkMode={darkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <main className="relative z-10">
          {renderPage()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
