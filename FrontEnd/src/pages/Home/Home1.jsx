import React from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import LandingImg1 from '../../assets/landingImg1.png'
import LandingImg2 from '../../assets/landingImg2.png'
import RabbitThumb from '../../assets/rabbit.png'
import BlackDogThumb from '../../assets/blackDog.png'

const Home1 = () => {
  return (
    <div className='home-upper grid gap-10 grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid sm:grid-cols-2 sm:px-24 px-10 '>
    <div className='flex flex-col gap-6 justify-evenly'>
    <div className='sm:text-4xl text-2xl font-medium'>We Provide Something Amazing<br/>of two lines</div>
    <div className='text-xl pr-3.5'>Some Captive text here for the engagement purpose lets see what can fit in here will ask my team mates about it</div>
   <div className="button-wrapper">
   <button
        type="button"
        className="bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-xl px-4 py-2 ">
        Find Sitter
      </button>
   </div>
      <div className='flex items-center'><div>
       <div className='inline' > <img className='inline relative sm:left-14'  style={{borderRadius:"50%",border:"5px solid white",outline:"1px solid black"}} src={RabbitThumb} alt="" /></div>
       <div className="inline relative sm:left-12"> <img style={{borderRadius:"50%",border:"5px solid white",outline:"1px solid black"}} className='inline relative right-5' src={BlackDogThumb} alt="" /></div>
        <div style={{borderRadius:"50%",border:"5px solid white",outline:"1px solid black"}} className='inline text-2xl p-1 px-2 relative bottom-10 left-16 sm:left-0 sm:top-2 bg-cyan-300'><AiOutlinePlus className='inline'/></div>
        </div><div className='text-xl sm:px-10 px-4'>We are a growing community of 500+</div></div>
    </div>
    <div className="home-upper-right flex justify-evenly sm:gap-0 gap-12">
      <div className="capsule-image-wrapper side-capsule-shadow h-72 flex items-center overflow-hidden"><img src={LandingImg1} alt="" className=' relative top-5 h-full w-full' /></div>
     <div className="capsule-image-wrapper side-capsule-shadow capsule h-80 flex items-center overflow-hidden"><img src={LandingImg2} alt="" className=' relative top-8' /></div>
    </div>
  </div>
  )
}

export default Home1
