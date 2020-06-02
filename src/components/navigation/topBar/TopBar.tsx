import React from "react";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

interface Props {
    handleDrawerToggle: () => void;
}

const TopBar = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    DailyMealApp
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default TopBar;