import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Brands } from './components/Brands'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Team from './components/Team'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
