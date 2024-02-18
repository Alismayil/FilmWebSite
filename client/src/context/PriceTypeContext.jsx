import React, { createContext, useEffect, useState } from 'react'

export const PriceTypeContext = createContext()
function PriceTypeProvider({ children }) {
    const [choosePriceType, setChoosePriceType] = useState(localStorage.getItem('choosePriceType') ? JSON.parse(localStorage.getItem('choosePriceType')) : [])
    const [freeType, setFreeType] = useState(localStorage.getItem('freeType') ? JSON.parse(localStorage.getItem('freeType')) : [])

    useEffect(() => {
        localStorage.setItem("freeType", JSON.stringify(freeType))
    }, [freeType])

    useEffect(() => {
        localStorage.setItem("choosePriceType", JSON.stringify(choosePriceType))
    }, [choosePriceType])

    const data = {
        choosePriceType,
        setChoosePriceType,
        freeType,
        setFreeType
    }
    return (
        <PriceTypeContext.Provider value={data}>
            {children}
        </PriceTypeContext.Provider>
    )
}

export default PriceTypeProvider