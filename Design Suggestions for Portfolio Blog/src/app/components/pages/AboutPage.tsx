import { motion } from 'motion/react';
import { User, Code2, Coffee, Zap, Heart } from 'lucide-react';

interface AboutPageProps {
  darkMode: boolean;
}

export default function AboutPage({ darkMode }: AboutPageProps) {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 82 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
  ];

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
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Về tôi
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Developer đam mê công nghệ và chia sẻ kiến thức
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Xin chào!</h2>
                <p className="text-gray-600 dark:text-gray-400">Mình là Edward</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Tôi là một developer đam mê với công nghệ web, đặc biệt là Java và JavaScript. 
                Blog này là nơi tôi chia sẻ những kiến thức, kinh nghiệm và dự án cá nhân.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tôi tin rằng việc chia sẻ kiến thức không chỉ giúp người khác mà còn giúp bản thân 
                củng cố và mở rộng hiểu biết của mình. Hy vọng blog này sẽ hữu ích cho bạn!
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-amber-500" />
              Kỹ năng
            </h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200/20 dark:bg-gray-800/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full mb-4">
                <Code2 className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Lập trình</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full-stack development với Java và JavaScript
              </p>
            </div>

            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full mb-4">
                <Coffee className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Học hỏi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Luôn cập nhật công nghệ và best practices mới
              </p>
            </div>

            <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full mb-4">
                <Heart className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Chia sẻ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Viết blog và đóng góp cho cộng đồng
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/10 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Node.js',
                'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Hugo', 'Tailwind CSS'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-700 dark:text-amber-300 text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-8 shadow-2xl text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Muốn kết nối?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tôi luôn sẵn sàng trao đổi về công nghệ, dự án hoặc cơ hội hợp tác
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
              Liên hệ với tôi
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
