import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App