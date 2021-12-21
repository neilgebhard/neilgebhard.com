import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ home }) {
  return (
    <header className={styles.container}>
      <nav className="bg-white flex items-center justify-between border-b shadow-md px-6">
        <h1 className="text-4xl font-extrabold my-4">
          <a href="/" className="text-black hover:no-underline">
            <span className="text-bleu">N</span>
            <span className="text-jungle">G</span>
          </a>
        </h1>
        {home ? (
          <ul className="flex gap-x-4 list-none font-bold">
            <li>About</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        ) : (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
