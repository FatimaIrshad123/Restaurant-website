import { useState } from "react"
import axios from "axios"

export default function Cart(){
    const [cart,setCart] = useState(0)
    const [data,setData] = useRecoilState(notifications)
    
    async function sendRequest(){
        try {
            const response = await axios.post(`http://localhost:3000/admin/66261594df6655a3ae4f69f3` )
            
            console.log(response.data)
            
        } catch (error) {
            alert('error')
            console.log(error)
        }
    }
    return (
        <div>
            <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg mx-5">
            <h1 className="text-4xl text-left py-5 bg-white">Cart</h1>
            <div className="flex font-bold p-3 rounded w-screen">
                <h2 className="pr-48">Food Name</h2>
                <h2 className="pl-20">Price</h2>
            </div>
            <button onClick={sendRequest}>Click</button>
        </div>
        </div>
    )
}


