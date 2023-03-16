import { Routes, Route } from 'react-router-dom'
import Settings from '../pages/Settings'
import Messenger from '../pages/Messenger'
import Main from '../pages/Main'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/messenger' element={<Messenger />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    )
}

export default Router