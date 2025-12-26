import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Tag, User, ArrowRight } from 'lucide-react';

interface LayoutExamplesProps {
  darkMode: boolean;
}

export default function LayoutExamples({ darkMode }: LayoutExamplesProps) {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Layout Examples</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Page layouts and grid systems for different sections of your portfolio.
        </p>
      </div>

      <Tabs defaultValue="homepage" className="space-y-8">
        <TabsList>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="blog-list">Blog List</TabsTrigger>
          <TabsTrigger value="post">Post Detail</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        {/* Homepage Layout */}
        <TabsContent value="homepage" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Homepage Layout Options</h4>

            {/* Option 1: Hero + Featured */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 1: Hero + Featured Grid</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                {/* Hero */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-12 border-b border-gray-200 dark:border-gray-800">
                  <div className="max-w-3xl">
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">HERO SECTION</div>
                    <h1 className="text-3xl font-semibold mb-3">Full-Stack Developer</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Building modern web applications with Java and JavaScript
                    </p>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 bg-blue-600 text-white text-sm rounded">View Projects</div>
                      <div className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm rounded">Read Blog</div>
                    </div>
                  </div>
                </div>

                {/* Featured Projects/Posts */}
                <div className="p-8">
                  <h3 className="font-semibold mb-4">Featured Projects</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="border border-gray-200 dark:border-gray-800 rounded p-4">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">PROJECT CARD {i}</div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-3/4" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="p-8 bg-gray-50 dark:bg-gray-900">
                  <h3 className="font-semibold mb-4">Recent Posts</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded p-3">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">POST {i}</div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Structure: Hero (full-width) → Featured (2-col grid) → Recent (list)</code>
              </div>
            </div>

            {/* Option 2: Centered Minimal */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 2: Centered Minimal</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                <div className="p-12 text-center">
                  <div className="max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6" />
                    <h1 className="text-3xl font-semibold mb-3">Your Name</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Developer • Writer • Open Source Contributor
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full" />
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full" />
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-8 border-t border-gray-200 dark:border-gray-800">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="font-semibold mb-4 text-center">Latest Writing</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
                          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-2/3" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Structure: Centered hero with avatar → List of posts (max-width: 65ch)</code>
              </div>
            </div>

            {/* Option 3: Split Screen */}
            <div>
              <h5 className="font-medium mb-4">Option 3: Split Screen</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">LEFT PANEL</div>
                    <h1 className="text-3xl font-semibold mb-3">Developer & Writer</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Sharing knowledge about Java, JavaScript, and web development
                    </p>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                  </div>
                  <div className="p-8">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">RIGHT PANEL - FEATURED</div>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
                          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-3/4" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Structure: 50/50 split (sticky left on desktop, stacked on mobile)</code>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Blog List Layout */}
        <TabsContent value="blog-list" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Blog List Layouts</h4>

            {/* Option 1: Standard Grid */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 1: Card Grid</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">All Posts</h2>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded">Categories</div>
                    <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded">Tags</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="h-2 bg-blue-200 dark:bg-blue-900 rounded w-16 mb-3" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-full" />
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3" />
                      <div className="h-2 bg-gray-100 dark:bg-gray-900 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>3-column grid on desktop, 1-column on mobile, filters in header</code>
              </div>
            </div>

            {/* Option 2: List with Sidebar */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 2: List + Sidebar</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="h-2 bg-blue-200 dark:bg-blue-900 rounded w-20 mb-3" />
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-3/4" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="text-xs font-medium mb-3">CATEGORIES</div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="text-xs font-medium mb-3">TAGS</div>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-5 w-12 bg-gray-200 dark:bg-gray-800 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Main content (75%) + sticky sidebar (25%) with filters</code>
              </div>
            </div>

            {/* Option 3: Magazine Style */}
            <div>
              <h5 className="font-medium mb-4">Option 3: Magazine Layout</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
                {/* Featured */}
                <div className="mb-6 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                  <div className="h-2 bg-blue-200 dark:bg-blue-900 rounded w-24 mb-3" />
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-2/3" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/5" />
                </div>
                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-800 rounded p-4">
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-3/4" />
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Featured post (full-width) → 3-column grid for others</code>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Post Detail Layout */}
        <TabsContent value="post" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Post Detail Layouts</h4>

            {/* Option 1: Centered Reading */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 1: Centered Reading Experience</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-8 text-center border-b border-gray-200 dark:border-gray-800">
                  <div className="max-w-2xl mx-auto">
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="h-5 w-16 bg-blue-200 dark:bg-blue-900 rounded" />
                    </div>
                    <h1 className="text-2xl font-semibold mb-3">Post Title Goes Here</h1>
                    <div className="flex justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>Dec 25, 2025</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <div className="max-w-2xl mx-auto space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>max-width: 65ch, centered, minimal distractions</code>
              </div>
            </div>

            {/* Option 2: With TOC Sidebar */}
            <div>
              <h5 className="font-medium mb-4">Option 2: With Table of Contents</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex gap-2 mb-4">
                      <div className="h-5 w-16 bg-blue-200 dark:bg-blue-900 rounded" />
                    </div>
                    <h1 className="text-2xl font-semibold mb-3">Post Title Goes Here</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>Dec 25, 2025</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="max-w-4xl mx-auto grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                      ))}
                    </div>
                    <div className="lg:block hidden">
                      <div className="sticky top-24 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                        <div className="text-xs font-medium mb-3">TABLE OF CONTENTS</div>
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Main content (75%) + sticky TOC sidebar (25%), hide sidebar on mobile</code>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Projects Layout */}
        <TabsContent value="projects" className="space-y-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-6">Projects Showcase Layouts</h4>

            {/* Option 1: Grid */}
            <div className="mb-12">
              <h5 className="font-medium mb-4">Option 1: Project Grid</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600" />
                      <div className="p-4">
                        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-3/4" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full mb-3" />
                        <div className="flex gap-2">
                          <div className="h-5 w-12 bg-blue-200 dark:bg-blue-900 rounded" />
                          <div className="h-5 w-12 bg-green-200 dark:bg-green-900 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>2-column grid with thumbnail images and tech tags</code>
              </div>
            </div>

            {/* Option 2: Featured + List */}
            <div>
              <h5 className="font-medium mb-4">Option 2: Featured + List</h5>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                {/* Featured */}
                <div className="mb-6 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600" />
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-3 w-2/3" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/5 mb-4" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-blue-200 dark:bg-blue-900 rounded" />
                      <div className="h-6 w-16 bg-green-200 dark:bg-green-900 rounded" />
                      <div className="h-6 w-16 bg-purple-200 dark:bg-purple-900 rounded" />
                    </div>
                  </div>
                </div>
                {/* List */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex justify-between items-center">
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2 w-1/3" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                <code>Large featured project → compact list for others</code>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Spacing & Grid System */}
      <Card className="p-8">
        <h4 className="text-xl font-semibold mb-6">Spacing Scale & Grid System</h4>
        
        <div className="mb-8">
          <h5 className="font-medium mb-4">Spacing Scale (Tailwind-based)</h5>
          <div className="space-y-2">
            {[
              { name: '1', value: '0.25rem (4px)' },
              { name: '2', value: '0.5rem (8px)' },
              { name: '3', value: '0.75rem (12px)' },
              { name: '4', value: '1rem (16px)' },
              { name: '6', value: '1.5rem (24px)' },
              { name: '8', value: '2rem (32px)' },
              { name: '12', value: '3rem (48px)' },
              { name: '16', value: '4rem (64px)' },
              { name: '20', value: '5rem (80px)' },
            ].map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600 dark:text-gray-400">space-{space.name}</div>
                <div className="bg-blue-200 dark:bg-blue-900 h-6" style={{ width: space.value.split('(')[0].trim() }} />
                <div className="text-sm text-gray-500 dark:text-gray-400">{space.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-medium mb-4">Container Widths</h5>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <div className="text-sm font-medium mb-1">Reading Width (Content)</div>
              <code className="text-xs text-gray-600 dark:text-gray-400">max-width: 65ch (~700px)</code>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <div className="text-sm font-medium mb-1">Standard Container</div>
              <code className="text-xs text-gray-600 dark:text-gray-400">max-width: 1280px (xl container)</code>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <div className="text-sm font-medium mb-1">Wide Container</div>
              <code className="text-xs text-gray-600 dark:text-gray-400">max-width: 1536px (2xl container)</code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
