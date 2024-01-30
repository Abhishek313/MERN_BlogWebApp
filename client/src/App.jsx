import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About,Dashboard,Home,Project,Signin,Signup } from '../src/pages/index.js'

function App() {
 

  return (

    <BrowserRouter>
     <Routes>
      <Route path = '/'          element = {<Home/>} />
      <Route path = '/dashboard' element = {<Dashboard/>} />
      <Route path = '/about'     element = {<About/>} />
      <Route path = '/projects'  element = {<Project/>} />
      <Route path = '/signin'    element = {<Signin/>} />
      <Route path = '/signup'    element = {<Signup/>} />
     </Routes> 
    </BrowserRouter>
   
  )
}

export default App
