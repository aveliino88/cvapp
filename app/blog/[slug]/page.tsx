// @ts-nocheck
import { getSinglePost, getPosts } from '../../../lib/ghost';
import Image from 'next/image';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return <div className="text-center text-gray-500">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 flex justify-center">{post.title}</h1>
      {post.feature_image && (
        <Image 
          src={post.feature_image} 
          alt={post.title} 
          width={800} 
          height={800}
          quality={100}
          className="w-full h-auto mb-4 rounded-md"
        />
      )}
      <p className="text-gray-600 mb-8">{new Date(post.published_at).toLocaleDateString()}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}



