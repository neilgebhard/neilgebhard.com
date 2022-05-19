import Container from 'components/Container'
import Head from 'next/head'
import { IoMdSend } from 'react-icons/io'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'

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
      <h1 className="text-4xl mb-12 font-semibold h1-underline">Contact</h1>
      <div className="flex flex-col md:flex-row gap-x-16 xl:gap-x-32">
        <section className="sm:basis-[400px] lg:w-1/2 lg:basis-auto shrink-0">
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <label
                className="block font-semibold text-gray-800 dark:text-gray-200 mb-2 text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full text-2xl rounded bg-white dark:bg-black border dark:border-gray-800 dark:ring-gray-600 outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600 dark:focus:ring px-3 py-2"
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
                className="block font-semibold text-gray-800 dark:text-gray-200 mb-2 text-xl"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full text-2xl rounded bg-white dark:bg-black border dark:border-gray-800 dark:ring-gray-600 outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600 dark:focus:ring px-3 py-2"
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
              className="mt-12 bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 px-6 py-3 rounded text-xl font-bold flex gap-x-2 items-center disabled:bg-gray-300 disabled:dark:bg-gray-600"
              disabled={state.submitting}
              type="submit"
            >
              <IoMdSend size={25} /> Send Message
            </button>
            {state.succeeded && (
              <p className="text-green-500 font-semibold text-lg mt-4">
                Message sent!
              </p>
            )}
          </form>
        </section>
        <div className="md:hidden bg-gray-300 dark:bg-gray-700 w-56 h-0.5 my-20 mx-auto" />
        <section className="space-y-10 text-xl lg:text-2xl">
          <p className="font-bold text-2xl lg:text-3xl tracking-wide md:mt-8">
            Or get in touch another way...
          </p>
          <p>Currently open to new opportunities.</p>
          <div className="space-y-4">
            <Link href="https://www.google.com/maps/place/Saipan/@15.1882262,145.6948117,12z/data=!4m5!3m4!1s0x66d8b12c0d41abdd:0x662f5e089974f80f!8m2!3d15.1850483!4d145.7467259">
              <a className="hover:underline mute flex gap-x-3 font-semibold">
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
          </div>
          <ul className="p-0 m-0 list-none flex items-center gap-x-4">
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
          </ul>
        </section>
      </div>
    </Container>
  )
}
