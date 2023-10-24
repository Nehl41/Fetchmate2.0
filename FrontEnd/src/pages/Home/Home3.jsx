import React from 'react'

import Feature1 from '../../assets/feature1.png'
import Feature2 from '../../assets/feature2.png'
import Feature3 from '../../assets/feature3.png'

const Home3 = () => {
  return (
    <div className='bg-[#fff6e9] pt-16 pb-32 sm:px-32 '>
      <div className='text-center text-2xl font-bold text-[#ff9f1c] pb-10'>How We Work</div>
      <div className='flex flex-col sm:flex-row'>
        <div className='h-3/4 flex flex-col justify-around'>
            <div><img className='pb-8' src={Feature1} alt="" /></div>
            <div className='flex justify-evenly text-xl font-medium pb-4'><div className='text-3xl font-bold text-[#ff9f1c]'>1</div> We on board & verify the Pet Sitters</div>
            <div className='px-8 text-xl break-words'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
        <div className='h-3/4 flex flex-col justify-around'>
            <div><img className='pb-8' src={Feature1} alt="" /></div>
            <div className='flex justify-evenly text-xl font-medium pb-4'><div className='text-3xl font-bold text-[#ff9f1c]'>1</div> We on board & verify the Pet Sitters</div>
            <div className='px-8 text-xl'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
        <div className='h-3/4 flex flex-col justify-around'>
            <div><img className='pb-8' src={Feature1} alt="" /></div>
            <div className='flex justify-evenly text-xl font-medium pb-4'><div className='text-3xl font-bold text-[#ff9f1c]'>1</div> We on board & verify the Pet Sitters</div>
            <div className='px-8 text-xl'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
       
      </div>
    </div>
  )
}

export default Home3
