import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  darkMode: boolean;
}

export default function ContactPage({ darkMode }: ContactPageProps) {
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
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Liên hệ
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hãy kết nối với tôi qua các kênh dưới đây
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <Send className="w-6 h-6 text-amber-500" />
                Gửi tin nhắn
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tên của bạn
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/15 dark:focus:bg-gray-900/40 focus:border-amber-500/50 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 shadow-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/15 dark:focus:bg-gray-900/40 focus:border-amber-500/50 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 shadow-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Nội dung tin nhắn..."
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/15 dark:focus:bg-gray-900/40 focus:border-amber-500/50 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none shadow-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* GitHub */}
              <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                    <Github className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Follow và xem source code</p>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all text-sm font-medium"
                  >
                    Follow
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                    <Linkedin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kết nối chuyên nghiệp</p>
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all text-sm font-medium"
                  >
                    Connect
                  </a>
                </div>
              </div>

              {/* Twitter */}
              <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                    <Twitter className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Twitter</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Updates và thoughts</p>
                  </div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all text-sm font-medium"
                  >
                    Follow
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full mb-4">
                    <Mail className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email trực tiếp</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl text-center"
          >
            <MessageCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Phản hồi nhanh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tôi thường xuyên kiểm tra email và social media. Sẽ phản hồi trong vòng 24-48 giờ.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
