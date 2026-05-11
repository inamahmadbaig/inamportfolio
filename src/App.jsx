import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import BodyMain from './component/bodymain.jsx'
import Skills from './component/Skills.jsx'
import Projects from './component/Project.jsx'
import About from './component/About-Me.jsx'
import Footer from './component/Footer.jsx'
import Contact from './component/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Header />
      <BodyMain />
      <Skills />
      {/* <Projects /> */}
      <Projects />
      <About /> 
      <Contact />
      {/* <Footer /> */}
      <Footer/>
    </section>
  )
}

export default App