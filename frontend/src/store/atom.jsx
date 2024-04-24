import axios from "axios";
import { useEffect } from "react";
import { atom, selector,atomFamily,selectorFamily } from "recoil";
import { URL } from "../url";

axios.defaults.withCredentials = true

export const notifications = atom({
    key: "networkAtom",
    default : selector({
        key : 'networkAtomSelector',
        get : async() => {  
            const res = await axios.get(`${URL}/admin/menu/all`,{
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
            const res = await axios.get(`${URL}/admin/${id}`)
            return res.data
        }
    })
})

