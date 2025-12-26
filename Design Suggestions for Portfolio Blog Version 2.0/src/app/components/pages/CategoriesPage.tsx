import { motion } from 'motion/react';
import { Folder, BookOpen, ArrowRight } from 'lucide-react';
import { DesignVariant } from '../../App';

interface CategoriesPageProps {
  darkMode: boolean;
  designVariant: DesignVariant;
  setCurrentPage: (page: string) => void;
}

export default function CategoriesPage({ darkMode, designVariant, setCurrentPage }: CategoriesPageProps) {
  const categories = [
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Modern JavaScript, ES6+, frameworks và libraries',
      postCount: 12,
      color: 'from-yellow-500 to-amber-500',
      icon: '⚡',
    },
    {
      id: 'java',
      name: 'Java',
      description: 'Spring Boot, JPA, microservices và enterprise development',
      postCount: 15,
      color: 'from-red-500 to-orange-500',
      icon: '☕',
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'HTML, CSS, responsive design và modern web practices',
      postCount: 8,
      color: 'from-blue-500 to-cyan-500',
      icon: '🌐',
    },
    {
      id: 'database',
      name: 'Database',
      description: 'SQL, NoSQL, design patterns và optimization',
      postCount: 6,
      color: 'from-green-500 to-emerald-500',
      icon: '🗄️',
    },
    {
      id: 'devops',
      name: 'DevOps',
      description: 'Docker, CI/CD, cloud deployment và automation',
      postCount: 10,
      color: 'from-purple-500 to-pink-500',
      icon: '🚀',
    },
    {
      id: 'architecture',
      name: 'Software Architecture',
      description: 'Design patterns, clean code và system design',
      postCount: 7,
      color: 'from-indigo-500 to-blue-500',
      icon: '🏗️',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl shadow-lg shadow-amber-500/30">
                  <Folder className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Danh mục
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Khám phá bài viết theo chủ đề
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('blog')}
              className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all"
            >
              ← Quay lại
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-1">
                {categories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Danh mục</div>
            </div>
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-1">
                {categories.reduce((acc, cat) => acc + cat.postCount, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bài viết</div>
            </div>
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-1">
                {Math.max(...categories.map(c => c.postCount))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nhiều nhất</div>
            </div>
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-1">
                {(categories.reduce((acc, cat) => acc + cat.postCount, 0) / categories.length).toFixed(0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Trung bình</div>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setCurrentPage('all-posts')}
              className="group text-left bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2"
            >
              {/* Icon & Count */}
              <div className="flex items-start justify-between mb-6">
                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div className="px-3 py-1 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {category.postCount} bài
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {category.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200/20 dark:bg-gray-800/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(category.postCount / 20) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                  />
                </div>
              </div>

              {/* View Button */}
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium group-hover:gap-3 transition-all">
                <span>Xem bài viết</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Popular Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Danh mục phổ biến nhất
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {categories
              .sort((a, b) => b.postCount - a.postCount)
              .slice(0, 3)
              .map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-4 p-4 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl"
                >
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">{category.name}</div>
                    <div className="text-sm text-amber-600 dark:text-amber-400">{category.postCount} bài viết</div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
