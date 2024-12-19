import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Brands } from './components/Brands'
import { Features } from './components/Features'
import { FAQ } from './components/FAQ'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Team from './components/Team'
import About from './components/About'
import Testimonials from './components/Testimonials'




export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Features />
      <FAQ />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
