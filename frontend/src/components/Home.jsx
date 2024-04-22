import 'flowbite';
import React from "react";
import Button from "../layouts/Button";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";


const Home = () => {
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
         {/* <Button title="Book your table" />*/} 
         

         <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="{hover|click}" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="button" >Book your table<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 1</label>
        </div>
      </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 2</label>
        </div>
      </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 3</label>
        </div>
      </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table 4</label>
        </div>
      </li>
    </ul>
</div>



         </div>
      </div>
    </div>
  );
};

export default Home;
