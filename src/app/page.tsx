import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-slate-50">
              Hi, I'm building here
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Portfolio of AI projects, apps, and technical explorations
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-12">
            <Link
              href="/projects"
              className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Showcase of AI projects, websites, and applications
              </p>
            </Link>

            <Link
              href="/blog"
              className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Blog
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Technical writing, tutorials, and project updates
              </p>
            </Link>

            <Link
              href="/about"
              className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                About
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Background, skills, and contact information
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
