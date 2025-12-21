import Footer from '../components/Footer'
import Navbar from './Navbar'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="mx-auto mb-12 max-w-screen-xl px-6">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Container
