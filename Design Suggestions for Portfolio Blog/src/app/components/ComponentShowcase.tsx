import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Github, ExternalLink, Tag, Clock, User } from 'lucide-react';

interface ComponentShowcaseProps {
  darkMode: boolean;
}

export default function ComponentShowcase({ darkMode }: ComponentShowcaseProps) {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Component Showcase</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Essential UI components for your portfolio. Three visual styles to choose from.
        </p>
      </div>

      {/* Visual Styles */}
      <Tabs defaultValue="minimal" className="space-y-8">
        <TabsList>
          <TabsTrigger value="minimal">Minimal</TabsTrigger>
          <TabsTrigger value="glass">Glassmorphism</TabsTrigger>
          <TabsTrigger value="depth">Subtle Depth</TabsTrigger>
        </TabsList>

        {/* Style 1: Minimal */}
        <TabsContent value="minimal" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Style 1: Minimal & Clean</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Flat design with sharp corners. Focus on typography and whitespace.
            </p>

            {/* Buttons */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Buttons</h5>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Primary
                </button>
                <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
                  Secondary
                </button>
                <button className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Ghost
                </button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Muted
                </button>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Sharp corners (border-radius: 0), solid colors, 2px borders</code>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Blog Post Card</h5>
              <div className="border border-gray-200 dark:border-gray-800 p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                <div className="flex gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs">
                    React
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Understanding React Hooks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive guide to useState, useEffect, and custom hooks...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Dec 25, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Navigation</h5>
              <nav className="border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-8">
                  <a href="#" className="py-3 border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium">
                    Home
                  </a>
                  <a href="#" className="py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Projects
                  </a>
                  <a href="#" className="py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Blog
                  </a>
                  <a href="#" className="py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    About
                  </a>
                </div>
              </nav>
            </div>

            {/* Form Elements */}
            <div>
              <h5 className="font-medium mb-4">Form Elements</h5>
              <div className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Style 2: Glassmorphism */}
        <TabsContent value="glass" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Style 2: Glassmorphism</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Frosted glass effect with soft shadows and subtle backgrounds.
            </p>

            {/* Buttons */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Buttons</h5>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg">
                  Primary
                </button>
                <button className="px-6 py-2 border border-blue-600/30 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600/10 transition-all">
                  Secondary
                </button>
                <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                  Ghost
                </button>
              </div>
              <div className="mt-4 p-3 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg text-xs">
                <code>backdrop-blur-sm, transparent backgrounds, soft shadows</code>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Blog Post Card</h5>
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all">
                <div className="flex gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-500/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    React
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Understanding React Hooks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive guide to useState, useEffect, and custom hooks...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Dec 25, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Navigation</h5>
              <nav className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/50 rounded-full px-2 py-2 inline-flex shadow-lg">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium">
                  Home
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-all">
                  Projects
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-all">
                  Blog
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-all">
                  About
                </a>
              </nav>
            </div>

            {/* Form Elements */}
            <div>
              <h5 className="font-medium mb-4">Form Elements</h5>
              <div className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 rounded-lg focus:bg-white/80 dark:focus:bg-gray-900/80 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 rounded-lg focus:bg-white/80 dark:focus:bg-gray-900/80 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Style 3: Subtle Depth */}
        <TabsContent value="depth" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Style 3: Subtle Depth</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Soft shadows and rounded corners for a modern, approachable feel.
            </p>

            {/* Buttons */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Buttons</h5>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Primary
                </button>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-all shadow-sm hover:shadow-md">
                  Secondary
                </button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm">
                  Ghost
                </button>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs shadow-inner">
                <code>border-radius: 0.5rem, subtle shadows, slight hover lift</code>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Blog Post Card</h5>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md shadow-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md shadow-sm">
                    React
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Understanding React Hooks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive guide to useState, useEffect, and custom hooks...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Dec 25, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Navigation</h5>
              <nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 shadow-md inline-flex gap-1">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow-sm">
                  Home
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
                  Projects
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
                  Blog
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
                  About
                </a>
              </nav>
            </div>

            {/* Form Elements */}
            <div>
              <h5 className="font-medium mb-4">Form Elements</h5>
              <div className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:border-blue-600 dark:focus:border-blue-400 outline-none focus:ring-2 focus:ring-blue-600/20 shadow-sm transition-all"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:border-blue-600 dark:focus:border-blue-400 outline-none focus:ring-2 focus:ring-blue-600/20 shadow-sm transition-all resize-none"
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Project Card Example */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Project Card Component</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Compact Version */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold">E-commerce Platform</h3>
              <div className="flex gap-2">
                <a href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Full-stack e-commerce solution with payment integration
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs rounded">
                Spring Boot
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs rounded">
                PostgreSQL
              </span>
            </div>
          </div>

          {/* Featured Version */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Blog CMS</h3>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs rounded">
                  Completed
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Content management system with Markdown support
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">Node.js</span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    View →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
