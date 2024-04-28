import { NavLink,Link,useNavigate } from "react-router-dom"
import { BiRestaurant } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import {notifications } from "../store/atom";
import axios from "axios"

export default function AdminMenu(){
    const [menu, setMenu] = useState(false);
    const handleChange = () => {setMenu(!menu)};
    const closeMenu = () => {setMenu(false)};
    const [data,setData] = useRecoilState(notifications)

    async function handleDelete(id) {
      const navigate = useNavigate()
        const res = await axios.post(
            //'http://localhost:3000/admin/menu/delete',
            `https://resturant-website-bd3aac525b4d.herokuapp.com/admin/delete`,
            {id})
        alert('Menu deleted successfully')
        navigate('/admin')
    }

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
                  <Link to="/order" duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
              <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
                OUR MENU
              </h1>
              <div className=" flex flex-wrap gap-8 justify-center">
                {data.menu.map((x) => {
                  return (
                    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg" key={x._id}>
                      <img className=" rounded-xl w-screen" src={x.imageLink} alt="img" />
                      <div className=" space-y-4">
                        <h3 className=" font-semibold text-center text-xl pt-6">{x.title}</h3>
                        <div className=" flex flex-row items-center justify-center gap-4">
                          <h3 className=" font-semibold text-lg">{x.price} Rs</h3>
                          <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                            onClick = {() => {handleDelete(x._id)}}>Delete Menu</button>
                        </div>
                      </div>
                    </div>
                )})}
            </div>
          </div>
        </div>
      </div>
    )
}