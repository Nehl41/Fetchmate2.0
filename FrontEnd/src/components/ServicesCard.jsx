import React from 'react'
import ServicesThumb from '../assets/servicesThumb.png'

const ServicesCard = ({name,image,description}) => {
  return (
    <div className='flex flex-col rounded-md w-80 px-4 h-96 justify-evenly box-shadow-3d'>
      <div className='flex items-center justify-around'>
        <img src={image} alt="" className='rounded-full'/>
        <div className='text-base font-medium'>{name}</div>
      </div>
      <div className='word-wrap px-4 text-justify text-sm text-gray-400 '>{description}</div>
      <div className='flex justify-center '><button className='bg-yellow-500 p-2 rounded-md'>Book Service</button></div>
    </div>
  )
}

export default ServicesCard