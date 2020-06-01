import React from 'react';
import {Link} from "react-router-dom";

const NoMatch: React.FC = () => {
    return (
        <div>
            The page does not exist. <Link to="/dashboard">Go back to the dashboard.</Link>
        </div>
    )
};

export default NoMatch;