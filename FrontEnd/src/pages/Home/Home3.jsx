import React from 'react'

import Feature1 from '../../assets/feature1.png'
import Feature2 from '../../assets/feature2.png'
import Feature3 from '../../assets/feature3.png'

const Home3 = () => {
  return (
    <div className='bg-[#fff6e9] pt-12 pb-32 sm:px-32 '>
      <div className='text-center text-2xl font-bold text-[#ff9f1c] pb-10'>How We Work</div>
      <div className='flex gap-10 flex-col sm:flex-row '>
      <div style={{width:"70%",height:"60%"}} className=' grid gap-2 justify-around'>
            <div className='col-span-10 row-span-1'><img className='' src={Feature1} alt="" /></div>
            <div className='col-span-1 pl-6 text-3xl font-bold text-[#ff9f1c]'>1</div> 
            <div className='col-span-9  flex justify-evenly font-bold'>We on board & verify the Pet Sitters</div>
            <div className='col-span-1 '></div>
            <div className='break-words pl-2 col-span-9 row-span-1'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
        <div style={{width:"70%",height:"60%"}} className=' grid gap-2 justify-around'>
            <div className='col-span-10 row-span-1'><img className='' src={Feature1} alt="" /></div>
            <div className='col-span-1 pl-6 text-3xl font-bold text-[#ff9f1c]'>1</div> 
            <div className='col-span-9  flex justify-evenly font-bold'>We on board & verify the Pet Sitters</div>
            <div className='col-span-1 '></div>
            <div className='break-words pl-2 col-span-9 row-span-1'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
        <div style={{width:"70%",height:"60%"}} className=' grid gap-2 justify-around'>
            <div className='col-span-10 row-span-1'><img className='' src={Feature1} alt="" /></div>
            <div className='col-span-1 pl-6 text-3xl font-bold text-[#ff9f1c]'>1</div> 
            <div className='col-span-9  flex justify-evenly font-bold'>We on board & verify the Pet Sitters</div>
            <div className='col-span-1 '></div>
            <div className='break-words pl-2 col-span-9 row-span-1'>This verification is performed using AI on the basis of documentation provided by the pet sitter</div>
        </div>
      </div>
    </div>
  )
}

export default Home3
