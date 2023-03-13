import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import SettingsMenu from '../elements/molecules/SettingsMenu';

import { useDispatch } from 'react-redux';
import { setSettingPath } from '../../store/settings';

const AsideSettings = () => {

    const dispatch = useDispatch()

    return (
        <aside>
            <Header>
                <Link
                    to='/messenger'
                    className='link-back-from-settings'
                    onClick={() => dispatch(setSettingPath(''))}
                >
                    {'<'}
                </Link>
            </Header>
            <SettingsMenu />
        </aside>
    );
}

export default AsideSettings;