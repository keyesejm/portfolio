"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  status: string;
  content: string;
}

const md = new MarkdownIt();

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: Props) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
      fetch(`/api/blog/${slug}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((err) => console.error("Failed to load post:", err));
    });
  }, [params]);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <article className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <span className="text-xs font-semibold px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full whitespace-nowrap">
              {post.status}
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <div
            className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-50 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950"
            dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
          />
        </div>
      </article>
    </main>
  );
}
