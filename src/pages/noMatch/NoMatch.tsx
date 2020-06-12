import React from 'react';
import {Link} from "react-router-dom";

const NoMatch: React.FC = () => {
    return (
        <>
            The page does not exist. <Link to="/start">Go back to the home page</Link>
        </>
    )
};

export default NoMatch;