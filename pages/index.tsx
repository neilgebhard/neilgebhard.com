import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../lib/posts";
import { useRef } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  return (
    <main className="bg-wallpaper">
      <Head>
        <title>Neil Gebhard</title>
        <meta
          name="description"
          content="The personal website for Neil Gebhard"
        ></meta>
      </Head>
      <Navbar
        home
        refs={{ portfolio: portfolioRef, about: aboutRef, blog: blogRef }}
      />
      <Header />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={blogRef}>
        <Blog allPostsData={allPostsData} />
      </div>
      <Footer />
    </main>
  );
}
