import React from 'react';
import {useDispatch} from 'react-redux';
import {COUNTER} from '../../store/counter/Counter.types';

const Increment = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch({type: COUNTER})}>Increment</button>
        </>
    );
};

export default Increment;
