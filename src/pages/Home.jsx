import Hero from '../components/Hero'
import ClientStrip from '../components/ClientStrip'
import About from '../components/About'
import Work from '../components/Work'
import Services from '../components/Services'
import SamplingStats from '../components/SamplingStats'
import Staffing from '../components/Staffing'
import CoverageMap from '../components/CoverageMap'
import Process from '../components/Process'
import Portals from '../components/Portals'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import { homeFaqs } from '../data/services'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <About />
      <Work />
      <Services />
      <SamplingStats />
      <Staffing />
      <CoverageMap />
      <Process />
      <Portals />
      <Testimonials />
      <Brands />
      <Faq items={homeFaqs} />
      <Contact />
    </>
  )
}
