import styled from 'styled-components'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './components/experience/experience.tsx'
import Hero from './components/hero/hero.tsx'
import  Contact from "./components/Contact/contact.tsx"
import Skills from './components/Skills/skills.tsx'
const Container=styled.div`
width:100vw;
overflow-x:hidden;
`
const App=()=> {

  return (
    <Container>
    <Hero/>
    <Experience />
    <Contact/>
    <Skills/>

    
      
    </Container>
  )
}

export default App
