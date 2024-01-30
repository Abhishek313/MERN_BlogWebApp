import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About,Dashboard,Home,Project,Signin,Signup } from '../src/pages/index.js'
import Header from './components/Header.jsx'

function App() {
 

  return (

    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path = '/'          element = {<Home/>} />
      <Route path = '/dashboard' element = {<Dashboard/>} />
      <Route path = '/about'     element = {<About/>} />
      <Route path = '/projects'  element = {<Project/>} />
      <Route path = '/sign-in'    element = {<Signin/>} />
      <Route path = '/sign-up'    element = {<Signup/>} />
     </Routes> 
    </BrowserRouter>
   
  )
}

export default App
