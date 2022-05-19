import Footer from '../components/Footer'
import Navbar from './Navbar'

const Container = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 mb-12 overflow-hidden">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Container
