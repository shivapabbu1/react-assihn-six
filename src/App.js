import React, { createContext, useState } from 'react'
import RouteFile from './Components/RouteFile'
import Navbar from './Components/Navbar'
import { Context } from 'react'
import Students from './Components/Students'

const App = () => {
  return (
    <>
      <Navbar/>
      <RouteFile/>
    </>
  )
}

export default App