import { useState } from 'react'
import Header from './components/header'
import Carousel from './components/carousel'
import Main from './components/Main'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Carousel/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
