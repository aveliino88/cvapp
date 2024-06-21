import axios from 'axios';

const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_API_KEY = process.env.GHOST_API_KEY;

export async function getPosts() {
  try {
    const res = await axios.get(`${GHOST_API_URL}/ghost/api/v4/content/posts/?key=${GHOST_API_KEY}&limit=all`);
    return res.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getSinglePost(slug: any) {
  try {
    const res = await axios.get(`${GHOST_API_URL}/ghost/api/v4/content/posts/slug/${slug}/?key=${GHOST_API_KEY}`);
    return res.data.posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }

}
