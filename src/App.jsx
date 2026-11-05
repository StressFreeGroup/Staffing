import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientStrip from './components/ClientStrip'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Staffing from './components/Staffing'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <About />
        <Work />
        <Services />
        <Staffing />
        <Process />
        <Testimonials />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
