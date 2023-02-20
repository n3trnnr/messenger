import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const AsideSettings = () => {
    return (
        <aside>
            <Header>
                <Link to='/' className='link-back-from-settings'>{'<'}</Link>
            </Header>
        </aside>
    );
}

export default AsideSettings;