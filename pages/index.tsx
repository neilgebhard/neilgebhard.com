import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate((animate) => !animate);
  };

  return (
    <>
      <Head>
        <title>Home | Neil Gebhard</title>
        <meta
          name="description"
          content="The personal website of Neil Gebhard featuring a portfolio and blog."
        ></meta>
      </Head>
      <section className="my-32">
        <h1 className="hidden">Neil Gebhard</h1>
        <div
          className="h-52 w-52 sm:h-64 sm:w-64 relative m-auto cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src="/images/portrait.webp"
            alt="Picture of the Neil Gebhard"
            layout="fill"
            className="rounded-full flex justify-center"
          />
        </div>
        <p
          className={`text-5xl sm:text-7xl font-sans font-bold tracking-tight text-center cursor-pointer ${
            animate ? "animated fontalicious" : ""
          }`}
          onClick={handleClick}
        >
          Hi, I'm{" "}
          <span className="hidden sm:inline text-animate">Neil Gebhard</span>
          <span className="sm:hidden text-animate">Neil</span>
          <span className="sm:hidden text-animate"> Gebhard</span>.
        </p>
      </section>
    </>
  );
}
