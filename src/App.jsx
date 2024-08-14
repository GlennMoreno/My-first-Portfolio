import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './component/Page'
import Card from './component/Card'
import SocialMedia from './component/SocialMedia'
import WaterDropGrid from './component/WaterDropGrid'


function App() {

  return (
    <>  
       <div className='relative bg-black w-full h-screen'>
        <Page/>
        
        <WaterDropGrid/>
        <h1 className="text-gray-500 text text-5xl text-center justify-center grid content-center bg-black  font-[poppins] hover:text-white duration-300">My Social Media</h1>

        <SocialMedia/>
      </div>
     </>
  )
}

export default App
