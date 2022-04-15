import { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/mobile-navbar.css";
import "../styles/animations.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(
      "Oops, forgot to remove this console.log. Welp, this is awkward 😅. While you're here, I'd like to say hi! Nice to meet you. Make yourself at home."
    );
  }, []);
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
