export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technical writing, tutorials, and project updates.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">Coming soon</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Add blog posts here. You can store them as markdown files and render them dynamically.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
