import Container from '../components/Container'
import Blog from '../components/Blog'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps } from 'next'

const Introduction = () => {
  return (
    <header>
      <div className="flex items-center gap-5">
        <Image
          className="rounded-full"
          src="/images/portrait.webp"
          alt="Portrait of Neil Gebhard"
          width={100}
          height={100}
        />
        <div className="text-3xl sm:text-5xl font-bold tracking-tight">
          Hi, I&apos;m{' '}
          <h1 className="my-0 text-3xl sm:text-5xl text-yellow-600 dark:text-yellow-300">
            Neil Gebhard
          </h1>
        </div>
      </div>
      <p className="mt-4 mute">Software engineer based in Saipan, USA 🌴</p>
    </header>
  )
}

export default function Home({ posts }) {
  return (
    <Container>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <Introduction />
      <Blog posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}
