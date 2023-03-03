import React from "react";
import '../../style/chatHeader.css'
import noAvatar from '../../assets/avatar.png'
import { useDispatch } from "react-redux";
import { setDialogueByUserId, setSelectedUserId } from "../../store/messenger";

const ChatHeader = ({ userData }) => {

    const dispatch = useDispatch()

    const closeDialogue = () => {
        dispatch(setDialogueByUserId(-1))
    }

    return (
        userData && <header className='header-dialog'>
            <div className="back-btn" onClick={() => closeDialogue()}>{'<'}</div>
            <div onClick={() => dispatch(setSelectedUserId(userData.id))}>{userData.name}</div>
            <img className="header-avatar" src={userData.avatar || noAvatar} alt="avatar" />
        </header>
    )
}

export default ChatHeader