import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Team from './components/team/Team'
import Research from './components/research/Research'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <Research />
      <Team />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
