import Container from 'components/Container'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ANIMATION } from 'lib/constants'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta
          name="description"
          content="A software developer in Salt Lake City, UT."
        />
      </Head>
      <section className="relative py-16 md:pt-30 md:pb-40">
        <motion.div
          className="absolute left-96 -z-10 hidden rotate-45 text-center text-[100px] font-extrabold uppercase leading-none tracking-wider text-gray-200 dark:text-gray-800 sm:-top-10 md:block lg:top-14 lg:text-[150px]"
          initial={{ opacity: ANIMATION.OPACITY.HIDDEN }}
          animate={{ opacity: ANIMATION.OPACITY.VISIBLE }}
          transition={{ duration: ANIMATION.DURATION.FAST, delay: ANIMATION.DELAY.VERY_LONG }}
        >
          <p>Frontend</p>
          <p>Backend</p>
          <p>Cloud</p>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            className="mb-3 text-3xl font-light md:text-4xl uppercase"
            initial={{ opacity: ANIMATION.OPACITY.SEMI_VISIBLE, x: ANIMATION.OFFSET.SMALL }}
            animate={{ opacity: ANIMATION.OPACITY.VISIBLE, x: 0 }}
            transition={{ duration: ANIMATION.DURATION.NORMAL }}
          >
            Full-stack developer | SLC, Utah
          </motion.p>
          <motion.p
            className="max-w-2xl text-4xl font-bold md:text-6xl tracking-tight"
            initial={{ opacity: ANIMATION.OPACITY.HIDDEN, x: ANIMATION.OFFSET.SMALL }}
            animate={{ opacity: ANIMATION.OPACITY.VISIBLE, x: 0 }}
            transition={{ duration: ANIMATION.DURATION.NORMAL, delay: ANIMATION.DELAY.NORMAL }}
          >
            Creating software solutions with modern web technologies
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: ANIMATION.OPACITY.HIDDEN, x: ANIMATION.OFFSET.SMALL }}
            animate={{ opacity: ANIMATION.OPACITY.VISIBLE, x: 0 }}
            transition={{ duration: ANIMATION.DURATION.NORMAL, delay: ANIMATION.DELAY.LONG }}
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
