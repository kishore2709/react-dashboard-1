import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
//core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import avatar from "assets/img/faces/new_logo.png";

import jobsStyles from "assets/jss/material-dashboard-react/views/jobsStyle.jsx";

class Jobs extends React.Component {
    state = {
        AddedDate:"",
        DeadLine:"",
        applicants:""

    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                <GridContainer>
                    <GridItem xs={4} sm={4} md={4} lg={3}>
                    <CardAvatar profile style={{marginTop:"3rem"}}>
                    <a href="/admin/post-the-job">
                        <img src={avatar} alt="..." />
                    </a>
                    </CardAvatar>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4} lg={3}>
                    <CardAvatar profile style={{marginTop:"3rem"}}>
                    <a href="/admin/your-profile">
                        <img src={avatar} alt="..." />
                    </a>
                    </CardAvatar>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4} lg={3}>
                    <CardAvatar profile style={{marginTop:"3rem"}}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={avatar} alt="..." />
                    </a>
                    </CardAvatar>
                    </GridItem>
                    </GridContainer>
                    </div>
                <GridItem lg={10}>
                <Card stlye={{marginTop:"2rem"}}>
                
                    <CardBody>
                        <div style={{fontSize:"2rem", marginBottom:"1.5rem"}}>Details:<br /></div>
                        <div style={{fontSize:"1rem"}}><b>Added On:</b>   {this.state.addedDate}<br /></div>
                        <div style={{fontSize:"1rem"}}><b>Deadline:</b>   {this.state.DeadLine}<br /></div>
                        <div style={{fontSize:"1rem"}}><b>Applicants:</b> {this.state.applicants}</div>
                    </CardBody>
                </Card>
                </GridItem>
            </div>
        );
    }
}

export default withStyles(jobsStyles)(Jobs);