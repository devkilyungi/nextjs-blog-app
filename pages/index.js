import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Vick. I'm a Software Engineer and a Clash of Clans Warrior. Find me on Twitter <a href='https://twitter.com/kilyungi_'>@kilyungi_</a></p>
      </section>
    </Layout>
  );
}