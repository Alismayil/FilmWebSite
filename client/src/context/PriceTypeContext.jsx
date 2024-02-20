import React, { createContext, useContext, useEffect, useState } from 'react'
import { userContext } from './UserContext'
import axios from 'axios'
export const PriceTypeContext = createContext()
function PriceTypeProvider({ children }) {
    // const [choosePriceType, setChoosePriceType] = useState(localStorage.getItem('choosePriceType') ? JSON.parse(localStorage.getItem('choosePriceType')) : [])
    // const [freeType, setFreeType] = useState(localStorage.getItem('freeType') ? JSON.parse(localStorage.getItem('freeType')) : [])
    const [currentUser, setcurrentUser] = useState([])
  const { user } = useContext(userContext);
    
    async function getCurrentData() {
        const res = await axios.get(`http://localhost:3000/users/${user._id}`)
        setcurrentUser(res.data)
    }

    useEffect(() => {
        getCurrentData()
    }, []);
    // useEffect(() => {
    //     localStorage.setItem("freeType", JSON.stringify(freeType))
    // }, [freeType])

    // useEffect(() => {
    //     localStorage.setItem("choosePriceType", JSON.stringify(choosePriceType))
    // }, [choosePriceType])

    const data = {
        // choosePriceType,
        // setChoosePriceType,
        // freeType,
        // setFreeType,
        currentUser,
        setcurrentUser,
        getCurrentData
    }
    return (
        <PriceTypeContext.Provider value={data}>
            {children}
        </PriceTypeContext.Provider>
    )
}

export default PriceTypeProvider