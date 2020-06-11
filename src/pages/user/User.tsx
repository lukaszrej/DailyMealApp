import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from '../../store';

const User: React.FC = () => {
    const name = useSelector((state: AppState) => state.user.name);
    const height = useSelector((state: AppState) => state.user.height);
    const weight = useSelector((state: AppState) => state.user.weight);
    const age = useSelector((state: AppState) => state.user.age);
    const gender = useSelector((state: AppState) => state.user.gender);

    return (
        <>
            <p>{name}</p>
            <p>{height}</p>
            <p>{weight}</p>
            <p>{age}</p>
            <p>{gender}</p>
        </>
    )
};

export default User;