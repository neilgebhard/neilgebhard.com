import Footer from '../components/Footer'
import Navbar from './Navbar'

const Container = ({ children }) => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Container
