import React from 'react'
import Navbar from './Component/Navbar'
import Section from './Component/Section'
import Mainpoint from './Component/Mainpoint'
import Howitswork from './Component/Howitswork'
import Footer from './Component/Footer'
import TakeControl from './Component/TakeControl'
// import Paras from './Component/Paras'
function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Mainpoint/>
      
      <Howitswork/>
      <TakeControl/> 
      <Footer/>
      {/* <Paras/> */}
    </div>

  )
}

export default App
