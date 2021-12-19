import Head from "next/head";
import Layout from "../components/Layout";
import Blog from "../components/Blog";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Neil Gebhard's Blog</title>
      </Head>
      <Blog allPostsData={allPostsData} />
    </Layout>
  );
}
