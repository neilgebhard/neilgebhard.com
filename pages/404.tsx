import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Container>
      <section className="flex flex-col items-center md:flex-row">
        <div className="mb-20 flex-1 space-y-10 text-center">
          <p className="text-4xl font-light">404</p>
          <h1 className="text-5xl font-bold">Page not found</h1>
          <div>
            <Link href="/">
              <a className="inline-block rounded bg-yellow-400 px-6 py-3 text-2xl font-semibold transition hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600">
                Home
              </a>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl flex-1">
          <Image
            src="/images/404.webp"
            width={2500}
            height={1778}
            priority
            alt="404 error illustration"
          />
        </div>
      </section>
    </Container>
  )
}
