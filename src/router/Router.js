import { Routes, Route } from 'react-router-dom'
import Messanger from '../pages/Messanger'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Messanger />} />
        </Routes>
    )
}

export default Router