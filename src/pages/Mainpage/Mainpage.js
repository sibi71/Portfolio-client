import React from 'react'
import Home from '../../components/Home/Home'
import "./Mainpage.css"
import About from "../../components/About/About"
import Skills from "../../components/Skills/Skills"
import Projects from "../../components/Projects/Projects"
import Footer from '../../components/Footer/Footer'
import ScrollTop from "../../components/ScrollTop/ScrollTop"

const Mainpage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Mainpage