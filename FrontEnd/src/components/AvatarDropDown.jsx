import React from 'react'
import useUserStore from '../Store/userStore'

const AvatarDropDown = ({displayState}) => {

 const logout=useUserStore((state)=>state.logOut)

  return (
    <div style={{right:"2.5%",padding:"1.5%"}} id='dropdown' className={`rounded-2xl ${displayState?'absolute':'hidden'} bg-gray-100 text-white flex flex-col items-center justify-around gap-4`}>
      <div className='text-white p-2 rounded-xl bg-yellow-400'>My Profile</div>
      <button onClick={()=>{logout()}} className='border-2 w-fit p-2 rounded-lg bg-white text-yellow-300'>LogOut</button>
    </div>
  )
}

export default AvatarDropDown
