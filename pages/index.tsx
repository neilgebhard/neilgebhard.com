import Container from 'components/Container'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <section className="py-20 md:py-40 relative">
        <motion.div
          className="hidden md:block absolute text-[100px] lg:text-[150px] leading-none tracking-wider uppercase font-extrabold sm:-top-10 lg:top-14 left-96 text-gray-200 dark:text-gray-800 -z-10 rotate-45 text-center"
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
            className="text-3xl md:text-4xl font-light mb-3"
            initial={{ opacity: 0.9, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            A Full Stack Developer
          </motion.p>
          <motion.p
            className="text-5xl md:text-7xl max-w-3xl uppercase font-bold"
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
            <div className="flex gap-x-5 justify-center md:justify-start font-semibold">
              <Link href="/projects">
                <a className="bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 px-6 py-3 rounded text-xl transition">
                  My Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className="border border-gray-500 hover:bg-white dark:hover:bg-gray-700 px-6 py-3 rounded text-xl transition">
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
