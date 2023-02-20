import { Routes, Route } from 'react-router-dom'
import Messenger from '../pages/Messenger'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Messenger />} />
        </Routes>
    )
}

export default Router