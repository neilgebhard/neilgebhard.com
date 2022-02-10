import Head from "next/head";
import Navbar from "../../components/Navbar";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import Footer from "../../components/Footer";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Neil Gebhard</title>
        <meta name="description" content={postData.title}></meta>
      </Head>
      <article className="max-w-xl mx-auto">
        <header>
          <h1 className="mb-2">{postData.title}</h1>
          <p className="text-gray-600 mb-12 mt-0">
            <Date dateString={postData.date} />
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
