import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Star, BookOpen, Code2 } from 'lucide-react';

interface HomePageProps {
  darkMode: boolean;
}

export default function HomePage({ darkMode }: HomePageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Panel - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-amber-500/10 transition-shadow duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-block px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    👋 Xin chào!
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900 dark:text-white">
                  Mình là
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-400 bg-clip-text text-transparent">
                  Edward
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Portfolio và Blog về Java & JavaScript
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#blog"
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium overflow-hidden shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Đọc Blog
                    <BookOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a 
                  href="#about"
                  className="px-8 py-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Về tôi
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 dark:border-gray-700/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    1
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Bài viết</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Chủ đề</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    1
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Danh mục</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Recent Posts Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Bài viết mới nhất</h2>
              </div>

              {/* Latest Post Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-amber-500/50" />
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-full">
                    JavaScript
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Welcome to My Portfolio Blog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Bài viết đầu tiên giới thiệu portfolio blog được xây dựng với Hugo - static site generator cực kỳ nhanh.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>01/01/2025 • 1 phút đọc</span>
                  <span className="text-amber-600 dark:text-amber-400 hover:gap-2 flex items-center gap-1 cursor-pointer">
                    Đọc thêm →
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-400/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Danh mục
            </span>
          </h2>
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Khám phá các chủ đề</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                <span className="font-medium text-amber-600 dark:text-amber-400">JavaScript</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">1 bài viết</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Kết nối với mình
            </span>
          </h2>
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              Theo dõi blog để nhận thông báo khi có bài viết mới
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
                Follow on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
