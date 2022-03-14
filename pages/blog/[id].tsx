import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import CodeBlock from "../../components/CodeBlock";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import Comments from "./../../components/Comments";

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
        <ReactMarkdown
          components={CodeBlock}
          remarkPlugins={[remarkGfm, remarkHint]}
        >
          {postData.markdown}
        </ReactMarkdown>
        <Comments />
      </article>
    </>
  );
}
