// @ts-nocheck
import { getPosts } from '../../lib/ghost';

export default async function BlogPage() {
	const posts = await getPosts();
  
	if (!posts || posts.length === 0) {
	  return <div>No blog posts found.</div>;
	}
  
	return (
	  <div className="container mt-10 flex-col justify-center items-center">
		<h1 className='text-3xl mb-10'>Blog</h1>
		<ul className='space-y-2'>
		  {posts.map(post => (
			<li key={post.id}>
			  <a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  

