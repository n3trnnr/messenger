import React from 'react';
import '../../../style/settings.css'
import { useDispatch } from 'react-redux';
import { setSettingPath } from '../../../store/settings';

const MenuItem = ({ path, name }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className='setting-item' onClick={() => dispatch(setSettingPath(path))}>
                {name}
            </div>
        </>
    );
}

export default MenuItem;