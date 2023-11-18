import { FaEdit } from "react-icons/fa";

const Profile = ( ) => {
    return(
        <>
        {/* Header */}
            <div className="topheader h-72 bg-blue-200" >
                <div className="contentcontainer flex px-10 pt-36 ">
                    <div className="rightsection flex w-11/12 gap-4 ">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" 
                        className="w-32 h-32 rounded-full"></img>
                        <div className="h-fit w-fit self-center">
                            <h1 className="text-2xl font-bold">Nehal Patidar</h1>
                            <h5 className="text-base">Pet Parent</h5>
                        </div>
                    </div>
                    <div className="leftsection self-end">
                    <button type="button" class="text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       <FaEdit size={18} />
                    </button>
                    </div>
                </div>
            </div>
            {/* Botton form */}
            <div className="ms-20 me-20 mt-10 gap-12">
            <div className="grid grid-cols-2 gap-4 ">
                 <span className="FirstName">
                     <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input type="text" name="firstName" value="Nehal" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jack" required=""/>
                 </span>
                 <span className="LastName">
                     <label htmlFor="Last Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input type="text" name="lastName" value="Patidar" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leo" required=""/>
                 </span>
                 <span className="Email">
                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" value="nehu.np80@gmail.com" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                 </span>

                 <span className="DOB">
                     <label htmlFor="DOB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                      <input type="date" name="DOB" id="DOB" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </span>

                <span className="phoneNumber">
                     <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input type="number" name="phoneNumber" value="7894561230" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="78956-XXXXX" required=""/>
                </span>

                <span className="altNumber">
                     <label htmlFor="altNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alternate Number</label>
                      <input type="number" name="altNumber" value="0123654789" id="altNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </span>

                <span className="address">
                     <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input type="address" name="address" id="address" placeholder="89 LIG colony" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </span>

                <div className="flex gap-4" >
                    <span className="Address">
                     <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                      <input type="city" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Indore" required=""/>
                     </span>

                     <span className="phoneNumber">
                     <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                      <input type="state" name="state" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="M.P." required=""/>
                     </span>

                     <span className="country">
                     <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                      <input type="country" name="country" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="India" required=""/>
                     </span>
                </div>
            </div>
            <div>
                <h3>Your Pets</h3>
                <div>
                    <div>pet 01</div>
                    <div>pet 02</div>
                    <div>pet 03</div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Profile;