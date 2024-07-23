import { getSinglePost, getPosts } from '../../../lib/ghost';
import { GhostPost } from '../../../types/ghost';
import Image from 'next/image';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
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
            loading="lazy"
            className="rounded-md object-cover"
          />
        </div>
      )}
      <p className="text-gray-600 mb-8">
        {format(new Date(post.published_at), 'MMMM dd, yyyy')}
      </p>
      <article 
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }} 
      />
    </div>
  );
}