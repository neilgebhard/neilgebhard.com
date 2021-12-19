import Link from "next/link";
import Date from "./Date";

export default function Blog({ allPostsData }) {
  return (
    <section className="text-xl pt-1">
      <h2 className="text-2xl my-4">Blog</h2>
      <ul className="list-none p-0 m-0">
        {allPostsData.map(({ id, date, title }) => (
          <li className="mb-5" key={id}>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className="text-gray-500">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
