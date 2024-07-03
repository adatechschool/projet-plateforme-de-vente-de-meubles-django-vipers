import React from 'react'

const Deliveryform = () => {
    return (

        <form class="max-w-sm mx-auto">

            <h1 class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Delivery Address</h1>
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

        <br />
        <div class="mb-6">
            <button type="submit" class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >Save</button>
        </div>
      </form>

        
    
    );
  }
  
  export default Deliveryform