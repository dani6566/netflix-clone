import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
import './App.css'
import Banner from './Components/Banner/Banner'
import DisplayRow from './Components/DisplayRow/DisplayRow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Banner />
        <DisplayRow />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
