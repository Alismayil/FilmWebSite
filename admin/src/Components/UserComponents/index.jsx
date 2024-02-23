import React, { useEffect, useState } from 'react'
import './UserComponents.scss'
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useContext } from 'react';
import { userContext } from '../../../../client/src/context/UserContext';

function UserComponents() {
    const [user, setUser] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();
    const { token } = useContext(userContext)

    function handleOpenform() {
        setopenForm(!openForm)
    }

    console.log("token:", token);
    async function getHeaderData() {
        const res = await axios.get("http://localhost:3000/users")
        setUser(res.data)
    }


    async function handleDelete(id, token) {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("User deleted successfully");
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }


    useEffect(() => {
        getHeaderData()
    }, [])
    return (
        <div className='userComponents'>
            <h1>All Users</h1>
            <div className="userAdminBox">
                <table>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Price Type</th>
                        <th style={{ width: "80px" }}>Delete</th>
                    </tr>
                    {
                        user && user.map((item) => (
                            <tr>
                                <td>{item.username}</td>
                                <td>{item.role}
                                    <button className='changeRole'>Admin</button>
                                </td>
                                <td ><p>{item.email}</p></td>
                                <td className='priceType' style={item.stripe === "Premium" ? { backgroundColor: 'gold' } : item.stripe === "Basic" ? { backgroundColor: '#00B4D8' } : item.stripe === "Free" ? { backgroundColor: 'green' } : { backgroundColor: '#D00000' }}>{item.stripe === "Premium" ? <p>Premium</p> : item.stripe === "Basic" ? <p >Basic</p> : item.stripe === "Free" ? <p >Free</p> : <p >Not Selected</p>}</td>
                                <td style={{ width: "80px" }}>
                                    <button className='deleteBtn' onClick={() => handleDelete(item._id,token)}><AiOutlineDelete /></button>
                                    {/* <button className='editBtn'><AiFillEdit /></button> */}
                                </td>
                            </tr>
                        ))
                    }


                </table>
            </div>

        </div>
    )
}

export default UserComponents