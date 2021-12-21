import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
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
    <main className="bg-wallpaper">
      <Head>
        <title>Neil Gebhard</title>
        <meta
          name="description"
          content="The personal website for Neil Gebhard"
        ></meta>
      </Head>
      <Navbar home />
      <Header />
      <Portfolio />
      <About />
      <Blog allPostsData={allPostsData} />
      <Footer />
    </main>
  );
}
