import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-center">
        <div className="space-y-10 flex-1 text-center mb-20">
          <p className="text-4xl font-light">404</p>
          <h1 className="text-5xl font-bold">Page not found</h1>
          <div>
            <Link href="/">
              <a className="text-2xl inline-block bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 px-6 py-3 rounded text-xl transition font-semibold">
                Home
              </a>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl flex-1">
          <Image src="/images/404.webp" width={2500} height={1778} priority />
        </div>
      </section>
    </Container>
  )
}
