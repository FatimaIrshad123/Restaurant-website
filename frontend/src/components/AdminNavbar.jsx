import { NavLink,Link } from "react-router-dom"
import { BiRestaurant } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { useState } from "react"

export default function AdminNavbar(){
    const [menu, setMenu] = useState(false);
  const handleChange = () => {setMenu(!menu);};
  const closeMenu = () => {setMenu(false);};

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
            <NavLink to="/secretkey" duration={500}
              className="hover:text-brightColor transition-all cursor-pointer">Signup 
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
          <NavLink to="/secretkey"   duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Sign Up 
          </NavLink>
          <Link to="/menu" duration={500}
            className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Menu
          </Link>
        </div>
      </div>
    </div>
</div>
    )
}