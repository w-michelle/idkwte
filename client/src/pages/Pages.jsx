import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Restaurant from './Restaurant'
import Random from './Random'
import { AnimatePresence } from 'framer-motion'



function Pages() {
  return (
  <AnimatePresence mode="wait">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path="/restaurant/:id" element={<Restaurant />}/>
      <Route path="/random" element={<Random/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages        