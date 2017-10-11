import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Footer extends Component{
    render() {

        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.header}>
                    <Toolbar className={classes.bar}>
                        <Typography
                        className={ classes.title }
                            type="caption"
                            gutterBottom
                            align="center"
                        >
                            &nbsp;Want to add your own hackathon to this list ? 
                            <a href="http://hacksociety.tech/partner/join-as-event.html" className={ classes.link } > Find out how.</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styles = {
    root: {
        height: 60,
        width: "100%",
    },
    bar: {
        height: 55,
        paddingLeft: 0,
        paddingRight: 0
    },
    header: {
        backgroundColor: "#FAFAFA"
    },
    title: {
        flex: 1,
        paddingTop: 8,
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 1.4,
        color: "#212121"
    },
    link: {
        textDecoration: "none",
    },
} 

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);