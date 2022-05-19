import Head from 'next/head'
import Container from '../components/Container'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import MyDate from 'components/MyDate'
import { motion } from 'framer-motion'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'

export async function getStaticProps() {
  const posts = allPosts
    .map(({ id, tags, title, date }) => ({ id, tags, title, date }))
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return {
    props: {
      posts
    }
  }
}

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredPosts = posts.filter(
    ({ title, tags }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()) ||
      tags.map((tag) => tag.toUpperCase()).includes(searchValue.toUpperCase())
  )

  return (
    <Container>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <h1 className="h1-underline mb-14 text-3xl font-semibold md:text-4xl">
        Blog
      </h1>
      <label className="relative block text-gray-400 focus-within:text-gray-600">
        <BiSearchAlt
          className="pointer-events-none absolute top-1/2 left-3 h-8 w-8 -translate-y-1/2 transform"
          fill="currentColor"
        />
        <input
          className="focus:gray-blue-500 mt-4 block w-full rounded-md border-solid border-gray-300 bg-white px-4 py-2 pl-14 text-2xl text-gray-900 focus:border-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 sm:max-w-lg"
          type="search"
          aria-label="Search blog"
          placeholder="Search blog"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <ul className="mt-6 list-none space-y-6 pl-0">
        {filteredPosts.map(({ id, date, title, tags }, index) => (
          <motion.li
            className="flex flex-col space-y-1 text-2xl"
            initial={{ scale: 0.99, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.05 }}
            key={id}
          >
            <Link href={`/blog/${id}`}>
              <a className="link">{title}</a>
            </Link>
            {tags && (
              <div className="flex flex-wrap items-center gap-2 pl-0">
                {tags?.map((tag, index) => (
                  <span
                    className="mute cursor-pointer rounded bg-gray-200 p-1 text-sm font-medium uppercase hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800"
                    onClick={() => setSearchValue(tag)}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="mute mt-0 mb-2 text-base">
              <MyDate dateString={date} />
            </p>
          </motion.li>
        ))}
      </ul>
      {filteredPosts.length === 0 && <p className="mute">No posts found.</p>}
    </Container>
  )
}
