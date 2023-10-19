import React from 'react'
import { AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";

const Footer = () => {
  return (
    <div className='h-2/5 flex justify-around pb-10'>
      <div className="footer-1 flex flex-col justify-evenly grow-1">
        <img src={OrangeLogo} alt="Fetchmate Logo"  className="h-36"/>
        <span className='font-medium'>&#169; 2023 Fetchmate</span>
      </div>
      <div className="footer-2 flex flex-col justify-around">
        <div className="footer-subheading font-medium text-xl">Services</div>
        <ul className='text-base basis-4/5 flex flex-col justify-around'>
            <li>Pet Day care</li>
            <li>Dog Walking</li>
            <li>Over Night Stay</li>
            <li>Doctors Visit</li>
        </ul>
      </div>
      <div className="footer-3 flex flex-col justify-between">
      <div className="footer-subheading font-medium text-xl">Know Us More</div>
        <ul className='text-base basis-4/5 flex flex-col justify-around '>
            <li>About</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-4 flex flex-col justify-center">
      <ul className='text-base flex flex-col justify-around basis-4/5 self-end'>
            <li>Blog</li>
            <li>FAQ's</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-5 flex flex-col justify-evenly text-2xl">
        <div className='font-medium text-xl'>Follow Us:</div>
        <ul className='flex justify-evenly'>
            <li><AiOutlineInstagram className=''/></li>
            <li><AiOutlineTwitter/></li>
            <li><AiFillLinkedin/></li>
        </ul>
        </div>  
    </div>
  )
}

export default Footer
