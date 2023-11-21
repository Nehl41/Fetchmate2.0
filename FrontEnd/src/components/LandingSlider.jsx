import React, { useEffect, useState } from 'react'


import ProductCard from './ProductCard'
import products from '../DummyData/products'
import ProductImage from '../assets/dogFood.png'

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'






const LandingSlider = () => {

  const [box,setBox]=useState(null)
  const [productCard,setProductCard]=useState(null)
  useEffect(()=>{
    const box=document.querySelector('.carousel-container')
    const card=document.querySelector('.product-card')
    setProductCard(card)
    setBox(box)
  })

  const carouselPrev=()=>{
    let width=box.offsetWidth
    box.scrollLeft=box.scrollLeft-width;
    console.log(`Width:${width}`);
    console.log(`Scroll Left:${box.scrollLeft}`);
  }

  const carouselNext=()=>{
    let width=box.offsetWidth
    box.scrollLeft=box.scrollLeft+width;
    console.log(`Width:${width}`);
    console.log(`Scroll Left:${box.scrollLeft}`);
  }

  return (
    <div className="flex items-center justify-around">
    <AiOutlineLeft style={{color:"gray"}} className='left-caros text-2xl' onClick={carouselPrev}/>
   <div id='carousel-container' className='flex carousel-container scroll-smooth w-full overflow-x-hidden'>
    {products.map(({name,price,weight,imageLink})=>(<ProductCard name={name} price={price} weight={weight} image={imageLink}/>))}
   </div>
<AiOutlineRight style={{color:"gray"}} className='right-caros text-5xl' onClick={carouselNext}/>
    </div>
    
   
  )
}

export default LandingSlider
