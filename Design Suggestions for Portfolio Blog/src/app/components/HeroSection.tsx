import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Code2 } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Glass Panel with Content */}
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Developer & Designer
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                  Building the
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Future of Web
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Full-stack developer specializing in modern web technologies. 
                Creating beautiful, performant applications with Java and JavaScript.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-medium overflow-hidden shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="px-8 py-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                  Read Blog
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 mt-8 pt-8 border-t border-white/10 dark:border-gray-700/20"
              >
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Featured Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            {/* Floating Cards Stack */}
            <div className="relative space-y-6">
              {/* Card 1 - Code Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Work</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-emerald-500/30 rounded w-3/4" />
                  <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-full" />
                  <div className="h-2 bg-gray-300/30 dark:bg-gray-700/30 rounded w-5/6" />
                </div>
              </motion.div>

              {/* Card 2 - Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Projects', value: '50+' },
                    { label: 'Posts', value: '120+' },
                    { label: 'Years', value: '5+' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-emerald-500/30 rounded-full p-1"
        >
          <div className="w-1.5 h-2 bg-emerald-500 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
