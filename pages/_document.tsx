import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
