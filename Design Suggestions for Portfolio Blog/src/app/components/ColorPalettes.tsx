import { Card } from './ui/card';
import { Check } from 'lucide-react';

interface ColorPalettesProps {
  darkMode: boolean;
}

export default function ColorPalettes({ darkMode }: ColorPalettesProps) {
  const palettes = [
    {
      name: 'Option 1: Tech Blue',
      description: 'Professional and trustworthy. Inspired by VSCode and modern dev tools.',
      primary: [
        { name: '50', light: '#eff6ff', dark: '#1e3a5f' },
        { name: '100', light: '#dbeafe', dark: '#1e40af' },
        { name: '200', light: '#bfdbfe', dark: '#2563eb' },
        { name: '300', light: '#93c5fd', dark: '#3b82f6' },
        { name: '400', light: '#60a5fa', dark: '#60a5fa' },
        { name: '500', light: '#3b82f6', dark: '#93c5fd' },
        { name: '600', light: '#2563eb', dark: '#bfdbfe' },
        { name: '700', light: '#1d4ed8', dark: '#dbeafe' },
        { name: '800', light: '#1e40af', dark: '#eff6ff' },
        { name: '900', light: '#1e3a8a', dark: '#f0f9ff' },
      ],
      accent: '#8b5cf6', // Purple
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      neutral: '#6b7280',
    },
    {
      name: 'Option 2: Emerald Developer',
      description: 'Fresh and energetic. Great for showcasing creativity and innovation.',
      primary: [
        { name: '50', light: '#ecfdf5', dark: '#064e3b' },
        { name: '100', light: '#d1fae5', dark: '#065f46' },
        { name: '200', light: '#a7f3d0', dark: '#047857' },
        { name: '300', light: '#6ee7b7', dark: '#059669' },
        { name: '400', light: '#34d399', dark: '#10b981' },
        { name: '500', light: '#10b981', dark: '#34d399' },
        { name: '600', light: '#059669', dark: '#6ee7b7' },
        { name: '700', light: '#047857', dark: '#a7f3d0' },
        { name: '800', light: '#065f46', dark: '#d1fae5' },
        { name: '900', light: '#064e3b', dark: '#ecfdf5' },
      ],
      accent: '#f59e0b', // Amber
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      neutral: '#6b7280',
    },
    {
      name: 'Option 3: Monochrome Pro',
      description: 'Minimal and timeless. Focus on content with subtle color accents.',
      primary: [
        { name: '50', light: '#f9fafb', dark: '#0f172a' },
        { name: '100', light: '#f3f4f6', dark: '#1e293b' },
        { name: '200', light: '#e5e7eb', dark: '#334155' },
        { name: '300', light: '#d1d5db', dark: '#475569' },
        { name: '400', light: '#9ca3af', dark: '#64748b' },
        { name: '500', light: '#6b7280', dark: '#94a3b8' },
        { name: '600', light: '#4b5563', dark: '#cbd5e1' },
        { name: '700', light: '#374151', dark: '#e2e8f0' },
        { name: '800', light: '#1f2937', dark: '#f1f5f9' },
        { name: '900', light: '#111827', dark: '#f8fafc' },
      ],
      accent: '#8b5cf6', // Purple for links/CTAs
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      neutral: '#6b7280',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Color Palettes</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Choose a primary color palette for your portfolio. Each includes complete shades for both light and dark modes, plus semantic colors.
        </p>
      </div>

      {palettes.map((palette, paletteIndex) => (
        <Card key={paletteIndex} className="p-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">{palette.name}</h4>
            <p className="text-gray-600 dark:text-gray-400">{palette.description}</p>
          </div>

          {/* Primary Colors */}
          <div className="space-y-4">
            <h5 className="font-medium">Primary Scale</h5>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {palette.primary.map((color) => (
                <div key={color.name}>
                  <div
                    className="h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: darkMode ? color.dark : color.light }}
                  />
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mt-8 space-y-4">
            <h5 className="font-medium">Semantic Colors</h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div
                  className="h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                  style={{ backgroundColor: palette.accent }}
                />
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Accent</p>
              </div>
              <div>
                <div
                  className="h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                  style={{ backgroundColor: palette.success }}
                />
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Success</p>
              </div>
              <div>
                <div
                  className="h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                  style={{ backgroundColor: palette.warning }}
                />
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Warning</p>
              </div>
              <div>
                <div
                  className="h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                  style={{ backgroundColor: palette.error }}
                />
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Error</p>
              </div>
            </div>
          </div>

          {/* CSS Variables Example */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-sm font-medium mb-2">CSS Variables (for Hugo):</p>
            <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
              {`:root {
  --color-primary-500: ${palette.primary[4].light};
  --color-accent: ${palette.accent};
  --color-success: ${palette.success};
  --color-warning: ${palette.warning};
  --color-error: ${palette.error};
}

[data-theme="dark"] {
  --color-primary-500: ${palette.primary[4].dark};
}`}
            </pre>
          </div>
        </Card>
      ))}

      {/* Usage Guidelines */}
      <Card className="p-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Usage Guidelines
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Use primary colors for main UI elements (buttons, links, highlights)</li>
          <li>• Accent color for interactive elements and CTAs</li>
          <li>• Semantic colors for status messages and alerts</li>
          <li>• Keep neutral grays for text and borders</li>
          <li>• Test contrast ratios for accessibility (WCAG AA: 4.5:1 for text)</li>
        </ul>
      </Card>
    </div>
  );
}
