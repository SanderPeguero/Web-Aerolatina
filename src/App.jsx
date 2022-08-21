// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'

import Home from './components/home/home.jsx'
import Carrers from './components/carrers/carrers.jsx'
import Pilotpass from './components/pilotpass/pilotpass.jsx'
import Rents from './components/rents/rents.jsx'
import Pilots from './components/pilots/pilots.jsx'
import Login from './auth/login/login'

import Footer from './components/footer/footer.jsx'
import './App.css'


//Jhon = 8.42
//Sander = 9.42
//Jose = 5.45
//Horas Invertidas Programando = 16


function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/carrers' element={<Carrers/>}></Route>
            <Route exact path='/pilotpass' element={<Pilotpass/>}></Route>
            <Route exact path='/rents' element={<Rents/>}></Route>
            <Route exact path='/pilots' element={<Pilots/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
