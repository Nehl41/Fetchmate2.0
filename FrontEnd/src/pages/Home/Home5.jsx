import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


import ReviewCard from '../../components/ReviewCard'

const Home5 = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-around text-3xl font-bold text-cyan-500'>
        <div>What Others Are Saying...</div>
        <div className='flex justify-evenly sm:w-56 text-black'>
          <span className='rounded-full bg-cyan-500 p-4'><AiOutlineLeft className='text-5xl'/></span>
          <span className='rounded-full bg-cyan-500 p-4'><AiOutlineRight className='text-5xl'/></span>
        </div>
      </div>
      <div className="review-container flex justify-evenly">
        <ReviewCard/>
        <ReviewCard/>  
        </div>
        
    </div>
  )
}

export default Home5
