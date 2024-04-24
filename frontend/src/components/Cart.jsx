import { useEffect, useState } from "react"
import axios from "axios"
import { useRecoilState } from "recoil"
import { getById } from "../store/atom"
import { startTransition } from 'react';

export default function Cart({id}){
    const [cart,setCart] = useState([])
    
    const [data,setData] = useRecoilState(getById(id))
   //const id = '66261594df6655a3ae4f69f3'

   useEffect (() => {
    
        const response =  axios.get('http://localhost:3000/admin/all/ordered').then((res) => {return res.data}).then(res => setCart(res))
       // setCart(response.data)
        //console.log(response)
   
   },[])
  //console.log(data)
  console.log(cart)
    return (
        <div>
            <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5">
            <h1 className="text-4xl text-left py-5 bg-white">Cart</h1>
            <div className="flex font-bold p-3 rounded w-screen">
                <h2 className="pr-48">Food Name</h2>
                <h2 className="pl-20">Price</h2>
            </div>
        </div>
        {cart.map((e) => {
            return (
                <div key={e._id}>
                    <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5 mt-4" >
            
            <div className="flex font-bold p-3 rounded w-screen">
                <h2 className="pr-48">{e.title}</h2>
                <h2 className="pl-20">{e.price}</h2>
            </div>
                    </div>
                    </div>
            )
        })}
        </div>
    )

}

