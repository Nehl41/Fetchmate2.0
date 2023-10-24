import React from 'react'
import CuteCat from '../../assets/cuteCat.png'
import DogGroup from '../../assets/dogGroup.png'

const Home2 = () => {
  return (
    <div className='flex justify-around gap-12 flex-col-reverse sm:gap-0 sm:flex-row px-12 sm:px-24'>
      <div className='sm:flex w-2/5 grid grid-rows-2 gap-10 sm:flex-col sm:justify-around '>
      <div className='sm:self-start sm:px-0 px-12'><img className='image-shadow' style={{borderRadius:"20%/50%"}} src={DogGroup} alt="" /></div>
      <div className='sm:self-end sm:px-0 px-12'><img className='image-shadow' style={{borderRadius:"20%/50%"}} src={CuteCat} alt="" /></div>
      </div>
      <div style={{borderRadius:"50%"}}  className='flex gap-10 sm:p-16 py-16 w-2/5 flex-col justify-around items-center bg-[#d2f4f2]'>
    <div className=' text-2xl font-medium'>Why Choose Fetchmate ?</div>
    <div className=' flex items-center justify-center w-80  text-center'>we have trusted and verified pet sitters, who take care of your pets need when you asre away from them. we ensure to provide a comfortable and safe environment for your pets</div>
     <div className=''><button
        type="button"
        className="focus:outline-none bg-[#2dfdca]  font-medium rounded-lg text-xl px-4 py-2 dark:focus:ring-yellow-900">
        Get Started
      </button></div> 
      </div>
    </div>
  )
}

export default Home2
