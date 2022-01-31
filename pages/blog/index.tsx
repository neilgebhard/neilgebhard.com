import Link from "next/link";
import Date from "../../components/Date";
import { motion } from "framer-motion";
import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | Neil Gebhard</title>
        <meta name="description" content="The blog of Neil Gebhard"></meta>
      </Head>
      <section className="max-w-xl mx-auto">
        <h1>Blog</h1>
        <motion.ul
          className="list-none space-y-5"
          initial={{ scale: 0.99, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="text-2xl flex flex-col">
              <Link href={`/blog/${id}`}>
                <a className="font-bold text-black">{title}</a>
              </Link>
              <p className="text-gray-600 mt-0 mb-2">
                <Date dateString={date} />
              </p>
            </li>
          ))}
        </motion.ul>
      </section>
    </>
  );
}
