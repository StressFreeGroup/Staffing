import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Staffing from './components/Staffing'
import Expertise from './components/Expertise'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Staffing />
      <Expertise />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
