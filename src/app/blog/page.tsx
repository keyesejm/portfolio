"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  status: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch posts from API route
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technical writing, tutorials, and project updates.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
            <p className="text-slate-600 dark:text-slate-400">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {post.title}
                  </h2>
                  <span className="text-xs font-semibold px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full whitespace-nowrap ml-4">
                    {post.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
