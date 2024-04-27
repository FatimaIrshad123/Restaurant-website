import 'flowbite';
import React, { useState } from "react";


const Home = () => {
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
        </div>
      </div>
   </div>
  );
};

export default Home;
