import './index.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import HeroCarousel from './components/HeroCarousel'
import { useEffect,  useState } from 'react'

function App() {
  const [data, setData] =useState([{}])

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/members").then(
      res =>res.json()
    ).then(
        data =>{
            setData(data),
            console.log(data)
        }
    )
  }, [])
  return (
    
    <main className='relative'>
      <Nav/>
      <section className='h-screen'>
        <Hero/>
        {/*<HeroCarousel/>*/}
      </section>
      
    </main>
      
    
  )
}

export default App
