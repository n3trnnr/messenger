import React from 'react';
import { useSelector } from 'react-redux';
import Confidentiality from './Confidentiality';
import UserAccount from './UserAccount';

const SettingsContent = () => {

    const settingPath = useSelector((state) => state.settings.settingPath)
    // console.log('Setting content: ', settingPath)

    const setSetting = () => {
        switch (settingPath) {
            case 'useraccount':
                return <UserAccount />
            case 'confidentiality':
                return <Confidentiality />
            default:
                return <div>No settings</div>
        }
    }

    return (
        <div className='settings-content-wrapper'>
            {setSetting()}
        </div>
    );
}

export default SettingsContent;