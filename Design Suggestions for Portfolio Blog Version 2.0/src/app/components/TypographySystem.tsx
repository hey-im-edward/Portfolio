import { Card } from './ui/card';
import { Type } from 'lucide-react';

interface TypographySystemProps {
  darkMode: boolean;
}

export default function TypographySystem({ darkMode }: TypographySystemProps) {
  const fontPairings = [
    {
      name: 'Option 1: Inter + JetBrains Mono',
      description: 'Modern and highly readable. Perfect for developer content.',
      headingFont: 'Inter',
      bodyFont: 'Inter',
      codeFont: 'JetBrains Mono',
      googleFontsImport: '@import url(\'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap\');',
      styles: {
        heading: 'font-family: Inter, sans-serif;',
        body: 'font-family: Inter, sans-serif;',
        code: 'font-family: "JetBrains Mono", monospace;',
      }
    },
    {
      name: 'Option 2: Manrope + Fira Code',
      description: 'Geometric and professional. Clean modern aesthetic.',
      headingFont: 'Manrope',
      bodyFont: 'Manrope',
      codeFont: 'Fira Code',
      googleFontsImport: '@import url(\'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap\');',
      styles: {
        heading: 'font-family: Manrope, sans-serif;',
        body: 'font-family: Manrope, sans-serif;',
        code: 'font-family: "Fira Code", monospace;',
      }
    },
    {
      name: 'Option 3: System Fonts',
      description: 'Native feel with zero load time. Best performance.',
      headingFont: 'System UI',
      bodyFont: 'System UI',
      codeFont: 'System Mono',
      googleFontsImport: '/* No external fonts needed */',
      styles: {
        heading: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
        body: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
        code: 'font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", monospace;',
      }
    }
  ];

  const typeScale = [
    { name: 'Display', size: '4rem', lineHeight: '1.1', usage: 'Hero headings' },
    { name: 'H1', size: '3rem', lineHeight: '1.2', usage: 'Page titles' },
    { name: 'H2', size: '2.25rem', lineHeight: '1.3', usage: 'Section headings' },
    { name: 'H3', size: '1.875rem', lineHeight: '1.4', usage: 'Sub-sections' },
    { name: 'H4', size: '1.5rem', lineHeight: '1.5', usage: 'Card titles' },
    { name: 'H5', size: '1.25rem', lineHeight: '1.5', usage: 'Small headings' },
    { name: 'Body Large', size: '1.125rem', lineHeight: '1.75', usage: 'Intro paragraphs' },
    { name: 'Body', size: '1rem', lineHeight: '1.75', usage: 'Default text' },
    { name: 'Body Small', size: '0.875rem', lineHeight: '1.625', usage: 'Captions, meta' },
    { name: 'Caption', size: '0.75rem', lineHeight: '1.5', usage: 'Labels, tags' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Typography System</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Font pairings optimized for code-heavy content with excellent readability.
        </p>
      </div>

      {/* Font Pairings */}
      {fontPairings.map((pairing, index) => (
        <Card key={index} className="p-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">{pairing.name}</h4>
            <p className="text-gray-600 dark:text-gray-400">{pairing.description}</p>
          </div>

          {/* Font Preview */}
          <div className="space-y-6 mb-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Heading Font: {pairing.headingFont}</p>
              <p className="text-3xl font-semibold">The quick brown fox jumps</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Body Font: {pairing.bodyFont}</p>
              <p className="text-base">
                This is how your blog content will look. It should be comfortable to read for extended periods. 
                Good typography enhances the reading experience.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Code Font: {pairing.codeFont}</p>
              <code className="block p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm">
                const greeting = "Hello, World!";
                <br />
                console.log(greeting);
              </code>
            </div>
          </div>

          {/* CSS Implementation */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-sm font-medium mb-2">Implementation:</p>
            <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
              {`/* In your Hugo assets/css/variables.css */
${pairing.googleFontsImport}

:root {
  --font-heading: ${pairing.styles.heading.replace('font-family: ', '').replace(';', '')};
  --font-body: ${pairing.styles.body.replace('font-family: ', '').replace(';', '')};
  --font-code: ${pairing.styles.code.replace('font-family: ', '').replace(';', '')};
}`}
            </pre>
          </div>
        </Card>
      ))}

      {/* Type Scale */}
      <Card className="p-8">
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Type Scale</h4>
          <p className="text-gray-600 dark:text-gray-400">
            Harmonious size progression for all text elements. Based on 1rem = 16px.
          </p>
        </div>

        <div className="space-y-6">
          {typeScale.map((type, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-32">
                    {type.name}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {type.size} / {type.lineHeight}
                  </span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{type.usage}</span>
              </div>
              <p style={{ fontSize: type.size, lineHeight: type.lineHeight }}>
                Aa
              </p>
            </div>
          ))}
        </div>

        {/* CSS Variables */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm font-medium mb-2">CSS Variables:</p>
          <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
            {`:root {
  /* Font sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 4rem;
  
  /* Line heights */
  --leading-tight: 1.1;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.75;
  
  /* Letter spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}`}
          </pre>
        </div>
      </Card>

      {/* Best Practices */}
      <Card className="p-8 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Type className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          Typography Best Practices
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Keep line length between 60-80 characters for optimal readability</li>
          <li>• Use 1.5-1.75 line height for body text</li>
          <li>• Increase letter spacing slightly for uppercase text</li>
          <li>• Use font weights meaningfully: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)</li>
          <li>• Ensure sufficient contrast: 4.5:1 for normal text, 3:1 for large text</li>
          <li>• Use max-width on text containers (65-75ch) to prevent long lines</li>
        </ul>
      </Card>
    </div>
  );
}
