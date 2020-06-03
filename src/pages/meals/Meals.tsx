import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from "../../store";

const UserMeals: React.FC = () => {
    const counter = useSelector((state: AppState) => state.counter.mealCounter)

    return (
        <>
            Added meals goes here...{counter}
        </>
    )
};

export default UserMeals;