import React from 'react';
import Counter from "../../components/counter/Counter";
import Increment from "../../components/increment/Increment";

const Dashboard: React.FC = () => {
    return (
        <div>
            Dashboard page...
            <Counter/>
            <Increment/>
        </div>
    )
};

export default Dashboard;