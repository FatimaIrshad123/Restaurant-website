import { useState,useEffect } from "react";
import React from "react";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import {notifications } from "../store/atom";
import axios from "axios";


const Menu = () => {
    const data = useRecoilValue(notifications)
    
  return (
    <div>
      <Suspense fallback={<div>Loading ....</div>}>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        OUR MENU
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
          {data.map((x) => {
            console.log('x',x)
          return (
            <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg" key={x._id}>
              <img className=" rounded-xl w-screen h-80" src={x.imageLink} alt="img" />
              <div className=" space-y-4">
                <h3 className=" font-semibold text-center text-xl pt-6">{x.title}</h3>
                <div className=" flex flex-row items-center justify-center gap-4">
                  <h3 className=" font-semibold text-lg">{x.price} Rs</h3>
                  <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                  onClick={async() => {
                    if (sessionStorage.getItem('table') === ''){
                      alert('Please select table first')
                     }else{
                      const res = await axios.post(
                        `https://resturant-website-bd3aac525b4d.herokuapp.com/admin`,
                        {id:x._id})
                        alert('Order added successfully')
                     }
                  }}>Add to cart</button>
                </div>
              </div>
            </div>
          )})}
      </div>
    </div>
    </Suspense>
    </div>
  );
};

export default Menu;
