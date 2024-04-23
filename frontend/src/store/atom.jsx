import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default : selector({
        key : 'networkAtomSelector',
        get : async() => {
           
            const res = await axios.get('http://localhost:3000/admin/menu',{
                headers:{'Authorization' : localStorage.getItem('token')}
            })
            
            return res.data
        } 
    })
});