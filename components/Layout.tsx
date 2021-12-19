import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import DarkMode from "./DarkMode";

const name = "Neil Gebhard";
const siteTitle = "Neil Gebhard";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <DarkMode /> */}
      <header>
        {home ? (
          <div className="flex items-center justify-center flex-col">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={150}
              width={113}
              alt={name}
            />
            <h1 className="text-4xl font-extrabold tracking-tight my-4">
              {name}
            </h1>
          </div>
        ) : (
          <h2 className="text-2xl mb-14">
            <Link href="/blog">
              <a className="text-black dark:text-white hover:no-underline">
                {name}
              </a>
            </Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to blog</a>
          </Link>
        </div>
      )}
    </div>
  );
}
