import Head from 'next/head';

import { client } from '@/lib/client';

import type { IPost } from './post/[slug]';

import Link from 'next/link';

interface IProps {
  posts: IPost[];
  total: number;
}

const Posts = ({ posts }: IProps) => (
  <>
    <Head>
      <title>Unie - Новости</title>
    </Head>

    <section className='container'>
      {posts.map(post => {
        return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.publishedAt}</p>
            <p>{post.description}</p>
            <Link href={`/post/${post.slug.current}`}>
              <span>Подробнее</span>
            </Link>
          </div>
        );
      })}
    </section>
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, description, mainImage, slug},
  }`;
  const { posts: result } = await client.fetch(query);

  const posts = result.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' })
  }));

  return { props: { posts } };
};
