import './index.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import HeroCarousel from './components/HeroCarousel'

function App() {
  
  return (
    
    <main className='relative'>
      <Nav/>
      <section className='h-screen'>
        <Hero/>
        <HeroCarousel/>
      </section>
      
    </main>
      
    
  )
}

export default App
