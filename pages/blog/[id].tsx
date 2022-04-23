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
import { BiCalendar } from 'react-icons/bi'
import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => `/blog/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.id === params.id)

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }: { post: Post }) {
  return (
    <Container>
      <Head>
        <title>{post.title} | Neil Gebhard</title>
        <meta name="description" content={post.title}></meta>
      </Head>
      <header>
        <h1 className="mb-2 mt-0 text-3xl sm:text-5xl">{post.title}</h1>
        <div className="flex items-center gap-1 mb-12">
          <div className="mute flex gap-1 items-center">
            <Image
              className="rounded-full"
              src="/images/portrait.webp"
              alt="Avatar of Neil Gebhard"
              height={24}
              width={24}
            />{' '}
            Neil Gebhard
          </div>
          <div> / </div>
          <div className="mute flex items-center gap-1">
            <BiCalendar />
            <Date dateString={post.date} />
          </div>
        </div>
      </header>
      <article className="prose lg:prose-xl dark:prose-invert prose-blue prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown
          components={CodeBlock}
          remarkPlugins={[remarkGfm, remarkHint]}
        >
          {post.body.raw}
        </ReactMarkdown>
        <Comments />
      </article>
    </Container>
  )
}
