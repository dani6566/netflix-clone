import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/header'
import Hero from './Components/Hero/hero'
import Footer from './Components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Hero />
        <Footer /> */}
      </BrowserRouter>

    </>
  )
}

export default App
