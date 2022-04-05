import Link from "next/link";
import Date from "../../components/Date";
import { motion } from "framer-motion";
import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";
import Script from "next/script";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const jsonLd = () => {
  return `{
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Redux: A Simple Guide",
    datePublished: "2022-03-19",
  }`;
};

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | Neil Gebhard</title>
        <meta name="description" content="The blog of Neil Gebhard" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(),
          }}
        />
      </Head>
      <section className="max-w-xl mx-auto">
        <h1>Blog</h1>
        <motion.ul
          className="pl-0 list-none space-y-5"
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
