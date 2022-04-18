import { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/mobile-navbar.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
