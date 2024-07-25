import { getSinglePost, getPosts } from "../../../lib/ghost";
import { GhostPost } from "../../../types/ghost";
import Image from "next/image";
import { format } from "date-fns";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const createShortDescription = (content: string, maxLength: number = 160) => {
    // Remove HTML tags
    const textContent = content.replace(/<[^>]+>/g, "");
    // Truncate to maxLength
    return textContent.length > maxLength
      ? textContent.slice(0, maxLength) + "..."
      : textContent;
  };
  const description = post.excerpt || createShortDescription(post.html);

  return {
    title: "Blog | " + post.title,
    description: post.excerpt || `Read ${post.title} on our blog`,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: GhostPost | null = await getSinglePost(params.slug);

  if (!post) {
    return <div className="text-center text-gray-500">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">{post.title}</h1>
      {post.feature_image && (
        <div className="relative w-full aspect-video mb-4">
          <Image
            src={post.feature_image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            loading="eager"
            priority
            className="rounded-md object-cover"
          />
        </div>
      )}
      <p className="text-gray-600 mb-8">
        {format(new Date(post.published_at), "MMMM dd, yyyy")}
      </p>
      <article
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}
