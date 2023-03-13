import React from "react";
import { useSelector } from "react-redux";
import avatar from '../../assets/avatar.png'
import '../../style/userPage.css'


const UserPage = () => {

    const userData = useSelector(({ settings }) => settings.userData)

    return (
        <>
            <img className='user-avatar' src={userData.avatar || avatar} alt="user" />
            <div className='user-name'>{userData.name}</div>
        </>

    )
}

export default UserPage