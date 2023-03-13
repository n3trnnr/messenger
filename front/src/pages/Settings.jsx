import React from 'react';
import '../style/settings.css'
import AsideSettings from '../components/settings/AsideSettings';
import SettingsContent from '../components/settings/SettingsContent';

const Settings = () => {
    return (
        <>
            <AsideSettings />
            <SettingsContent />
        </>
    );
}

export default Settings;