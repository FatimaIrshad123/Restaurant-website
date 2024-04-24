import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../url";

export default function AddMenu(){
    const [title,setTitle] = useState('')
    const [imageLink,setImageLink] = useState('')
    const [price,setPrice] = useState(0)
    const navigate = useNavigate()

    async function sendRequest(){
        try {
            if (title=='' || imageLink== ''|| price==''){
                return alert('Please fill the required field')
            }
            const response = await axios.post(`${URL}/admin/addmenu`,{title,imageLink,price},
            {headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
              }})
              navigate('/menu')
             
        } catch (error) {
            alert('request failed')
            console.log(error)
        }
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Menu
                        </h1>
                    </div>
                <div className="justify-center m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <br/>
                    <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={title} placeholder="Enter Food name" onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ImageLink</label>
                    <br/>
                    <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={imageLink} placeholder="Enter image link" onChange={e => setImageLink(e.target.value)}/>
                    <br/>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <br/>
                    <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={price} placeholder="Enter food price" onChange={e => setPrice(e.target.value)}/>
                    <br/>
                    <button 
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={sendRequest}>Add Food</button>
                </div>    
            </div>
        </div>
    </div>
    )
}