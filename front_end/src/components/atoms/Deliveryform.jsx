import React from 'react'
const Deliveryform = () => {
    return (
        <form class="max-w-sm mx-auto">
            <h1 class="font-mono block mb-2 text-xl font-medium text-gray-900 dark:text-white">Delivery Address</h1>
            <br />
        {/* SECTION ADDRESS */}
        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address 1</label>
          <input type="text" id="address-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address 2</label>
          <input type="text" id="address-2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' />
        </div>
        {/* SECTION CITY */}
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
        <input
          type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' />
        <br />
        {/* SECTION PROVINCE */}
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
        <input type="text" id="province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=''
        />
        <br />
         {/* SECTION POSTAL CODE */}
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
        <input type="text" id="postal-code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=''
        />  
        <br />
         {/* SECTION COUNTRY */}
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
        <input type="text" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=''
        />  
        <br />
         {/* SECTION TELEPHONE */}
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
        <input type="text" id="telephone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=''
        />  
        {/* SECTION BOUTONS SAVE ET NEXT */}
        <br />
        <div className="flex justify-between space-x-1 mb-6">
        <a href="#_" class="relative inline-block text-sm group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#BEAA7C] group-hover:-rotate-180 ease"></span>
        <span class="relative">Save</span>
          </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#BEAA7C] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        <a href="#_" class="relative inline-block text-sm group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#BEAA7C] group-hover:-rotate-180 ease"></span>
        <span class="relative">Next</span>
          </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#BEAA7C] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </div>
      </form>
    );
  }
  export default Deliveryform