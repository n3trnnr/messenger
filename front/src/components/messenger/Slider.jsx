import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUserId } from '../../store/messenger';
import '../../style/slider.css'

const Slider = ({ isHidden, setHidden, children }) => {

    const dispatch = useDispatch()

    const [translate, setTranslate] = useState(101)
    // console.log('translate: ', translate,);

    useEffect(() => {
        if (!isHidden && translate > 0) {
            setTimeout(() => {
                setTranslate(translate - 1)
            }, 1)
        }
        else if (isHidden && translate < 101) {
            setTimeout(() => {
                setTranslate(translate + 1)
            }, 1)
        }

        if (isHidden && translate === 101) {
            dispatch(setSelectedUserId(null))
        }

    }, [translate, isHidden])

    return (
        <>
            <aside className='slider-wrapper' style={{ 'transform': `translateX(${translate}%)` }}>
                {children}
            </aside>
            {!isHidden && <div className='overflow' onClick={() => setHidden(true)}></div>}
        </>
    );
}

export default Slider;