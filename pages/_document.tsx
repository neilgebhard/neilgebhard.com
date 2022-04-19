import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body className="bg-neutral-100 text-neutral-900 dark:text-neutral-100 dark:bg-neutral-900 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
