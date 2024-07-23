// @ts-nocheck
import { getPosts } from "../../lib/ghost";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No blog posts found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Blog
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="rounded-lg overflow-hidden transition-transform hover:scale-105 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 flex flex-col"
          >
            <Link href={`/blog/${post.slug}`} className="h-full flex flex-col">
              {post.feature_image && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.feature_image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {new Date(post.published_at).toLocaleDateString()}
                  {post.reading_time && ` • ${post.reading_time} min to read`}
                </p>
                {post.excerpt && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-auto">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag.id}
                        className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
