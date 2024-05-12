// @ts-nocheck
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';

async function getPost(slug: string) {
	try {
		const post = await directus.request(
			readItem('posts', slug, {
				fields: ['*', { image: ['filename_disk'], author: ['name'] }],
			})
		);

		return post;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const post = await getPost(params.slug);
	return (
		<>
		<div className="container mt-10">
			<div className="flex justify-center">
			<img src={`${directus.url}assets/${post.image.filename_disk}?width=600`} alt="" />
			</div>
			<h1 className='text-xl flex justify-center mt-5'>{post.title}</h1>
			<div className='leading-7 [&:not(:first-child)]:mt-6' dangerouslySetInnerHTML={{ __html: post.content }}></div>
		</div>	
		</>
	);
}