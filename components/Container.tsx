import Footer from '../components/Footer'
import Navbar from './Navbar'

const Container = ({ children }) => {
  return (
    <>
      <div className="mx-auto mb-12 max-w-screen-xl overflow-hidden px-6">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Container
