import { motion } from 'motion/react';
import { Layers, Code2, BookOpen } from 'lucide-react';

interface LayoutShowcaseGlassProps {
  darkMode: boolean;
}

export default function LayoutShowcaseGlass({ darkMode }: LayoutShowcaseGlassProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Split Screen Layout
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Modern, award-winning layout design with glass morphism
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Split Screen Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-4 border-b border-white/10 dark:border-gray-700/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Split Screen Homepage</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Panel */}
            <div className="relative p-8 lg:p-12 bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/10 backdrop-blur-sm" />
              
              <div className="relative space-y-6">
                <div className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
                  <span className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">LEFT PANEL - STICKY</span>
                </div>

                <div>
                  <div className="h-8 bg-gradient-to-r from-emerald-600/40 to-transparent rounded mb-3 w-3/4" />
                  <div className="h-8 bg-gray-300/20 dark:bg-gray-700/20 rounded mb-3 w-full" />
                  <div className="h-8 bg-gray-300/20 dark:bg-gray-700/20 rounded mb-6 w-5/6" />
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full" />
                  <div className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full" />
                  <div className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-4/5" />
                </div>

                <div className="flex gap-3 pt-6">
                  <div className="h-10 bg-gradient-to-r from-emerald-600/40 to-emerald-500/40 backdrop-blur-sm rounded-lg w-32" />
                  <div className="h-10 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg w-32" />
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="relative p-8 border-l border-white/10 dark:border-gray-700/20 bg-white/5 dark:bg-gray-900/10">
              <div className="absolute inset-0 backdrop-blur-sm" />
              
              <div className="relative space-y-4">
                <div className="inline-block px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-full">
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">RIGHT PANEL - SCROLLABLE</span>
                </div>

                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 rounded-xl"
                  >
                    <div className="h-3 bg-emerald-500/30 rounded w-24 mb-2" />
                    <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full mb-2" />
                    <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-900/10 dark:bg-gray-900/40 backdrop-blur-sm border-t border-white/10 dark:border-gray-700/20">
            <code className="text-xs text-gray-600 dark:text-gray-400">
              50/50 split • Left panel sticky • Right panel scrollable • Glass divider
            </code>
          </div>
        </motion.div>

        {/* Blog List Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-4 border-b border-white/10 dark:border-gray-700/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Blog List with Glass Cards</span>
            </div>
          </div>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="h-8 bg-gradient-to-r from-emerald-600/40 to-transparent rounded w-48 mb-2" />
                <div className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-64" />
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg">
                  <div className="h-4 w-20 bg-gray-300/30 dark:bg-gray-700/30 rounded" />
                </div>
              </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group p-5 bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className="h-2 bg-emerald-500/30 rounded w-16 mb-3" />
                  <div className="h-4 bg-gray-300/30 dark:bg-gray-700/30 rounded mb-2 w-full" />
                  <div className="h-3 bg-gray-300/20 dark:bg-gray-700/20 rounded w-3/4 mb-3" />
                  <div className="flex gap-2">
                    <div className="h-2 bg-gray-300/20 dark:bg-gray-700/20 rounded w-16" />
                    <div className="h-2 bg-gray-300/20 dark:bg-gray-700/20 rounded w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Post Detail Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-4 border-b border-white/10 dark:border-gray-700/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Post Detail with TOC Sidebar</span>
            </div>
          </div>

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8 pb-8 border-b border-white/10 dark:border-gray-700/20">
              <div className="flex justify-center gap-2 mb-4">
                <div className="h-6 w-20 bg-emerald-500/30 rounded-full" />
              </div>
              <div className="h-10 bg-gradient-to-r from-emerald-600/40 via-transparent to-transparent rounded mx-auto w-2/3 mb-4" />
              <div className="flex justify-center gap-4 text-sm">
                <div className="h-3 w-24 bg-gray-300/30 dark:bg-gray-700/30 rounded" />
                <div className="h-3 w-24 bg-gray-300/30 dark:bg-gray-700/30 rounded" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full"
                  />
                ))}
                
                {/* Code Block Example */}
                <div className="p-4 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 rounded-xl">
                  <div className="space-y-2">
                    <div className="h-2 bg-emerald-500/30 rounded w-3/4" />
                    <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full" />
                    <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-5/6" />
                  </div>
                </div>

                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-3 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full"
                  />
                ))}
              </div>

              {/* Sidebar - TOC */}
              <div className="lg:block hidden">
                <div className="sticky top-24 p-4 bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl">
                  <div className="h-4 bg-emerald-500/30 rounded w-24 mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Design Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Design System Tokens</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Glass Effects */}
            <div className="p-6 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 rounded-xl">
              <h4 className="font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Glass Effect CSS</h4>
              <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto bg-gray-900/20 dark:bg-gray-900/40 p-4 rounded-lg">
{`.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

.glass-dark {
  background: rgba(17,24,39,0.2);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(75,85,99,0.2);
}`}
              </pre>
            </div>

            {/* Emerald Colors */}
            <div className="p-6 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 rounded-xl">
              <h4 className="font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Emerald Palette</h4>
              <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto bg-gray-900/20 dark:bg-gray-900/40 p-4 rounded-lg">
{`:root {
  --emerald-50: #ecfdf5;
  --emerald-400: #34d399;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
}

/* Usage */
.primary {
  color: var(--emerald-600);
}

.gradient {
  background: linear-gradient(
    to right,
    var(--emerald-600),
    var(--emerald-500)
  );
}`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
