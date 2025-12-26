import { motion } from 'motion/react';
import { Calendar, Clock, User, Tag, Share2, Bookmark, Heart, MessageCircle, ArrowLeft, ChevronRight } from 'lucide-react';
import { DesignVariant } from '../../App';

interface SinglePostPageProps {
  darkMode: boolean;
  designVariant: DesignVariant;
  setCurrentPage: (page: string) => void;
}

export default function SinglePostPage({ darkMode, designVariant, setCurrentPage }: SinglePostPageProps) {
  const tableOfContents = [
    { id: 'intro', title: 'Giới thiệu', level: 1 },
    { id: 'what-is-hugo', title: 'Hugo là gì?', level: 1 },
    { id: 'features', title: 'Tính năng nổi bật', level: 2 },
    { id: 'why-hugo', title: 'Tại sao chọn Hugo?', level: 1 },
    { id: 'getting-started', title: 'Bắt đầu với Hugo', level: 1 },
    { id: 'installation', title: 'Cài đặt', level: 2 },
    { id: 'first-site', title: 'Tạo site đầu tiên', level: 2 },
    { id: 'conclusion', title: 'Kết luận', level: 1 },
  ];

  const relatedPosts = [
    { title: 'React Hooks Best Practices', category: 'JavaScript', readTime: '12 phút' },
    { title: 'Getting Started with Spring Boot', category: 'Java', readTime: '8 phút' },
    { title: 'TypeScript Tips & Tricks', category: 'JavaScript', readTime: '6 phút' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setCurrentPage('all-posts')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách
        </motion.button>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                {/* Category */}
                <div className="mb-4">
                  <span className="px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-sm font-medium rounded-full">
                    JavaScript
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                  Welcome to My Portfolio Blog
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b border-white/10 dark:border-gray-700/20">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>Edward</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>01/01/2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>1 phút đọc</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['hugo', 'web-development', 'portfolio', 'static-site'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setCurrentPage('tags')}
                      className="px-3 py-1.5 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-500/20 hover:border-amber-500/30 transition-all"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">24</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">5</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/30 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 lg:p-12 shadow-2xl prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 id="intro" className="text-gray-900 dark:text-white">Giới thiệu</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Chào mừng bạn đến với blog portfolio của tôi! Đây là bài viết đầu tiên giới thiệu về 
                blog này và những gì bạn có thể mong đợi từ nội dung sắp tới.
              </p>

              <h2 id="what-is-hugo" className="text-gray-900 dark:text-white mt-8">Hugo là gì?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hugo là một static site generator (SSG) được viết bằng Go, nổi tiếng với tốc độ build 
                cực nhanh và tính linh hoạt cao. Hugo cho phép bạn tạo website tĩnh từ các file Markdown.
              </p>

              <h3 id="features" className="text-gray-900 dark:text-white mt-6">Tính năng nổi bật</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Build time cực nhanh (milliseconds)</li>
                <li>Không cần database hay runtime dependencies</li>
                <li>Hỗ trợ themes và shortcodes</li>
                <li>SEO-friendly và performance tối ưu</li>
                <li>Deploy dễ dàng lên GitHub Pages, Netlify, Vercel</li>
              </ul>

              <div className="my-8 p-6 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                <p className="text-amber-700 dark:text-amber-300 mb-0">
                  💡 <strong>Pro tip:</strong> Hugo build cực nhanh, phù hợp cho blog với hàng ngàn bài viết!
                </p>
              </div>

              <h2 id="why-hugo" className="text-gray-900 dark:text-white mt-8">Tại sao chọn Hugo?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Có nhiều SSG khác như Jekyll, Gatsby, Next.js, nhưng Hugo nổi bật với:
              </p>

              <h2 id="getting-started" className="text-gray-900 dark:text-white mt-8">Bắt đầu với Hugo</h2>
              
              <h3 id="installation" className="text-gray-900 dark:text-white mt-6">Cài đặt</h3>
              <div className="bg-gray-900/40 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 my-4">
                <code className="text-amber-400 text-sm">
                  # macOS<br />
                  brew install hugo<br /><br />
                  # Windows<br />
                  choco install hugo-extended<br /><br />
                  # Linux<br />
                  sudo apt-get install hugo
                </code>
              </div>

              <h3 id="first-site" className="text-gray-900 dark:text-white mt-6">Tạo site đầu tiên</h3>
              <div className="bg-gray-900/40 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 my-4">
                <code className="text-amber-400 text-sm">
                  hugo new site my-blog<br />
                  cd my-blog<br />
                  hugo server
                </code>
              </div>

              <h2 id="conclusion" className="text-gray-900 dark:text-white mt-8">Kết luận</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hugo là một công cụ tuyệt vời để tạo blog portfolio. Trong các bài viết tiếp theo, 
                tôi sẽ chia sẻ nhiều hơn về Hugo và các kỹ thuật web development khác!
              </p>
            </motion.article>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Bài viết liên quan
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((post, index) => (
                  <button
                    key={index}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-left p-5 bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-xl hover:bg-white/10 dark:hover:bg-gray-900/30 transition-all hover:-translate-y-1"
                  >
                    <div className="text-xs text-amber-600 dark:text-amber-400 mb-2">{post.category}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Table of Contents - Sticky */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-32"
            >
              <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-amber-600 to-amber-400 rounded-full" />
                  Mục lục
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-2 text-sm hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        item.level === 2 ? 'pl-4' : ''
                      } text-gray-600 dark:text-gray-400 hover:translate-x-1 duration-200`}
                    >
                      <div className="flex items-center gap-2">
                        {item.level === 2 && <ChevronRight className="w-3 h-3" />}
                        {item.title}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Edward</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Developer đam mê Java & JavaScript
                  </p>
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all"
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
