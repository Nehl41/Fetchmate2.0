import React from 'react'


const ProductCard = ({name,price,weight,image}) => {
  return (
    <div className="product-card sm:w-64 sm:h-80 pb-8 flex flex-col items-center flex-shrink-0">
      <img className='sm:h-60' src={image} alt="" srcset="" />
      <div className='text-xl font-medium'>{name}</div>
      <div className='text-base font-medium'>Rs. {price}</div>
      <div className='text-sm'>{weight} g</div>
    </div>
  )
}

export default ProductCard
