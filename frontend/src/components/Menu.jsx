import { useState,useEffect } from "react";
import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import Button from "../layouts/Button";

const Menu = () => {
  const [data,setData] = useState('')
  useEffect(() => {
    function callback2(data){        
        for (let i in data){
          setData(data[i].map(x => {
            return (
              <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl" src={x.imageLink} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{x.title}</h3>
       
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{x.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
            )
          }))
        }}
      function callback1(res){
        res.json().then(callback2)
      }
    fetch('http://localhost:3000/admin/menu',{method:'GET',
        headers:{'Authorization' : localStorage.getItem('token')}
    }).then(callback1)
},[])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
          {data}
        <DishesCard img={menu1} title='Delicious Dish' price='$18.99' />
        <DishesCard img={menu1} title='Delicious Dish' price='$18.99' />
        <DishesCard img={menu2} title="Delicious Dish" price="$18.99" />
        <DishesCard img={menu3} title="Delicious Dish" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
