import axios from "axios";
import { useEffect } from "react";
import { atom, selector,atomFamily,selectorFamily } from "recoil";
import { URL } from "../url";

//axios.defaults.withCredentials = true

export const notifications = atom({
    key: "networkAtom",
    default : selector({
        key : 'networkAtomSelector',

        get : async() => {  
                const res = await axios.get(`${URL}/admin/menu/all`)
                console.log('res.data',res.data)
                console.log('res.data.menu',res.data.menu)
                   return res.data.menu
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

