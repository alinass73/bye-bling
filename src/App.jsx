import { useState } from 'react'
import reactLogo from './assets/images/plane.png'
import './App.css'

function App() {
   
  return (
   <div className="flex items-center justify-center w-screen h-screen bg-linen">
      <div className="text-center">
          <h1 className="text-3xl font-bold font-lato md:text-5xl text-mgreen ">
            Coming Soon ..
          </h1>
        <div className="flex justify-center mt-6">
          <img src={reactLogo}  className="w-73 text-mgreen animate-pulse" alt="sss" />
        </div>
 
      </div>
    </div>
  )
}

export default App
