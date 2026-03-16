import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Aboutme from "./components/Aboutme"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Skills /> */}
      <Aboutme/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
