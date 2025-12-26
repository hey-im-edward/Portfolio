import { useState } from 'react';
import { Menu, X, Home, Briefcase, BookOpen, User, Mail, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GlassNavigationProps {
  darkMode: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function GlassNavigation({ darkMode, currentPage, setCurrentPage }: GlassNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'blog', icon: BookOpen, label: 'Blog', hasDropdown: true },
    { id: 'about', icon: User, label: 'About' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setBlogDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-between py-6"
          >
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg hover:bg-white/15 dark:hover:bg-gray-900/40 transition-all"
            >
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 fill-amber-600 dark:fill-amber-400" />
              <span className="font-semibold text-gray-900 dark:text-white">Portfolio - Java & JavaScript</span>
            </button>

            {/* Nav Items */}
            <div className="flex items-center gap-2 px-3 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-2xl">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                        className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 ${
                          currentPage === item.id ? 'bg-amber-500/20' : 'hover:bg-amber-500/20'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 transition-colors ${
                          currentPage === item.id 
                            ? 'text-amber-600 dark:text-amber-400' 
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`} />
                        <span className={`text-sm font-medium transition-colors ${
                          currentPage === item.id
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`}>
                          {item.label}
                        </span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {blogDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 right-0 w-48 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl shadow-2xl overflow-hidden"
                          >
                            <button
                              onClick={() => handleNavClick('blog')}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 transition-colors"
                            >
                              All Posts
                            </button>
                            <button
                              onClick={() => handleNavClick('blog')}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 transition-colors"
                            >
                              Categories
                            </button>
                            <button
                              onClick={() => handleNavClick('blog')}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 transition-colors"
                            >
                              Tags
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.button
                      onClick={() => handleNavClick(item.id)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                        currentPage === item.id ? 'bg-amber-500/20' : 'hover:bg-amber-500/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className={`w-4 h-4 transition-colors ${
                          currentPage === item.id 
                            ? 'text-amber-600 dark:text-amber-400' 
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`} />
                        <span className={`text-sm font-medium transition-colors ${
                          currentPage === item.id
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`}>
                          {item.label}
                        </span>
                      </div>
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        ) : (
          <Menu className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        )}
      </button>

      {/* Mobile Logo */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg"
        >
          <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 fill-amber-600 dark:fill-amber-400" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 h-full w-80 bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl border-r border-white/20 dark:border-gray-700/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 pt-24 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      currentPage === item.id ? 'bg-amber-500/20' : 'hover:bg-amber-500/20'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 transition-colors ${
                      currentPage === item.id
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                    }`} />
                    <span className={`font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                    }`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
