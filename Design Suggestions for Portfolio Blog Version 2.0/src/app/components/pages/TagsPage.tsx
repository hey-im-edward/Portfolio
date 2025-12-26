import { motion } from 'motion/react';
import { Hash, TrendingUp, Search } from 'lucide-react';
import { DesignVariant } from '../../App';

interface TagsPageProps {
  darkMode: boolean;
  designVariant: DesignVariant;
  setCurrentPage: (page: string) => void;
}

export default function TagsPage({ darkMode, designVariant, setCurrentPage }: TagsPageProps) {
  const tags = [
    { name: 'react', count: 24, trending: true },
    { name: 'javascript', count: 32, trending: true },
    { name: 'java', count: 28, trending: true },
    { name: 'spring-boot', count: 18, trending: false },
    { name: 'typescript', count: 16, trending: true },
    { name: 'web-development', count: 22, trending: false },
    { name: 'frontend', count: 20, trending: false },
    { name: 'backend', count: 19, trending: false },
    { name: 'microservices', count: 12, trending: false },
    { name: 'database', count: 15, trending: false },
    { name: 'docker', count: 14, trending: true },
    { name: 'api', count: 17, trending: false },
    { name: 'nodejs', count: 13, trending: false },
    { name: 'mongodb', count: 10, trending: false },
    { name: 'postgresql', count: 11, trending: false },
    { name: 'git', count: 9, trending: false },
    { name: 'testing', count: 8, trending: false },
    { name: 'performance', count: 7, trending: false },
    { name: 'security', count: 6, trending: true },
    { name: 'clean-code', count: 14, trending: false },
    { name: 'design-patterns', count: 12, trending: false },
    { name: 'algorithms', count: 8, trending: false },
    { name: 'data-structures', count: 7, trending: false },
    { name: 'tutorial', count: 25, trending: false },
  ];

  const popularTags = tags.filter(tag => tag.trending).sort((a, b) => b.count - a.count);
  const allTagsSorted = [...tags].sort((a, b) => b.count - a.count);

  const getTagSize = (count: number) => {
    if (count >= 25) return 'text-2xl';
    if (count >= 20) return 'text-xl';
    if (count >= 15) return 'text-lg';
    if (count >= 10) return 'text-base';
    return 'text-sm';
  };

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
                  <Hash className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Tags
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {tags.length} tags • {tags.reduce((acc, tag) => acc + tag.count, 0)} bài viết
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('blog')}
              className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all"
            >
              ← Quay lại
            </button>
          </div>

          {/* Search */}
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-4 shadow-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tags..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-amber-500/50 outline-none transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Trending Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trending Tags
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTags.slice(0, 6).map((tag, index) => (
              <motion.button
                key={tag.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setCurrentPage('all-posts')}
                className="group relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/30 rounded-xl p-6 hover:from-amber-500/20 hover:to-orange-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    #{tag.name}
                  </span>
                  <div className="px-2 py-1 bg-amber-500/20 rounded-full">
                    <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {tag.count} bài viết
                </div>
                <div className="mt-3 h-1 bg-gray-200/20 dark:bg-gray-800/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(tag.count / 32) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-amber-600 to-orange-500 rounded-full"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Tag Cloud
          </h2>
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag, index) => (
                <motion.button
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setCurrentPage('all-posts')}
                  className={`${getTagSize(tag.count)} px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-amber-500/20 hover:border-amber-500/30 hover:scale-110 transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400`}
                >
                  #{tag.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Tags List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Tất cả Tags (A-Z)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allTagsSorted.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setCurrentPage('all-posts')}
                className="group flex items-center justify-between p-4 bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {tag.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {tag.trending && (
                    <TrendingUp className="w-4 h-4 text-amber-500" />
                  )}
                  <span className="px-2 py-1 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
                    {tag.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-8 shadow-2xl text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Tag Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-2">
                {tags.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Tags</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-2">
                {tags.reduce((acc, tag) => acc + tag.count, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-2">
                {popularTags.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Trending</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-2">
                {Math.max(...tags.map(t => t.count))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Most Used</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
