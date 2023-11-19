import React from 'react'
import ReactModal from 'react-modal'

const AddPetSitterModal = ({isModalOpen,setIsModalOpen}) => {
  return (
    <ReactModal
      style={{
        content: {
          height: "75%",
          width: "50%",
          left: "25%",
          top:"20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "2%",
          paddingRight: "3%",
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel='Register Your Pet'
    >
      <div className="flex flex-col gap-6 h-full">
       <div className='text-2xl font-bold text-center'>Add Your Pet</div>
       <input type="text" placeholder='Enter Pet Name' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="bird">Bird</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="reptile">Reptile</option>
       </select>
       <input type="text" placeholder='Enter Pet Breed' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       <input type="text" placeholder='Enter Pet Gender' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       <textarea  placeholder='Enter Pet Description' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
    </ReactModal>
  )
}

export default AddPetSitterModal
