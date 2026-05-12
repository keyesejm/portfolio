import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Seyek Support",
      description: "Friendly tech support service for individuals, families, and small businesses. In-home, remote, or on-site support without judgment—just solutions.",
      tags: ["Web", "Service", "Next.js"],
      link: "https://seyeksupportsite.vercel.app/",
      status: "Live",
    },
    {
      title: "Gig Trip Calculator",
      description: "Calculate whether a gig delivery trip is worth taking. Factor in miles, time, offer amount, gas/electric costs, and location-based legal minimums.",
      tags: ["React", "Tool", "Calculator"],
      link: "https://courier-calc-phi.vercel.app/",
      status: "Live",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A collection of web apps and tools I've built.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h2>
                <span className="text-xs font-semibold px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                Visit →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
