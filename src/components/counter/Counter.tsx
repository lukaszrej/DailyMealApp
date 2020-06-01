import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from '../../store';

const Counter = () => {
    const counter = useSelector((state: AppState) => state.counter.mealCounter);

    return (
        <div>
            Current counter: {counter}
        </div>
    );
};

export default Counter;
