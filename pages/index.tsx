import Head from "next/head";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta
          name="description"
          content="The personal website of Neil Gebhard"
        ></meta>
      </Head>
      <section>
        <h1 className="hidden">Home</h1>
        <p className="text-5xl sm:text-7xl font-sans font-bold tracking-tight text-center my-32">
          Hi, I'm{" "}
          <span className="hidden sm:inline text-animate">Neil Gebhard</span>
          <span className="sm:hidden text-animate">Neil</span>
          <span className="sm:hidden text-animate"> Gebhard</span>.
        </p>
      </section>
    </>
  );
}
