import Link from 'next/link'
import Date from '../components/Date'
import { motion } from 'framer-motion'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'

const BlogList = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredPosts = posts.filter(
    ({ title, tags }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()) ||
      tags.map((tag) => tag.toUpperCase()).includes(searchValue.toUpperCase())
  )

  return (
    <>
      <h2 className="mb-4">Blog</h2>
      <label className="relative text-gray-400 focus-within:text-gray-600 block">
        <BiSearchAlt
          className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
          fill="currentColor"
        />
        <input
          className="text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 pl-14 text-gray-700 leading-tight focus:outline-none focus:border-blue-600"
          type="search"
          aria-label="Search blog"
          placeholder="Search blog"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <motion.ul
        className="pl-0 list-none space-y-6 mt-6"
        initial={{ scale: 0.99, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {filteredPosts.map(({ id, date, title, tags }) => (
          <li key={id} className="text-2xl flex flex-col space-y-1">
            <Link href={`/blog/${id}`}>
              <a className="link">{title}</a>
            </Link>
            {tags && (
              <ul className="pl-0 flex flex-wrap items-center gap-2">
                {tags?.map((tag, index) => (
                  <span
                    className="rounded bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-800 p-1 text-sm uppercase font-medium cursor-pointer mute"
                    onClick={() => setSearchValue(tag)}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </ul>
            )}
            <p className="mute mt-0 mb-2 text-base">
              <Date dateString={date} />
            </p>
          </li>
        ))}
      </motion.ul>
    </>
  )
}

export default BlogList
