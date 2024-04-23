import axios from "axios";
import { atom, selector,atomFamily,selectorFamily } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default : selector({
        key : 'networkAtomSelector',
        get : async() => {
           
            const res = await axios.get('http://localhost:3000/admin/menu/all',{
                headers:{'Authorization' : localStorage.getItem('token')}
            })
            
            return res.data
        } 
    })
});

export const getById = atomFamily({
    key : 'getById',
    default : selectorFamily({
        key : 'TodoSelectorfamily',
        get : (id) => async() => {
            const res = await axios.get(`http://localhost:3000/admin/${id}`)
            return res.data
        }
    })
})

