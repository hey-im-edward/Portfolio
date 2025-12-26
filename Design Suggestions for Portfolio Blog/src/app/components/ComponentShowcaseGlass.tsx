import { motion } from 'motion/react';
import { Calendar, Clock, Tag, Github, ExternalLink, Heart, MessageCircle, Share2, Code } from 'lucide-react';

interface ComponentShowcaseGlassProps {
  darkMode: boolean;
}

export default function ComponentShowcaseGlass({ darkMode }: ComponentShowcaseGlassProps) {
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
            Liquid Glass Components
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Modern UI components with frosted glass effect, inspired by iOS 26 design language
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Glass Buttons</h3>
          <div className="flex flex-wrap gap-4">
            {/* Primary Glass Button */}
            <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-medium overflow-hidden shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="relative z-10">Primary Action</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Glass Outline Button */}
            <button className="px-6 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Secondary
            </button>

            {/* Ghost Glass Button */}
            <button className="px-6 py-3 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Ghost
            </button>

            {/* Icon Button */}
            <button className="p-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 group shadow-lg">
              <Heart className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-900/10 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl">
            <code className="text-xs text-gray-600 dark:text-gray-400">
              backdrop-blur-xl + border border-white/20 + shadow-lg
            </code>
          </div>
        </motion.div>

        {/* Blog Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Blog Post Card</h3>
          
          <div className="group relative bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500 pointer-events-none" />
            
            <div className="relative p-6">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                  React
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Building Modern Web Apps with React 19
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                Exploring the latest features and improvements in React 19, including server components, 
                automatic batching, and new hooks for better performance.
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Dec 25, 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-gray-700/20">
                <div className="flex gap-2">
                  <button className="p-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-emerald-600 dark:text-emerald-400 group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Project Card</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Compact Project Card */}
            <div className="group relative bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500" />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-xl shadow-lg shadow-emerald-500/30">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="p-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">E-commerce Platform</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Full-stack solution with payment integration and real-time inventory
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Spring Boot', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Project Card */}
            <div className="group relative bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500" />
              
              {/* Image */}
              <div className="relative h-40 bg-gradient-to-br from-emerald-600 to-emerald-400 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium rounded-full">
                  Featured
                </div>
              </div>

              <div className="relative p-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">AI Content Generator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  ML-powered tool for generating marketing content
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'TensorFlow', 'React'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm group-hover:gap-2 flex items-center gap-1">
                    View →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Glass Form Elements</h3>
          
          <div className="max-w-md space-y-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/15 dark:focus:bg-gray-900/40 focus:border-emerald-500/50 outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 shadow-lg"
            />
            
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/15 dark:focus:bg-gray-900/40 focus:border-emerald-500/50 outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none shadow-lg"
            />

            <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-medium shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5">
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
