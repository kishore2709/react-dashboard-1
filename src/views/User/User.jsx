import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/new_logo.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class User extends React.Component {
  
  state = {
    company:"",
    username:"",
    firstname:"",
    lastname:"",
    city:"",
    country:"",
    email:"",
    postalCode:"",
    about:"",
    value: "right"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("what is happening");
    console.log(this.state.firstname);
  const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} lg={12}>
          <Card>
              <CardHeader>
                <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={avatar} alt="..." />
                    </a>
                </CardAvatar>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                  name="company"
                  value={this.state.company} onChange={this.handleChange}
                    label="company"
                    id="company"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                  name="username"
                  value={this.state.username} onChange={this.handleChange}
                    label="Username"
                    id="username"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  name="email"
                  value={this.state.email} onChange={this.handleChange}
                    label="Email address"
                    id="email-address"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                  name="firstname"
                  value={this.state.firstname} onChange={this.handleChange}
                    label="First Name"
                    id="first-name"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                  name="lastname"
                  value={this.state.lastname} onChange={this.handleChange}
                    label="Last Name"
                    id="last-name"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  name="city"
                  value={this.state.city} onChange={this.handleChange}
                    label="City"
                    id="city"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  name="coutrny"
                  value={this.state.country} onChange={this.handleChange}
                    label="Country"
                    id="country"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  name="postalCode"
                  value={this.state.postalCode} onChange={this.handleChange}
                    label="Postal Code"
                    id="postal-code"
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={7}>
                <TextField
                name="about"
                value={this.state.about} onChange={this.handleChange}
                  id="outlined-multiline-static"
                  label="about yourself"
                  multiline
                  rows="4"
                  style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                />
                </GridItem>

              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info">Update the Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(User);
