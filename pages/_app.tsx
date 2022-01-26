import { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/mobile-navbar.css";
import "../styles/text-animate.css";

export default function App({ Component, pageProps }: AppProps) {
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
