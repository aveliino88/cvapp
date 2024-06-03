// @ts-nocheck
import { getPosts } from '../../lib/ghost';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <div className="text-center text-gray-500">No blog posts found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <li key={post.id} className="rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="block">
              {post.feature_image && (
                <Image 
                  src={post.feature_image} 
                  alt={post.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{new Date(post.published_at).toLocaleDateString()}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


