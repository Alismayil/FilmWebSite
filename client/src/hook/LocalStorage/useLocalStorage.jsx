import React, { useEffect, useState } from 'react'

function useLocalStorage(key) {
    const [localFunc, setLocalFunc] = useState(localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):false)

    useEffect(() => {
     localStorage.setItem(key, JSON.parse(localFunc))
    }, [localFunc])
    
    function handleDataStorage(data) {
        setLocalFunc(data)
    }

    return [localFunc, handleDataStorage]
}

export default useLocalStorage