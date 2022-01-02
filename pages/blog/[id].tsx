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
        <title>{postData.title}</title>
      </Head>
      <Navbar home={false} refs={{}} />
      <article className="max-w-xl py-1 my-10 mx-auto">
        <h1 className="text-5xl tracking-tight font-extrabold my-4">
          {postData.title}
        </h1>
        <div className="text-gray-600">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Footer />
    </>
  );
}
