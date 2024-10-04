import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function SecretKey(){
    const [secretKey,setSecretKey]  = useState()
    const navigate = useNavigate()

    function sendRequest(){
        if (secretKey !== 'password'){
            alert('Invalid secret key')
        }else {
            navigate('/signup')
        }
    }
    
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Enter your secret key to signup
                        </h1>
                    </div>
                <div className="justify-center m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secret Key</label>
                    <br/>
                    <input type="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={secretKey} placeholder="Enter Your Secret Key" onChange={e => setSecretKey(e.target.value)}/>
                    <br/>
                    <button 
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={sendRequest}>Secret key</button> 
                </div>
            </div>
        </div>
      </div>
    )
}