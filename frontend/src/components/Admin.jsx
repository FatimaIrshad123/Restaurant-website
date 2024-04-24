import { NavLink,Link } from "react-router-dom"
import { BiRestaurant } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { useState } from "react"
import Button from "../layouts/Button"

export default function Admin(){
    const [menu, setMenu] = useState(false);
  const handleChange = () => {setMenu(!menu);};
  const closeMenu = () => {setMenu(false);};

  //if(localStorage.getItem('token')){
    //return (<div>Hiii</div>)}
  
    return (
        <div>
            <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className=" text-xl font-semibold">FoodieWeb</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink to="/" duration={500}
              className="hover:text-brightColor transition-all cursor-pointer">Home 
            </NavLink>
            <NavLink to="/menu" duration={500}
              className="hover:text-brightColor transition-all cursor-pointer">Menu 
            </NavLink>
            <NavLink to="/login" duration={500}
              className="hover:text-brightColor transition-all cursor-pointer">Login 
            </NavLink>
            <NavLink to="/signup" duration={500}
              className="hover:text-brightColor transition-all cursor-pointer">Signup 
            </NavLink>
            <NavLink to={'/cart'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </NavLink>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <NavLink to="/"  duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> Home
          </NavLink>
          <NavLink to="/login"   duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> Login
          </NavLink>
          <NavLink to="signup"   duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Sign Up 
          </NavLink>
          <Link to="menu" duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Menu
          </Link>
          <Link to="review"  duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Reviews
          </Link>
        </div>
      </div>
    </div>
</div>
    )
}