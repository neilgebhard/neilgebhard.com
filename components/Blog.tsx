import Link from "next/link";
import Date from "./Date";
import { motion } from "framer-motion";

export default function Blog({ allPostsData }) {
  return (
    <section className="max-w-3xl mx-auto text-xl pt-1">
      <h2 className="ml-5 md:ml-0 text-3xl my-4 uppercase tracking-wider">
        Blog
      </h2>
      <motion.ul
        className="list-none m-0 bg-white p-5 shadow-lg space-y-5 lg:rounded-md font-mono"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <a className="font-bold text-black">{title}</a>
            </Link>
            <br />
            <small className="text-gray-500">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
