import Container from 'components/Container'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta
          name="description"
          content="A software engineer specializing in web development in Saipan, USA."
        />
      </Head>
      <section className="relative py-16 md:pt-30 md:pb-40">
        <motion.div
          className="absolute left-96 -z-10 hidden rotate-45 text-center text-[100px] font-extrabold uppercase leading-none tracking-wider text-gray-200 dark:text-gray-800 sm:-top-10 md:block lg:top-14 lg:text-[150px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 1.5 }}
        >
          <p>Frontend</p>
          <p>Backend</p>
          <p>UI/UX</p>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            className="mb-3 text-3xl font-light md:text-4xl"
            initial={{ opacity: 0.9, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master Web Developer
          </motion.p>
          <motion.p
            className="max-w-3xl text-5xl font-bold uppercase md:text-7xl"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Let's build something great together
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex justify-center gap-x-5 font-semibold md:justify-start">
              <Link href="/projects">
                <a className="rounded bg-yellow-400 px-6 py-3 text-xl transition hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600">
                  My Projects
                </a>
              </Link>
              <Link href="/about">
                <a className="rounded border border-gray-500 px-6 py-3 text-xl transition hover:bg-white dark:hover:bg-gray-700">
                  About Me
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  )
}
