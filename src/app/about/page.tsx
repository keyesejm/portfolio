export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Learn more about me and my work.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome! I'm building a portfolio of AI projects, apps, and technical experiments.
            This is where I showcase my work and share what I'm learning along the way.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Skills & Interests</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Add your skills, technologies, and areas of interest here.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Add your contact information, social links, or contact form here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
