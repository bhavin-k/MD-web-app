import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from '../container/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Page Task</title>
        <meta name="description" content="Test for shop pgae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
