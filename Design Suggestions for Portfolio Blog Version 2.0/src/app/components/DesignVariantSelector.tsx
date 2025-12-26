import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, Circle, Zap, Crown } from 'lucide-react';
import { DesignVariant } from '../App';

interface DesignVariantSelectorProps {
  currentVariant: DesignVariant;
  onSelectVariant: (variant: DesignVariant) => void;
  onClose: () => void;
}

export default function DesignVariantSelector({ currentVariant, onSelectVariant, onClose }: DesignVariantSelectorProps) {
  const variants = [
    {
      id: 'glass' as DesignVariant,
      name: 'Liquid Glass',
      description: 'Modern glassmorphism với frosted effects, lấy cảm hứng từ iOS design',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-500',
      preview: 'bg-white/10 backdrop-blur-2xl border-2 border-white/20',
    },
    {
      id: 'minimal' as DesignVariant,
      name: 'Minimal Clean',
      description: 'Typography-focused, clean lines, tối giản nhưng sang trọng',
      icon: Circle,
      color: 'from-gray-600 to-gray-400',
      preview: 'bg-white border-2 border-gray-200',
    },
    {
      id: 'bold' as DesignVariant,
      name: 'Bold & Vibrant',
      description: 'Màu sắc mạnh mẽ, gradients táo bạo, dynamic animations',
      icon: Zap,
      color: 'from-red-500 via-orange-500 to-amber-500',
      preview: 'bg-gradient-to-br from-amber-100 to-red-100 border-2 border-amber-300',
    },
    {
      id: 'elegant' as DesignVariant,
      name: 'Elegant Premium',
      description: 'Tinh tế, sang trọng với subtle animations và refined details',
      icon: Crown,
      color: 'from-slate-600 via-amber-600 to-slate-500',
      preview: 'bg-slate-50 border-2 border-slate-200',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 max-w-5xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Choose Design Variant
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Chọn phong cách thiết kế phù hợp với portfolio của bạn
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full hover:bg-red-500/20 hover:border-red-500/30 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Variants Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((variant) => {
              const Icon = variant.icon;
              const isSelected = currentVariant === variant.id;

              return (
                <motion.button
                  key={variant.id}
                  onClick={() => onSelectVariant(variant.id)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500/50 shadow-lg shadow-amber-500/20'
                      : 'bg-white/5 dark:bg-gray-900/20 border-white/10 dark:border-gray-700/20 hover:border-amber-500/30'
                  }`}
                >
                  {/* Selected Badge */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${variant.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Name & Description */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {variant.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {variant.description}
                  </p>

                  {/* Preview Box */}
                  <div className={`h-24 rounded-lg ${variant.preview} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-2 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent rounded-full" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                      <div className="h-8 flex-1 bg-gray-300/30 dark:bg-gray-600/30 rounded" />
                      <div className="h-8 flex-1 bg-gray-300/30 dark:bg-gray-600/30 rounded" />
                      <div className="h-8 flex-1 bg-gray-300/30 dark:bg-gray-600/30 rounded" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl">
            <p className="text-sm text-center text-amber-700 dark:text-amber-300">
              💡 Mỗi variant có style riêng biệt về colors, spacing, typography và animations
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
