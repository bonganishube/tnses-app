import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pathways } from './components/Pathways'
import { Impact } from './components/Impact'
import { Brands } from './components/Brands'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Team from './components/Team'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pathways />
        <Impact />
        <Brands />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
