import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';

import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import styles from './post.module.css';

export interface IPost {
  _id: string;
  slug: {
    current: string;
  };
  mainImage: {
    caption: string;
  };
  title: string;
  body: any;
  publishedAt: string;
  description: string;
}

const Post = ({ post }: { post: IPost }) => (
  <>
    <Head>
      <title>Unie - {post.slug.current}</title>
    </Head>

    <div className="container">
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.date}>{post.publishedAt}</p>
      <Image
        src={urlFor(post.mainImage).url()}
        alt={post.mainImage.caption}
        width="850"
        height="560"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <PortableText value={post.body} />
    </div>
  </>
);

export const getStaticPaths = async () => {
  const query = `*[type == "post"] { slug { current } }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post: IPost) => {
    {
      post.slug.current;
    }
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{body, publishedAt, mainImage, slug, title}`;

  const post = await client.fetch(query);

  return {
    props: { post },
  };
};

export default Post;
