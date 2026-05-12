export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A collection of my AI projects, apps, and technical experiments.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">Coming soon</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Add your projects here. You can link to GitHub repositories, live demos, or write full descriptions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
