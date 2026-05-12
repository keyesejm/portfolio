import { getAllBlogPosts } from "@/data/blog";

export async function GET() {
  const posts = getAllBlogPosts();
  const postsData = posts.map(({ slug, title, date, excerpt, status }) => ({
    slug,
    title,
    date,
    excerpt,
    status,
  }));
  return Response.json(postsData);
}
