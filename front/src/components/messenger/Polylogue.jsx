import React from 'react';
import { useDispatch } from 'react-redux';
import noLogo from '../../assets/avatar.png'
import { setDialogueByUserId } from '../../store/messenger';

const Polylogue = ({ id, name, logo, text, time }) => {

    const dispatch = useDispatch()

    return (
        <div className='user-wrapper' onClick={() => dispatch(setDialogueByUserId(id))}>
            <img className='user-avatar' src={logo || noLogo} alt="polylogue-logo" />
            <div className='aside-block-incoming-message-wrapper'>
                <div className='aside-block-user-name'>{name}</div>
                <div className='aside-block-incoming-message'>{text}</div>
                <div className='aside-block-message-time'>{time}</div>
            </div>
        </div>
    );
}

export default Polylogue;