import Hero from '../components/Hero'
import ClientStrip from '../components/ClientStrip'
import CoverageMap from '../components/CoverageMap'
import About from '../components/About'
import Work from '../components/Work'
import Services from '../components/Services'
import SamplingStats from '../components/SamplingStats'
import Staffing from '../components/Staffing'
import Process from '../components/Process'
import PortalCards from '../components/PortalCards'
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
      <CoverageMap />
      <About />
      <Work />
      <Services />
      <SamplingStats />
      <Staffing />
      <Process />
      <PortalCards />
      <Testimonials />
      <Brands />
      <Faq items={homeFaqs} />
      <Contact />
    </>
  )
}
