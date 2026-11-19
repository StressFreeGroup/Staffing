import { useEffect } from 'react'
import PoweredBy from './components/PoweredBy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import WorkPage from './pages/WorkPage'
import PortalPage from './pages/PortalPage'
import NotFound from './pages/NotFound'
import { resolve } from './site'

export default function App({ path = '/' }) {
  const route = resolve(path)

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
      <PoweredBy />
      <Navbar home={route.type === 'home'} />
      <main id="main">
        {route.type === 'home' && <Home />}
        {route.type === 'service' && <ServicePage service={route.service} />}
        {route.type === 'work' && <WorkPage work={route.work} />}
        {route.type === 'portal' && <PortalPage portal={route.portal} />}
        {route.type === '404' && <NotFound />}
      </main>
      <Footer />
    </>
  )
}
