import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from "../components/Navbar"
//import Error404 from "../Views/Error404"

function GeneralRouter() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path='*' element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
