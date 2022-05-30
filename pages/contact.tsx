import Container from 'components/Container'
import Head from 'next/head'
import { IoMdSend } from 'react-icons/io'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
}

export default function Contact() {
  const [state, handleSubmit] = useForm('mvolwyvj')
  const emailInput = useRef(null)

  useEffect(() => {
    emailInput.current.focus()
  }, [])

  return (
    <Container>
      <Head>
        <title>Contact | Neil Gebhard</title>
        <meta
          name="description"
          content="The contact page for Neil Gebhard"
        ></meta>
      </Head>
      <h1 className="h1-underline mb-12 text-4xl font-semibold">Contact</h1>
      <motion.div
        className="flex flex-col gap-x-16 md:flex-row xl:gap-x-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <section className="shrink-0 sm:basis-[400px] lg:w-1/2 lg:basis-auto">
          <motion.form onSubmit={handleSubmit} variants={item}>
            <div className="mt-10">
              <label
                className="mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded border bg-white px-3 py-2 text-2xl outline-none focus:ring focus:ring-gray-300 dark:border-gray-800 dark:bg-black dark:ring-gray-600 dark:focus:ring dark:focus:ring-gray-600"
                id="email"
                type="email"
                name="email"
                ref={emailInput}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mt-10">
              <label
                className="mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded border bg-white px-3 py-2 text-2xl outline-none focus:ring focus:ring-gray-300 dark:border-gray-800 dark:bg-black dark:ring-gray-600 dark:focus:ring dark:focus:ring-gray-600"
                id="message"
                name="message"
                rows={5}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="mt-12 flex items-center gap-x-2 rounded bg-yellow-400 px-6 py-3 text-xl font-bold hover:bg-yellow-300 disabled:bg-gray-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 disabled:dark:bg-gray-600"
              disabled={state.submitting}
              type="submit"
            >
              <IoMdSend size={25} /> Send Message
            </button>
            {state.succeeded && (
              <p className="mt-4 text-lg font-semibold text-green-500">
                Message sent!
              </p>
            )}
          </motion.form>
        </section>
        <div className="my-20 mx-auto h-0.5 w-56 bg-gray-300 dark:bg-gray-700 md:hidden" />
        <section className="space-y-10 text-xl lg:text-2xl">
          <motion.p
            className="text-2xl font-bold tracking-wide md:mt-8 lg:text-3xl"
            variants={item}
          >
            Or get in touch another way...
          </motion.p>
          <motion.p variants={item}>
            Need a website? Maybe you have a proposition? Or do you just want to
            say hi? Feel free to message me.
          </motion.p>
          <motion.div className="space-y-4" variants={item}>
            <Link href="https://www.google.com/maps/place/Saipan/@15.1882262,145.6948117,12z/data=!4m5!3m4!1s0x66d8b12c0d41abdd:0x662f5e089974f80f!8m2!3d15.1850483!4d145.7467259">
              <a className="mute flex gap-x-3 font-semibold hover:underline">
                <FaMapMarkerAlt size="2rem" /> Saipan, USA
              </a>
            </Link>
            <a
              className="flex gap-x-3 font-semibold hover:underline"
              href="mailto:neilgebhard@gmail.com"
              aria-label="Link to My Email"
            >
              <MdEmail size="2rem" title="E-mail" className="mute" />
              neilgebhard@gmail.com
            </a>
          </motion.div>
          <motion.ul
            className="m-0 flex list-none items-center gap-x-4 p-0"
            variants={item}
          >
            <li>
              <a
                href="https://github.com/neilgebhard"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to My GitHub"
              >
                <SiGithub
                  size="2.5rem"
                  title="GitHub"
                  className="mute hover:text-gray-500"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/neil_gebhard"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to My Twitter"
              >
                <SiTwitter
                  size="2.5rem"
                  title="Twitter"
                  className="mute hover:text-twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neilgebhard/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to My LinkedIn"
              >
                <SiLinkedin
                  size="2.5rem"
                  title="LinkedIn"
                  className="mute hover:text-linked-in"
                />
              </a>
            </li>
          </motion.ul>
        </section>
      </motion.div>
    </Container>
  )
}
