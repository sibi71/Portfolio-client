import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom"
import Login from './pages/Login/Login'
import Upload from "./pages/Upload/Upload"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar"
import Mainpage from './pages/Mainpage/Mainpage'
import Projectview from "./pages/Projectview/Projectview"
import Private from './components/Private/Private'  
import Contact from './pages/Contact/Contact'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<> 
        <Navbar />
          <Mainpage />
        </>} />
        <Route path='/projectview' element={<><Projectview /></>} />
        <Route path='/contact' element={<><Contact/></>}/>
        <Route element={<Private />}>
         <Route path='/upload' element= {<Upload />} ></Route>
        </Route>
        <Route path='/login' element={<Login />} />

      </Routes>
    </Router>
  )
}

export default App