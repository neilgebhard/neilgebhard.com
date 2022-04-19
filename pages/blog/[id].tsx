import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import { GetStaticProps, GetStaticPaths } from 'next'
import CodeBlock from '../../components/CodeBlock'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkHint from 'remark-hint'
import Comments from './../../components/Comments'
import Container from '../../components/Container'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostData(params.id)
  return {
    props: {
      posts
    }
  }
}

export default function Post({ posts }) {
  return (
    <Container>
      <Head>
        <title>{posts.title} | Neil Gebhard</title>
        <meta name="description" content={posts.title}></meta>
      </Head>
      <header>
        <h1 className="mb-2 mt-0">{posts.title}</h1>
        <p className="text-gray-600 mb-12 mt-0">
          <Date dateString={posts.date} />
        </p>
      </header>
      <article className="prose lg:prose-xl dark:prose-invert prose-blue prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown
          components={CodeBlock}
          remarkPlugins={[remarkGfm, remarkHint]}
        >
          {posts.markdown}
        </ReactMarkdown>
        <Comments />
      </article>
    </Container>
  )
}
