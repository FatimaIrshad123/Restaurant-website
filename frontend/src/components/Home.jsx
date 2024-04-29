import 'flowbite';
import React, { useEffect, useState } from "react";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Retrieve the value from localStorage on component mount
    const storedValue = sessionStorage.getItem('table');
    console.log(storedValue)
    if (storedValue) {
      setSelectedOption(storedValue);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('table',selectedOption)
  },[selectedOption])
  
//console.log(selectedOption)

  
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/photo1.avif')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
        It is a digital platform that allows diners to view a restaurant's menu, place orders, and interact with various features using electronic devices such as smartphones, tablets, or directly integrated screens on restaurant tables.
        </p>
        <div className=" lg:pl-44">
          <div className=' rounded-lg shadow w-44 dark:bg-gray-700'>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className='bg-orange-500 rounded-lg text-white'>
              <option value="">Select your table...</option>
              <option value="Table 1" className='rounded-lg'>Table 1</option>
              <option value="Table 2">Table 2</option>
              <option value="Table 3" className=''>Table 3</option>
            </select>
          </div> 
        </div>
      </div>
   </div>
  );
};

export default Home;
