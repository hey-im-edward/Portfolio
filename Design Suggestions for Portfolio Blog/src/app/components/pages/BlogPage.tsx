import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, Tag, Search } from 'lucide-react';

interface BlogPageProps {
  darkMode: boolean;
}

export default function BlogPage({ darkMode }: BlogPageProps) {
  const tags = ['Tất cả', 'hugo', 'portfolio', 'web-development'];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl shadow-lg shadow-amber-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Khám phá các bài viết về lập trình, công nghệ và kinh nghiệm thực tế.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-6 py-2 backdrop-blur-xl border rounded-full font-medium transition-all duration-300 ${
                tag === 'Tất cả'
                  ? 'bg-amber-500/20 border-amber-500/30 text-amber-600 dark:text-amber-400'
                  : 'bg-white/10 dark:bg-gray-900/30 border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 hover:border-amber-500/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Blog Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/10 backdrop-blur-sm" />
              <BookOpen className="w-20 h-20 text-amber-500/50 relative z-10" />
            </div>

            <div className="p-8">
              {/* Meta */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-sm font-medium rounded-full">
                  JavaScript
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer">
                Welcome to My Portfolio Blog
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Bài viết đầu tiên giới thiệu portfolio blog được xây dựng với Hugo - static site generator cực kỳ nhanh, mạnh mẽ và linh hoạt.
              </p>

              {/* Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-white/10 dark:border-gray-700/20">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  01/01/2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  1 phút đọc
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['hugo', 'web-development', 'portfolio'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-xs rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 hover:border-amber-500/30 transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
                Đọc bài viết
              </button>
            </div>
          </div>
        </motion.div>

        {/* Categories Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {/* Categories */}
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-500" />
              Danh mục
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-500/20 transition-colors text-gray-700 dark:text-gray-300">
                <span>JavaScript</span>
                <span className="float-right text-amber-600 dark:text-amber-400">1</span>
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-500" />
              Tags phổ biến
            </h3>
            <div className="flex flex-wrap gap-2">
              {['hugo', 'portfolio', 'web-development'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs rounded-lg cursor-pointer hover:bg-amber-500/20 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
