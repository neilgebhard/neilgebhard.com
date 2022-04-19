import { getSortedPostsData } from '../lib/posts'
import Container from '../components/Container'
import BlogList from '../components/BlogList'
import Image from 'next/image'

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
        <div className="text-3xl sm:text-5xl font-bold">
          Hi, I'm{' '}
          <h1 className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 normal-case my-0 text-3xl sm:text-5xl">
            Neil Gebhard.
          </h1>
        </div>
      </div>
      <p className="mt-4 mute">
        I'm a full-stack software engineer based in Saipan, USA. 🌴
      </p>
    </header>
  )
}

export default function Home({ posts }) {
  return (
    <Container>
      <Introduction />
      <BlogList posts={posts} />
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
