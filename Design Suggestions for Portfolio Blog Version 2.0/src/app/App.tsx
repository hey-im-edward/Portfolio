import { useState, useEffect } from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { Switch } from './components/ui/switch';
import DesignVariantSelector from './components/DesignVariantSelector';
import InteractiveBackground from './components/InteractiveBackground';
import GlassNavigation from './components/GlassNavigation';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import BlogPage from './components/pages/BlogPage';
import AllPostsPage from './components/pages/AllPostsPage';
import CategoriesPage from './components/pages/CategoriesPage';
import TagsPage from './components/pages/TagsPage';
import SinglePostPage from './components/pages/SinglePostPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

export type DesignVariant = 'glass' | 'minimal' | 'bold' | 'elegant';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');
  const [designVariant, setDesignVariant] = useState<DesignVariant>('glass');
  const [showVariantSelector, setShowVariantSelector] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderPage = () => {
    const props = { darkMode, designVariant };
    
    switch (currentPage) {
      case 'home':
        return <HomePage {...props} />;
      case 'projects':
        return <ProjectsPage {...props} />;
      case 'blog':
        return <BlogPage {...props} setCurrentPage={setCurrentPage} />;
      case 'all-posts':
        return <AllPostsPage {...props} setCurrentPage={setCurrentPage} />;
      case 'categories':
        return <CategoriesPage {...props} setCurrentPage={setCurrentPage} />;
      case 'tags':
        return <TagsPage {...props} setCurrentPage={setCurrentPage} />;
      case 'single-post':
        return <SinglePostPage {...props} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage {...props} />;
      case 'contact':
        return <ContactPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  const bgClasses = {
    glass: 'bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-50 dark:from-gray-950 dark:via-amber-950/30 dark:to-gray-900',
    minimal: 'bg-white dark:bg-gray-950',
    bold: 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-950 dark:via-amber-950 dark:to-orange-950',
    elegant: 'bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50 dark:from-slate-950 dark:via-amber-950/10 dark:to-slate-900',
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${bgClasses[designVariant]} text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden`}>
        {/* Interactive Background */}
        <InteractiveBackground darkMode={darkMode} mousePosition={mousePosition} designVariant={designVariant} />

        {/* Theme Toggle - Glass Style */}
        <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg">
            <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Moon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>

          {/* Variant Selector Button */}
          <button
            onClick={() => setShowVariantSelector(!showVariantSelector)}
            className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all"
            title="Design Variants"
          >
            <Palette className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </button>
        </div>

        {/* Design Variant Selector Modal */}
        {showVariantSelector && (
          <DesignVariantSelector
            currentVariant={designVariant}
            onSelectVariant={(variant) => {
              setDesignVariant(variant);
              setShowVariantSelector(false);
            }}
            onClose={() => setShowVariantSelector(false)}
          />
        )}

        {/* Glass Navigation */}
        <GlassNavigation 
          darkMode={darkMode} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          designVariant={designVariant}
        />

        {/* Main Content */}
        <main className="relative z-10">
          {renderPage()}
        </main>

        {/* Footer */}
        <Footer designVariant={designVariant} />
      </div>
    </div>
  );
}
