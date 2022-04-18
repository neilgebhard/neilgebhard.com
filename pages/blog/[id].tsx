import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { GetStaticProps, GetStaticPaths } from 'next';
import CodeBlock from '../../components/CodeBlock';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHint from 'remark-hint';
import Comments from './../../components/Comments';
import Script from 'next/script';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
};

const jsonLd = () => {
  return `{
    "@context" : "http://schema.org",
    "@type" : "Article",
    "name" : "Redux: A Simple Guide",
    "datePublished" : "2022-03-19",
    "articleBody" : "This guide is designed to be a stripped down introduction to Redux. There are many layers to this library and it&#39;s easy to get overwhelmed with it all at the beginning.</P>\n<P>First, Redux is a standalone library. It can be used with any UI layer or framework (such as React). It’s primary purpose is to be a state management tool. It gives you a way to have state that is available to your entire application. It also allows you to abstract logic away from your components.</P>\n<P>The recommended way of using Redux nowadays is with <A href=\"https://redux-toolkit.js.org/\">Redux Toolkit</A>. It removes a ton of boilerplate. You can get started with the <A href=\"https://redux-toolkit.js.org/introduction/getting-started\">preconfigured template app</A>.</P>\n<P>Redux has two main parts: the <STRONG>slice</STRONG> and the <STRONG>store</STRONG>. The slice declares your state and reducer functions. The store holds your slice and makes it available to your components."
  }`;
};

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Neil Gebhard</title>
        <meta name="description" content={postData.title}></meta>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd()
          }}
        />
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
