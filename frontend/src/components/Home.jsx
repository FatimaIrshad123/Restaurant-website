import 'flowbite';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { BiRestaurant } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


const Home = () => {
  const [data,setData] = useState()
  function checkBoxes(){
    console.log('hiii')
    setData (
      <div id="checkboxes" className='flex flex-col text-white'>
                <label for="one"><input type="checkbox" id="one"/>Table 1</label>
                <label for="two"><input type="checkbox" id="two"/>Table 2 </label>
                <label for="three"><input type="checkbox" id="three"/>Table 3</label>
                <label for="one"><input type="checkbox" id="one"/>Table 4</label>
                <label for="two"><input type="checkbox" id="two"/>Table 4 </label>
                <label for="three"><input type="checkbox" id="three"/>Table 5</label>
            </div>
    )
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/photo1.avif')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className=" lg:pl-44">
        <div className=' rounded-lg shadow w-44 dark:bg-gray-700'>
      
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className='bg-orange-500 rounded-lg text-white'>
       
        <option value="">Select your table...</option>
        <option value="option1" className='rounded-lg'>Table 1</option>
        <option value="option2">Table 2</option>
        <option value="option3" className=''>Table 3</option>
       
      </select>
     
    </div>
            {/*<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="{hover|click}" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="button" onClick={checkBoxes} onTouchMove={checkBoxes}>Book your table
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            
{/*<div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
      <div className="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 1</label>
        </div>
      </li>
      <li>
      <div className="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 2</label>
        </div>
      </li>
      <li>
      <div className="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 3</label>
        </div>
      </li>
      <li>
      <div className="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 4</label>
        </div>
      </li>
    </ul>
  </div>*/}
         </div>
      </div>
   </div>
  );
};

export default Home;
