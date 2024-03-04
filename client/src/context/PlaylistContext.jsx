import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from '../../helpers/helpers';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userContext } from "./UserContext";

export const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
    const [playlist, setPlaylist] = useState([]);
    const token = getCookie("token");
    const decoded = token && jwtDecode(token);
    const [clickCount, setClickCount] = useState(0);
    const { t, i18n } = useTranslation();
    const {user} = useContext(userContext)

    async function handleAddPlaylist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${user._id}/addWishlist`, {
                productId: id
            });
            if (res.status === 201) {
                toast.error(`${t("DeletePlaylist")}`);
            } else {
                toast.success(`${t("AddedPlaylist")}`);
            }
            await fetchAllPlaylist();
        } catch (error) {
            // console.error("Error adding playlist:", error);
            toast.error("Please Login");
            // toast.error(error.message);
        }
    }

    async function handleDeletePlaylist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${user._id}/deletewish`, {
                productId: id
            });
            toast.error("Delete Movie");
            await fetchAllPlaylist();
        } catch (error) {
            console.error("Error deleting playlist:", error);
            toast.error(t("PlaylistDeleteError"));
        }
    }

    async function fetchAllPlaylist(id) {
            try {
                const res = await axios(`http://localhost:3000/users/${user._id}/wishlist`);
                setPlaylist(res.data);
            } catch (error) {
                console.error("Error fetching playlists:", error);
                // toast.error(t("PlaylistFetchError"));
            }
    }

    useEffect(() => {
        fetchAllPlaylist();
    }, []);

    const data = {
        playlist,
        setPlaylist,
        token,
        decoded,
        handleAddPlaylist,
        fetchAllPlaylist,
        handleDeletePlaylist,
    };

    return (
        <PlaylistContext.Provider value={data}>
            {children}
        </PlaylistContext.Provider>
    );
}

export default PlaylistProvider;
