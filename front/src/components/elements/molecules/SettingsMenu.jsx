import React from 'react';
import MenuItem from '../atoms/MenuItem';

const SettingsMenu = () => {

    const settingsRouter = [
        { path: 'useraccount', name: 'user account' },
        { path: 'confidentiality', name: 'confidentiality' }
    ]

    return (
        <section>
            {settingsRouter.map((setting, id) =>
                <MenuItem
                    key={`setting_${id}`}
                    path={setting.path}
                    name={setting.name} />
            )}
        </section>
    );
}

export default SettingsMenu;