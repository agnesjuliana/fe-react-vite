import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/organisms/Navbar'
import {Greet} from './components/organisms/Greet'
import Card from './components/molecules/Card'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Product from './components/pages/Product'


function App() {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
      </div>
      {/* <Greet name="Dian" usia="10" />
      <Greet name="Agung" usia="20" />
      <Greet name="Rizky" usia="30" />

      <Card title = "CARD 1">
        <h2>
          INI ICON
        </h2>
        <p>Lorem ipsum blablablas</p>
      </Card> */}
    </>
  )
}

export default App