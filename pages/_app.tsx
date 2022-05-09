import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
