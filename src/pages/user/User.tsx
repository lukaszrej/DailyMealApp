import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from '../../store';
import EditModal from "./edit/EditModal";

const User: React.FC = () => {
    const name = useSelector((state: AppState) => state.user.name);
    const height = useSelector((state: AppState) => state.user.height);
    const weight = useSelector((state: AppState) => state.user.weight);
    const age = useSelector((state: AppState) => state.user.age);
    const gender = useSelector((state: AppState) => state.user.gender);

    return (
        <>
            <p>Your name: {name}</p>
            <p>Your height {height} cm</p>
            <p>Your current weight: {weight} kg</p>
            <p>Your age: {age}</p>
            <p>Your gender: {gender}</p>
            <EditModal/>
        </>
    )
};

export default User;