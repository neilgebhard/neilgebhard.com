import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <section>
        <h1>About</h1>
        <motion.section
          initial={{ scale: 0.99, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a <strong>frontend engineer</strong> specializing in React. I've
            been writing code for about 8 years (professionally for 4 of those).
            I aim to write code that is simple, straightforward, and elegant. I
            can leverage cloud services in my web applications to create a full
            user experience. I have a B.S. in Computer Science from Portland
            State University in 2014. I'm currently living in Saipan, USA.
          </p>
        </motion.section>
      </section>
    </>
  );
}
