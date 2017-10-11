import React, { Component } from "react";
import PropTypes from "prop-types";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Schedule from "material-ui-icons/Schedule";
import Place from "material-ui-icons/Place";

class Hackathon extends Component{
    render() {

        const { image, classes, name, description, timeline, place } = this.props;

        return(
            <Card className={ classes.card } >
                <div className={ classes.imageWrapper } >
                    <CardMedia 
                        className={ classes.cover }
                        image={ image }
                        title={ name }
                    />
                </div>
                <CardContent className={ classes.details } >
                    <Typography type="headline" component="h2">
                        &nbsp;{ name }
                    </Typography>
                    <Typography component="p">
                        <Schedule />
                        &nbsp;{ timeline }
                    </Typography>
                    <Typography component="p">
                        <Place />
                        &nbsp;{ place }
                    </Typography>
                    <Typography component="p">
                        &nbsp;{ description.substring(0, 200) + "..." }
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

Hackathon.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
}

const styles = {
    card: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "15px",
        marginTop: "15px",
    },
    cover: {
        minWidth: "275px",
        minHeight: "165px",
        overflow: "hidden",
        backgroundSize: "contain",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        width: "535px",
        height: "210px",
        paddingRight: "15px",
        paddingLeft: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    imageWrapper: {
        margin: "auto",
    }
}

export default withStyles(styles)(Hackathon);