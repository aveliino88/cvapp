// @ts-nocheck
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';


async function getPosts() {
	return directus.request(
		readItems('posts', {
			fields: ['slug', 'title', 'publish_date', { author: ['name'] }],
			sort: ['-publish_date'],
		})
	);
}

export default async function DynamicPage() {
	const posts = await getPosts();
	return (
        <div className='container mt-10'>
		<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">Blog</h1>
		<div className='mt-10 flex justify-center'>
		<ul>
			{posts.map((post) => {
				return (
					<li key={post.slug}>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-5">
						<a href={`/blog/${post.slug}`}>
							{post.title}
						</a>
						</h3>
						<span className='text-sm font-medium leading-none'>
							{post.publish_date} by {post.author.name}
						</span>
					</li>
				);
			})}
		</ul>
		</div>
	</div>
	);
}

