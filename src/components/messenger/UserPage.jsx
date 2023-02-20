import React from "react";
import avatar from '../../assets/avatar.png'
import '../../style/userPage.css'


const UserPage = () => {
    return (
        <>
            <img className='user-avatar' src={avatar} alt="user" />
            <div className='user-name'>Julius</div>
        </>

    )
}

export default UserPage