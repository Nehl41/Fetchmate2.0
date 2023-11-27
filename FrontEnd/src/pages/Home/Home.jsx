import React from 'react'

import { motion } from 'framer-motion'

import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'

const Home = () => {

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting) entry.target.classList.add('animate-appear')
      else entry.target.classList.remove('animate-appear')
    })
  })

  const appearers=document.querySelectorAll('.anim')
  appearers.forEach((el)=>observer.observe(el))


  return (
    // Home Container
<div className=' home-wrapper flex flex-col sm:pt-20 sm:gap-28 gap-12'>



   {/* Home Part 1 */} 
   <Home1/>

    {/* Home Part 2 */}
    <Home2/>

    {/* Home Part 3 */}
    <Home3/>

    {/* Home Part 4 */}
    <Home4/>

    {/* Home Part 5 */}
    <Home5/>

</div>
  )
}

export default Home
