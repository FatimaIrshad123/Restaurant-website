import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
  const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    async function sendRequest(){
        try {
            const response = await axios.post("http://localhost:3000/admin/signin",{username,password} )
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            navigate('/menu')
            console.log(response.data)
            console.log(jwt)
        } catch (error) {
            alert('Invalid Email or password')
            console.log(error)
        }
    }
    return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
              </h1>
        </div>
        <div className="justify-center m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <br/>
            <input type="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={username} placeholder="Enter Username" onChange={e => setUsername(e.target.value)}/>
            <br/>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <br/>
            <input type="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
            <br/>
          <button 
          className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
         
              onClick={sendRequest}
              >
                Login</button>
                
                </div>    
                <p class="text-sm font-light 
                text-gray-500 dark:text-gray-400 mb-5 ml-5">
                      Don’t have an account yet? <Link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
      </div>
      </div>
    )
  }