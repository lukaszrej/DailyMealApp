import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import TopBar from "./topBar/TopBar";
import SideBar from "./sideBar/SideBar";

interface Props {
    children: any
    // window?: () => Window;
}

const Nav = ({children}: Props) => {
    // const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const renderNav = () => {
        return (
            <>
                <TopBar handleDrawerToggle={handleDrawerToggle}/>
                <SideBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
            </>
        )
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {renderNav()}

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>
                    {children}
                </Typography>
            </main>
        </div>
    );
}

export default Nav;