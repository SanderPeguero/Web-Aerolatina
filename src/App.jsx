// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Home/Footer/Footer.jsx'
import Body from './Components/Home/Body.jsx'
import './App.css'


//Jhon = 7
//Sander = 6
//Jose = 3
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
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
