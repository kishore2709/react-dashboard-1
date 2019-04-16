import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    jobtype: "Job Description",
    addeddate: "02/01/2019",
    deadlinedate: "06/10/2019",
    applicants: 120
  };

  render() {
    console.log(this.props.location.pathname);
    const { classes, routes } = this.props;
    console.log(routes);
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={7}>
            <Card>
             <Link to="jobs">
              <CardBody>
                <div className={classes.cardCategory}>{this.state.jobtype}</div>
                <GridContainer>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Added on: <br /> {this.state.addeddate} </div>
                </GridItem>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Deadline: <br /> {this.state.deadlinedate} </div>
                </GridItem>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Applicants: <br /> {this.state.applicants} </div>
                </GridItem>
                </GridContainer>
              </CardBody>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3} lg={7}>
         <Card>
              <CardBody>
                  <div className={classes.cardCategory}>{this.state.jobtype}</div>
                  <GridContainer>
                  <GridItem lg={4}>
                    <div className={classes.cardTitle}> Added on: <br /> {this.state.addeddate} </div>
                  </GridItem>
                  <GridItem lg={4}>
                    <div className={classes.cardTitle}> Deadline: <br /> {this.state.deadlinedate} </div>
                  </GridItem>
                  <GridItem lg={4}>
                    <div className={classes.cardTitle}> Applicants: <br /> {this.state.applicants} </div>
                  </GridItem>
                  </GridContainer>
                </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3} lg={7}>
            <Card>
              <CardBody>
                <div className={classes.cardCategory}>{this.state.jobtype}</div>
                <GridContainer>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Added on: <br /> {this.state.addeddate} </div>
                </GridItem>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Deadline: <br /> {this.state.deadlinedate} </div>
                </GridItem>
                <GridItem lg={4}>
                  <div className={classes.cardTitle}> Applicants: <br /> {this.state.applicants} </div>
                </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
