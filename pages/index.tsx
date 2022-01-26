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
          content="The personal website for Neil Gebhard"
        ></meta>
      </Head>
      <section>
        <h1 className="hidden">Home</h1>
        <p className="text-7xl font-sans font-bold tracking-tight text-center my-32">
          Hi, I'm <span className="text-animate">Neil Gebhard</span>.
        </p>
        {/* <div className="text-center mb-32 rounded overflow-hidden">
          <Image src="/images/profile-far.jpg" width={320} height={426} />
        </div> */}
      </section>
    </>
  );
}
