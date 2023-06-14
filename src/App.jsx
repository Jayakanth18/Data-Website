import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  )
}

export default App