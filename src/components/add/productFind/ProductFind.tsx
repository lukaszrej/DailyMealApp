import React from 'react';
import useStyles from "./styles";

const ProductFind: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Find product here...
        </div>
    )
};

export default ProductFind;