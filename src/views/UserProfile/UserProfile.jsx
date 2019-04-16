import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

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

class UserProfile extends React.Component {

    state = {
      job:"",
      hires:"",
      CPI:"",
      salary:"",
      experience:"",
      work:"",
      benefits:"",
      test:"",
      skills:"",
      Test:""
    
  }
  

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.company);
  const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} lg={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5} lg={12}>
                <TextField
                  id="company"
                  label="company"
                  name="company"
                  value={this.state.company} onChange={this.handleChange}
                  rows="4"
                  style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={3} lg={12}>
                  <TextField
                    label="How many hires?"
                    id="how"
                    name="hires"
                    value={this.state.hires} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={12}>
                  <TextField
                    label="what is the minimum CPI candidate must have?"
                    id="CPI"
                    name="CPI"
                    value={this.state.CPI} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={5}>
                  <TextField
                    label="What is the salary for the job?"
                    id="salary"
                    name="salary"
                    value={this.state.salary} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  /> per annum
                </GridItem>
                
              </GridContainer>
              <GridContainer>
                
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  id="experience"
                  label="describe the experience candidates should have"
                  multiline
                  name="experience"
                  value={this.state.experience} onChange={this.handleChange}
                  rows="4"
                  style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  id="work"
                  label="describe the work the candidate is supposed to perform"
                  multiline
                  name="work"
                  value={this.state.work} onChange={this.handleChange}
                  rows="4"
                  style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  id="benefits"
                  label="Benefits"
                  name="benefits"
                  value={this.state.benefits} onChange={this.handleChange}
                  multiline
                  rows="4"
                  style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                />
                </GridItem>

                <GridItem lg={12}>
                  <FormControl component="fieldset" className={classes.formControl}>
                  <GridItem lg={12}>
                  <h3>Select the Test</h3>
                    <RadioGroup
                      name="test"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                    
                      <FormControlLabel value="right" control={<Radio />} label="Right"/>  
                      <FormControlLabel value="wrong1" control={<Radio />} label="Wrong" />
                      <FormControlLabel value="wrong2" control={<Radio />} label="Wrong" />
                      <FormControlLabel value="wrong3" control={<Radio />} label="Wrong" />
                      <FormControlLabel value="wrong4" control={<Radio />} label="Wrong" />
                      <FormControlLabel value="wrong5" control={<Radio />} label="Wrong" />
                    
                  
                    </RadioGroup>
                    </GridItem>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <h3>Weightage</h3>
              <GridItem xs={12} sm={12} md={4} lg={12}>
                  <TextField
                    label="Skills"
                    id="skills"
                    name="skills"
                    value={this.state.skills} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={12}>
                  <TextField
                    label="CPI"
                    id="CPI"
                    value={this.state.CPI} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={12}>
                  <TextField
                    label="Test"
                    id="Test"
                    name="Test"
                    value={this.state.Test} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={12}>
                  <TextField
                    label="experience"
                    id="experience"
                    value={this.state.experience} onChange={this.handleChange}
                    style={{ width: "100%"  }}
                  className={classes.field}
                  margin="normal"
                  variant="standard"
                  />
                </GridItem>

            </CardBody>
            <CardFooter>
              <Button color="info">Post the Job</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(UserProfile);
