import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div>
        <h1 className={utilStyles.headlineLg}>404 - Page Not Found</h1>
        <p className={utilStyles.headlineMd}>The page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
}