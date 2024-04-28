import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "./Navbar"
import { URL } from "../url"
import React from "react"

export default function Cart(){
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    let sum = [];

    useEffect(() => {
        async function data(){
            await axios.post(`https://resturant-website-bd3aac525b4d.herokuapp.com/admin/cart/update`)
            return null;
        }
        window.addEventListener('beforeunload', data);
    }, [])

    async function handleDelete(id) {
        const res = await axios.post('http://localhost:3000/admin/delete',
            //`https://resturant-website-bd3aac525b4d.herokuapp.com/admin/delete`,
            {id})
        const filter =  setCart(cart.filter((item) => item._id !== id ))
         cart?.map((e) => {
            if(e._id == id){
                let x = e.price
                console.log('total',total)
                console.log(x)
                setTotal(total-x)
                console.log('total1',total)
            }
        })
    }

    useEffect(() => {
            axios.get(`${URL}/admin/all/ordered`)
            .then((res) => {return res.data})
            .then((res) => {if (res.length === 0){
                return null;
            }else{
                setCart(res)
            }
                res?.map((e) => {
                let x = e.price
                sum.push(x)
                const sum1 = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                setTotal(sum1)
            })
        })          
   },[])

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5">
                <h1 className="text-4xl text-left py-5 bg-white">Cart</h1>
                <div className="flex font-bold p-3 rounded w-screen">
                    <h2 className="pr-20">Food Name</h2>
                    <h2 className="pl-10">Price</h2>
                </div>
            </div>
            {cart.map((e) => {
                return (
                    <div key={e._id} className="w-full">
                        <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5 mt-4" >
                            <div className="flex font-bold p-3 rounded w-screen">
                                <h2 className="pr-20">{e.title}</h2>
                                <h2 className="pl-10">{e.price}</h2>
                                <button onClick={()=> {handleDelete(e._id)}} className="pl-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )})}
                <div>
                    <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5">
                        <h1 className="text-4xl text-left py-5 bg-white">Total</h1>
                        <div className="flex font-bold p-3 rounded w-screen">
                            <h2 className="pl-10">Your bill: </h2>
                            <h2 className="pr-48">{total}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }