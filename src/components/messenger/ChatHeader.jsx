import React from "react";
import '../../style/chatHeader.css'
import noAvatar from '../../assets/avatar.png'
import { useDispatch } from "react-redux";
import { setDialogueByUserId } from "../../store/messanger";

const ChatHeader = ({ userData }) => {

    const dispatch = useDispatch()

    const closeDialogue = () => {
        dispatch(setDialogueByUserId(''))
    }

    return (
        userData && <header className='header-dialog'>
            <div className="back-btn" onClick={() => closeDialogue()}>{'<'}</div>
            <div>{userData.name}</div>
            <img className="header-avatar" src={userData.avatar || noAvatar} alt="avatar" />
        </header>
    )
}

export default ChatHeader