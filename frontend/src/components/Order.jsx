import { useEffect, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import React from "react"
import { NavLink,Link,useNavigate } from "react-router-dom"
import { BiRestaurant } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineMenuUnfold } from "react-icons/ai"


export default function Order(){
    const [cart,setCart] = useState([])
    const [table, setTable] = useState('')
    const [menu, setMenu] = useState(false);
    const handleChange = () => {setMenu(!menu);};
    const closeMenu = () => {setMenu(false);};

    useEffect(() => {
        axios.get(`${URL}/admin/all/ordered`)
        .then((res) => {return res.data})
        .then((res) => {if (res.length === 0){
            return null;
        }else{
            setCart(res)
        }})          
    },[])

    const data = (sessionStorage.getItem('table'))
    console.log(data)
    return (
        <div>
            <div>
            <div className=" fixed w-full">
              <div>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <div className=" flex flex-row items-center cursor-pointer">
                    <span><BiRestaurant size={32} /></span>
                    <h1 className=" text-xl font-semibold">FoodieWeb</h1>
                  </div>
                  <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                    <NavLink to="/" duration={500} className="hover:text-brightColor transition-all cursor-pointer">Home  </NavLink>
                    <NavLink to="/admin" duration={500} className="hover:text-brightColor transition-all cursor-pointer">Menu </NavLink>                    
                    <NavLink to="/addmenu" duration={500} className="hover:text-brightColor transition-all cursor-pointer">Add Menu </NavLink>
                    <NavLink to="/order" duration={500} className="hover:text-brightColor transition-all cursor-pointer">Order </NavLink>
                    <NavLink to="/" duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => localStorage.clear('token')}>Log out </NavLink>
                  </nav>
                  <div className="md:hidden flex items-center">
                    {menu ? (
                      <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                      <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                  </div>
                </div>
                <div className={` ${ menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                  <NavLink to="/" duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> Home </NavLink>
                  <NavLink to="/addmenu" duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> Add Menu</NavLink>
                  <NavLink to="/" duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => { localStorage.clea('token')}}>Logout </NavLink>
                  <Link to="/admin" duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Menu
                  </Link>
                  <Link to="/order" duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
 
            <div className="bg-gray-100 pb-5 rounded-lg mx-5">
                <h1 className="text-4xl text-left py-5 bg-white">Cart</h1>
                <div className="flex font-bold p-3 rounded w-screen justify-evenly text-2xl">
                    <h2 className="">Food Name</h2>
                    <h2 className="">Price</h2>
                </div>
            </div>
            <h2 className="text-2xl font-bold bg-white text-center">{data}</h2>
            {cart.map((e) => {
                return (
                    <div key={e._id} className="w-full">
                        
                        <div className="bg-gray-100 pb-5 rounded-lg mx-5 mt-4" >
                            <div className="flex font-bold p-3 rounded w-screen justify-evenly">
                                <h2 className="">{e.title}</h2>
                                <h2 className="">{e.price}</h2>
                            </div>
                        </div>
                    </div>
                )})}
        </div>
    )
}