import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'

import Home from './components/home/home.jsx'
import Carrers from './components/carrers/carrers.jsx'
import Pilotpass from './components/pilotpass/pilotpass.jsx'
import Rents from './components/rents/rents.jsx'
import Pilots from './components/pilots/pilots.jsx'
import Login from './auth/login/login'

import SignUp from './components/SigIn/SigIn.jsx'
import SignUpModal from './components/SigIn/SigInModal.jsx'

// import LogIn from './components/LogIn/LogIn.jsx'
import LogInModal from './components/LogIn/LogInModal.jsx'

import Footer from './components/footer/footer2.jsx'
// import Footer2 from './components/footer/footer.jsx'
import './App.css'


//Jhon = 8.42
//Sander = 9.42
//Jose = 5.45
//Horas Invertidas Programando = 16


function App() {

const [openSigIn, setOpenSigIn] = useState(false) 

const [openLogin, setOpenLogin] = useState(false)


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* <BrowserRouter> */}
      {/* ok, por eso era el error, ok */}
        <header>
          <Navbar setOpenSigIn={setOpenSigIn} setOpenLogin={setOpenLogin}/>
          <SignUpModal open={openSigIn} setOpen={setOpenSigIn}/>
          <LogInModal open={openLogin} setOpen={setOpenLogin}/>

        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/carreras' element={<Carrers/>}></Route>
            <Route exact path='/pilotpass' element={<Pilotpass/>}></Route>
            <Route exact path='/rentas' element={<Rents/>}></Route>
            <Route exact path='/pilotos' element={<Pilots/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
          </Routes>
        </main>
        <Footer/>
        {/* <Footer2/> */}
    </div>
  )
}

export default App
