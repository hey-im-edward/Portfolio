import { motion } from 'motion/react';
import { Folder, Plus } from 'lucide-react';

interface ProjectsPageProps {
  darkMode: boolean;
}

export default function ProjectsPage({ darkMode }: ProjectsPageProps) {
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
              <Folder className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Các dự án tôi đã và đang thực hiện
          </p>
        </motion.div>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full mb-6">
              <Folder className="w-12 h-12 text-amber-600 dark:text-amber-400" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Chưa có dự án nào
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Tạo dự án đầu tiên với{' '}
              <code className="px-2 py-1 bg-gray-900/20 dark:bg-gray-900/40 rounded text-amber-600 dark:text-amber-400">
                hugo new projects/my-project.md
              </code>
            </p>

            <div className="p-6 bg-gray-900/10 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl text-left">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hướng dẫn tạo dự án:
              </p>
              <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>1. Chạy lệnh tạo file dự án mới</li>
                <li>2. Thêm thông tin: title, description, tech stack, demo link</li>
                <li>3. Cập nhật ảnh preview nếu có</li>
                <li>4. Build lại site để xem kết quả</li>
              </ol>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
                <Plus className="w-5 h-5" />
                Tạo dự án đầu tiên
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">💡 Gợi ý nội dung</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showcase các dự án cá nhân, open source contributions, hoặc case studies về các vấn đề kỹ thuật bạn đã giải quyết.
            </p>
          </div>

          <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">🎨 Tùy chỉnh</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Thêm tech stack, demo links, source code, ảnh screenshots để làm nổi bật dự án của bạn.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
