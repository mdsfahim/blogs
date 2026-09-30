import { getCatInfo } from '../utils/helpers.js';

export async function GET() {
  const posts = Object.values(import.meta.glob('../content/*.md', { eager: true }));
  
  const searchData = posts.map((post) => {
    const catInfo = getCatInfo(post.frontmatter.category);
    return {
      title: post.frontmatter.title,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags || [],
      slug: post.file.split('/').pop().replace('.md', ''),
      icon: catInfo.k,
      color: catInfo.c
    };
  });

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' }
  });
}