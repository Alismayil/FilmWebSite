import React, { createContext, useEffect, useState } from "react";
import { getCookie } from '../../helpers/helpers';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
    const [playlist, setplaylist] = useState([])
    const token = getCookie("token")
    const decoded = token && jwtDecode(token)
    const [clickCount, setClickCount] = useState(0);
    const { t, i18n } = useTranslation();




    async function handleAddPlaylist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${decoded._id}/addWishlist`, {
                productId: id
            })
            res.status === 201 ? toast.error(`${t("DeletePlaylist")}`) : toast.success(`${t("AddedPlaylist")}`)

            await fetchAllPlaylist()
        } catch (error) {
            alert(error.message)
        }
    }


    async function handleDeletePlaylist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${decoded._id}/deletewish`, {
                productId: id
            })
            toast.error("Delete Movie")
            await fetchAllPlaylist()
        } catch (error) {
            console.log(error.message);
        }
    }
    // console.log("birsey:")
    async function fetchAllPlaylist(id) {
        if (decoded) {
            try {
                const res = await axios(`http://localhost:3000/users/${decoded._id}/wishlist`)
                setplaylist(res.data)
            } catch (error) {
                alert(error.message)
            }
        }

    }

    useEffect(() => {
        fetchAllPlaylist()
    }, [])

    const data = {
        playlist,
        setplaylist,
        token,
        decoded,
        handleAddPlaylist,
        fetchAllPlaylist,
        handleDeletePlaylist,
    }

    return (
        <PlaylistContext.Provider value={data}>
            {children}
        </PlaylistContext.Provider>
    );
}

export default PlaylistProvider;