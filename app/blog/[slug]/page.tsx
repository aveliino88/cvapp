// @ts-nocheck
import { getSinglePost, getPosts } from '../../../lib/ghost';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='container mt-10'>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}


