import React from "react";
import '../../style/chatHeader.css'
import noAvatar from '../../assets/avatar.png'
import { useDispatch } from "react-redux";
import { setDialogueByUserId, setSelectedUserId } from "../../store/messenger";

const ChatHeader = ({ usersData }) => {

    // console.log('usersData: ', usersData);

    const dispatch = useDispatch()

    const setPolylogueHeader = () => {
        if (usersData.usersId) {
            return true
        }
    }

    // console.log(setPolylogueHeader())

    return (
        usersData && <header className='header-dialog'>
            <div className="back-btn" onClick={() => dispatch(setDialogueByUserId(-1))}>{'<'}</div>
            <div onClick={() => dispatch(setSelectedUserId(usersData.id))}>{usersData.name}</div>
            <img className="header-avatar" src={usersData.avatar || usersData.logo || noAvatar} alt="avatar" />
        </header>
    )
}

export default ChatHeader