import { Page } from '@/components/Page';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://${process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || 'unie.space'}` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <>
      <Head>
        <meta content='website' property='og:type' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta content='/unie-photo.jpg' property='og:image' />
        <meta content='Unie Espresso Bar - logo' property='og:image:alt' />
        <meta property='og:title' content='Unie Espresso Bat - первый эспрессо бар в Самаре' />
        <meta property='og:description' content='Unie Espresso Bar - первый эспрессо бар в Самаре' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
        <meta content='Unie Espresso Bar' property='og:site_name'></meta>
        <meta content='Unie Espresso Bar - первый эспрессо бар в Самаре' name='description' />
        <meta content='#110c11' name='msapplication-TileColor' />
        <meta content='#110c11' name='theme-color' />
        <title>Unie Espresso Bar</title>
        <link rel='canonical' href={canonicalUrl} />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
