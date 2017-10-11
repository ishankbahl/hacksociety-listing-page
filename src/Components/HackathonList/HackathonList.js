import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import moment from "moment";

import { fetchData } from "../../util";
import { Hackathon } from "../../Components";

class HackathonList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            hackathonList: [],
        }

        this.handleData = this.handleData.bind(this);
        this.checkHackathon = this.checkHackathon.bind(this);

    }

    componentDidMount() {
        fetchData(this.handleData);
    }

    handleData(data) {
        const data1 = [];
        data.map((hackathon) => data1.push({
            status: hackathon.status,
            key: hackathon.id,
            name: hackathon.name,
            image: hackathon.image,
            description: hackathon.description,
            place: hackathon.venue,
            timeline: moment(hackathon.Starting_Date).format("MMMM Do YYYY") + " - " + moment(hackathon.Ending_date).format("MMMM Do YYYY"),
        }));
        this.setState({ hackathonList: data1 });  
    }

    checkHackathon() {

        const filteredArr = this.state.hackathonList.filter((hackathon) => {return hackathon.status === "Active"});
        const { classes } = this.props;
        
        if (filteredArr.length)
            return (
                <div>
                    <Typography type="headline" className={ classes.title } >
                        &nbsp;Upcoming Hackathons
                    </Typography>
                    <Divider />
                    { filteredArr.map((hackathon) => <Hackathon key={ hackathon.id } {...hackathon} />) }
                </div>
            );
    }

    render() {

        const { classes } = this.props;

        return(
            <div className={ classes.list } >
                {
                    this.checkHackathon()
                }
                <Typography type="headline" className={ classes.title } >
                    &nbsp;Hall Of Fame
                </Typography>
                <Divider />
                { this.state.hackathonList.filter((hackathon) => hackathon.status === "Inactive" ? true : false)
                    .map((hackathon) => <Hackathon key={ hackathon.id } {...hackathon} />) }
            </div>
        );
    }
}

const styles = {
    list: {
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#EEEEEE",
        paddingRight: "215px",
        paddingLeft: "215px",
    },
    title: {
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 19,
        fontWeight: 400,
        letterSpacing: 1.4,
        color: "#212121"
    }
}

HackathonList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HackathonList);