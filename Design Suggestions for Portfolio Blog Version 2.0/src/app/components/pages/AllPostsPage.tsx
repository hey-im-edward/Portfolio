import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, Search, SlidersHorizontal } from 'lucide-react';
import { DesignVariant } from '../../App';

interface AllPostsPageProps {
  darkMode: boolean;
  designVariant: DesignVariant;
  setCurrentPage: (page: string) => void;
}

export default function AllPostsPage({ darkMode, designVariant, setCurrentPage }: AllPostsPageProps) {
  // Mock data
  const posts = [
    {
      id: 1,
      title: 'Welcome to My Portfolio Blog',
      excerpt: 'Bài viết đầu tiên giới thiệu portfolio blog được xây dựng với Hugo - static site generator cực kỳ nhanh, mạnh mẽ và linh hoạt.',
      category: 'JavaScript',
      tags: ['hugo', 'web-development', 'portfolio'],
      date: '01/01/2025',
      readTime: '1 phút đọc',
      thumbnail: 'gradient',
    },
    {
      id: 2,
      title: 'Getting Started with Spring Boot',
      excerpt: 'Hướng dẫn chi tiết cách khởi tạo và cấu hình một Spring Boot application từ đầu với best practices.',
      category: 'Java',
      tags: ['spring-boot', 'java', 'backend'],
      date: '05/01/2025',
      readTime: '8 phút đọc',
      thumbnail: 'gradient',
    },
    {
      id: 3,
      title: 'React Hooks Best Practices',
      excerpt: 'Tổng hợp các best practices khi sử dụng React Hooks trong dự án thực tế, từ useState đến custom hooks.',
      category: 'JavaScript',
      tags: ['react', 'javascript', 'frontend'],
      date: '10/01/2025',
      readTime: '12 phút đọc',
      thumbnail: 'gradient',
    },
    {
      id: 4,
      title: 'Microservices Architecture with Java',
      excerpt: 'Khám phá kiến trúc microservices và cách implement với Spring Cloud, service discovery, API gateway.',
      category: 'Java',
      tags: ['microservices', 'java', 'architecture'],
      date: '15/01/2025',
      readTime: '15 phút đọc',
      thumbnail: 'gradient',
    },
    {
      id: 5,
      title: 'TypeScript Tips & Tricks',
      excerpt: 'Những tips và tricks hữu ích khi làm việc với TypeScript, giúp code type-safe và maintainable hơn.',
      category: 'JavaScript',
      tags: ['typescript', 'javascript', 'tips'],
      date: '20/01/2025',
      readTime: '6 phút đọc',
      thumbnail: 'gradient',
    },
    {
      id: 6,
      title: 'Database Design Principles',
      excerpt: 'Nguyên tắc thiết kế database hiệu quả: normalization, indexing, query optimization và scalability.',
      category: 'Database',
      tags: ['database', 'sql', 'design'],
      date: '25/01/2025',
      readTime: '10 phút đọc',
      thumbnail: 'gradient',
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Tất cả bài viết
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {posts.length} bài viết được xuất bản
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('blog')}
              className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all"
            >
              ← Quay lại
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-amber-500/50 outline-none transition-all"
                />
              </div>

              {/* Filter Button */}
              <button className="px-6 py-3 bg-amber-500/10 backdrop-blur-xl border border-amber-500/30 text-amber-600 dark:text-amber-400 rounded-xl hover:bg-amber-500/20 transition-all flex items-center gap-2 font-medium">
                <SlidersHorizontal className="w-5 h-5" />
                Lọc
              </button>
            </div>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setCurrentPage('single-post')}
              className="group cursor-pointer bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/10 backdrop-blur-sm" />
                <BookOpen className="w-12 h-12 text-amber-500/50 relative z-10" />
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-white/10 dark:border-gray-700/20">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 dark:bg-gray-900/30 text-xs rounded-lg text-gray-700 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs text-amber-600 dark:text-amber-400">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center gap-2"
        >
          <button className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
            ← Trước
          </button>
          <button className="px-4 py-2 bg-amber-500/20 backdrop-blur-xl border border-amber-500/30 text-amber-600 dark:text-amber-400 rounded-lg font-medium">
            1
          </button>
          <button className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
            2
          </button>
          <button className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
            3
          </button>
          <button className="px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-lg hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
            Sau →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
