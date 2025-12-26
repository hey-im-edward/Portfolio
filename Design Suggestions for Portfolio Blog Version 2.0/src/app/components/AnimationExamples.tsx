import { Card } from './ui/card';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnimationExamplesProps {
  darkMode: boolean;
}

export default function AnimationExamples({ darkMode }: AnimationExamplesProps) {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Animation & Motion</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Subtle animations that enhance user experience without distraction. All examples use CSS only.
        </p>
      </div>

      {/* Hover Effects */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Hover Effects</h4>

        <div className="space-y-8">
          {/* Button Hovers */}
          <div>
            <h5 className="font-medium mb-4">Button Hover States</h5>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Color Change
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Lift Up
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-200">
                Scale
              </button>
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">Slide Fill</span>
                <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>transition-colors, transform translate, scale, and slide effects</code>
            </div>
          </div>

          {/* Card Hovers */}
          <div>
            <h5 className="font-medium mb-4">Card Hover States</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300">
                <h3 className="font-semibold mb-2">Border Color</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Simple border highlight</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold mb-2">Lift & Shadow</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Elevate on hover</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors duration-300">
                <h3 className="font-semibold mb-2">Background</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Subtle background tint</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>Recommended: Combine lift + shadow for cards, border color for links</code>
            </div>
          </div>

          {/* Link Hovers */}
          <div>
            <h5 className="font-medium mb-4">Link & Text Hovers</h5>
            <div className="space-y-4">
              <div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline transition-all">
                  Simple Underline
                </a>
              </div>
              <div>
                <a href="#" className="text-blue-600 dark:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300">
                  Animated Underline
                </a>
              </div>
              <div>
                <a href="#" className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>Use animated underline for main content links, arrow for CTAs</code>
            </div>
          </div>
        </div>
      </Card>

      {/* Page Transitions */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Page Transitions (Optional)</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Subtle entrance animations for page elements. Keep duration under 300ms for snappy feel.
        </p>

        <div className="space-y-6">
          <div>
            <h5 className="font-medium mb-3">Fade In (Content Entry)</h5>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 dark:text-gray-300">Content fades in smoothly</p>
              </motion.div>
            </div>
            <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>@keyframes fadeIn &#123; from &#123; opacity: 0; &#125; to &#123; opacity: 1; &#125; &#125;</code>
            </div>
          </div>

          <div>
            <h5 className="font-medium mb-3">Slide Up (Staggered)</h5>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  Item {i} slides up
                </motion.div>
              ))}
            </div>
            <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>animation-delay: calc(0.1s * var(--index)) for stagger effect</code>
            </div>
          </div>
        </div>
      </Card>

      {/* Micro-interactions */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Micro-interactions</h4>
        
        <div className="space-y-8">
          {/* Loading States */}
          <div>
            <h5 className="font-medium mb-4">Loading States</h5>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Spinner</p>
                <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-800 border-t-blue-600 rounded-full animate-spin" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Skeleton (for content loading)</p>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-5/6" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Progress Bar</p>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Focus States */}
          <div>
            <h5 className="font-medium mb-4">Focus States (Accessibility)</h5>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Focus me"
                className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-950 outline-none transition-all">
                Focus Ring Button
              </button>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
              <code>Always provide visible focus states for keyboard navigation</code>
            </div>
          </div>

          {/* Active States */}
          <div>
            <h5 className="font-medium mb-4">Active/Pressed States</h5>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg active:scale-95 transition-transform">
                Scale Down
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg active:brightness-90 transition-all">
                Brightness
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Theme Toggle Animation */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Theme Toggle Animation</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Smooth transition when switching between light and dark modes.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 transition-colors duration-300">
            <p className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
              All elements should transition smoothly
            </p>
          </div>
          
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
            <pre className="text-gray-600 dark:text-gray-400 overflow-x-auto">
{`/* Add to root element */
* {
  transition: background-color 300ms ease,
              color 300ms ease,
              border-color 300ms ease;
}

/* Prevent transition on page load */
.preload * {
  transition: none !important;
}`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Best Practices */}
      <Card className="p-8 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          Animation Best Practices
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Keep animations under 300ms for interactive elements (buttons, links)</li>
          <li>• Use 500-700ms for page transitions and larger movements</li>
          <li>• Prefer CSS transitions over JavaScript for better performance</li>
          <li>• Use <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">transform</code> and <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">opacity</code> for smooth 60fps animations</li>
          <li>• Always provide <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">prefers-reduced-motion</code> alternative for accessibility</li>
          <li>• Avoid animating <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">width</code>, <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">height</code>, or <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">top/left</code> (causes layout recalculation)</li>
          <li>• Use <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded">will-change</code> sparingly for complex animations</li>
        </ul>

        <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg">
          <p className="text-sm font-medium mb-2">Accessibility CSS:</p>
          <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </pre>
        </div>
      </Card>

      {/* Easing Functions */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Easing Functions</h4>
        <div className="space-y-4">
          {[
            { name: 'ease-out', value: 'easeOut', cssValue: 'cubic-bezier(0, 0, 0.2, 1)', usage: 'Elements entering screen' },
            { name: 'ease-in', value: 'easeIn', cssValue: 'cubic-bezier(0.4, 0, 1, 1)', usage: 'Elements exiting screen' },
            { name: 'ease-in-out', value: 'easeInOut', cssValue: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: 'Neutral movements' },
            { name: 'ease', value: 'linear', cssValue: 'cubic-bezier(0.25, 0.1, 0.25, 1)', usage: 'Default, general use' },
          ].map((easing) => (
            <div key={easing.name} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">{easing.name}</div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-8 bg-blue-600 rounded-full"
                    animate={{ left: ['0%', '90%', '0%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: easing.value,
                    }}
                  />
                </div>
              </div>
              <div className="w-48 text-xs text-gray-600 dark:text-gray-400">{easing.usage}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm font-medium mb-2">CSS Implementation:</p>
          <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
{`/* Easing variables for CSS */
:root {
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Usage */
.element {
  transition: transform 300ms var(--ease-out);
}`}
          </pre>
        </div>
      </Card>
    </div>
  );
}