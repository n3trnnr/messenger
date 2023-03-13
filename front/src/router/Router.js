import { Routes, Route } from 'react-router-dom'
import Settings from '../pages/Settings'
import Messenger from '../pages/Messenger'

const Router = () => {
    return (
        <Routes>
            <Route path='/messenger' element={<Messenger />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    )
}

export default Router