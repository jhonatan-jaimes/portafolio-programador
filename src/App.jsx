import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import PagePortafolio from './assets/pages/portafolio/PagePortafolio'
import PageEdsq from './assets/pages/proyectos/PageEdsq'

function App() {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<PagePortafolio />} />
      <Route path="/edsq" element={<PageEdsq />} />
    </Routes>
    </>
  )
}

export default App
