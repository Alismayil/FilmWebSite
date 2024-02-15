import React, { createContext, useEffect, useState } from "react";
import { getCookie } from '../../helpers/helpers';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'

export const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
    const [playlist, setplaylist] = useState([])
    const token = getCookie("token")
    const decoded = jwtDecode(token);


    async function handleAddPlaylist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${decoded._id}/addWishlist`, {
                productId: id
            })
            await fetchAllPlaylist()
        } catch (error) {
            alert(error.message)
        }
    }

    async function fetchAllPlaylist(id) {
        try {
            const res = await axios(`http://localhost:3000/users/${decoded._id}/wishlist`)
            setplaylist(res.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        fetchAllPlaylist()
    }, [])
    console.log("playlist", playlist)

    const data = {
        playlist,
        setplaylist,
        token,
        decoded,
        handleAddPlaylist,
        fetchAllPlaylist
    }

    return (
        <PlaylistContext.Provider value={data}>
            {children}
        </PlaylistContext.Provider>
    );
}

export default PlaylistProvider;