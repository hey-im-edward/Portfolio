import { motion } from 'motion/react';
import { Heart, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 fill-amber-600 dark:fill-amber-400" />
              <span className="font-semibold text-gray-900 dark:text-white">Portfolio - Java & JavaScript</span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              © 2025 Portfolio - Java & JavaScript. Built with{' '}
              <a 
                href="https://gohugo.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                Hugo
              </a>
              {' '}•{' '}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                GitHub
              </a>
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>by Edward</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
