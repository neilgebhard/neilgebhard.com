import Image from 'next/image'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { BiCalendar } from 'react-icons/bi'
import MyDate from '../../components/MyDate'
import Comments from './../../components/Comments'
import Container from '../../components/Container'
import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import clsx from 'clsx'
import {
  motion,
  useScroll,
  useSpring
} from 'framer-motion'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => `/blog/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.id === params?.id)

  return {
    props: {
      post
    }
  }
}

const Input = () => <input type="text" />

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextInput = ({ className, ...rest }: TextInputProps) => {
  return (
    <label className="block">
      <span className="text-gray-500">Label</span>
      <input
        type="text"
        className={clsx('block w-full appearance-none', className)}
        {...rest}
      />
    </label>
  )
}

export default function Post({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Container>
      <Head>
        <title>{post.title} | Neil Gebhard</title>
        <meta name="description" content={post.title}></meta>
      </Head>
      <section className="mx-auto max-w-2xl">
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-gray-500"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <header>
          <h1 className="mb-2 mt-0 text-3xl sm:text-5xl font-bold">
            {post.title}
          </h1>
          <div className="mb-12 flex items-center gap-1">
            <div className="mute flex items-center gap-1">
              <Image
                className="rounded-full"
                src="/images/portrait.webp"
                alt="Avatar of Neil Gebhard"
                height={24}
                width={24}
              />{' '}
              Neil Gebhard
            </div>
            {/* <div> / </div>
            <div className="mute flex items-center gap-1">
              <BiCalendar />
              <MyDate dateString={post.date} />
            </div> */}
          </div>
        </header>
        <article className="prose prose-blue prose-a:no-underline hover:prose-a:underline dark:prose-invert">
          <MDXContent components={{ Input, TextInput }} />
          <Comments />
        </article>
      </section>
    </Container>
  )
}
