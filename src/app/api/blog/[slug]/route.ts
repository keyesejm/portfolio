import { getBlogPost } from "@/data/blog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}
