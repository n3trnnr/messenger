import React from 'react';
import { useDispatch } from 'react-redux';
import noLogo from '../../assets/avatar.png'
import { setDialogueByUserId } from '../../store/messenger';

const Polylogue = ({ id, name, logo }) => {

    const dispatch = useDispatch()

    return (
        <div className='user-wrapper' onClick={() => dispatch(setDialogueByUserId(id))}>
            <img className='user-avatar' src={logo || noLogo} alt="polylogue-logo" />
            <div className='user-name'>{name}</div>
        </div>
    );
}

export default Polylogue;