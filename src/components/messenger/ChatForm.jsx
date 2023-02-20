import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../../style/chatForm.css'
import { sendMessage as sendMessageAction } from "../../store/messenger";

const ChatForm = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const sendMessage = () => {
        if (text) {
            dispatch(sendMessageAction(text))
            setText('')
        }
    }

    return (
        <footer className='input-form'>
            <textarea className='input-field' value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <button className='send-btn' onClick={() => sendMessage()}>Send</button>
        </footer>
    )
}

export default ChatForm