import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Hidden from "@material-ui/core/Hidden";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Check from "@material-ui/icons/Check";
import {primaryColor} from "assets/jss/material-dashboard-react.jsx"; 
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

class Icons extends React.Component {

  state = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    marks: "",
    radio: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.optionA);
    return (
      <Card>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
        <TextField
          name="question"
          value={this.state.question} onChange={this.handleChange}
          id="outlined-multiline-static"
          label="Question"
          multiline
          rows="4"
          style={{ width: "97%", marginLeft: "1rem"  }}
          className={classes.field}
          margin="normal"
          variant="outlined"
        />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={12}>
        <TextField
        name="optionA"
        value={this.state.optionA} onChange={this.handleChange}
          id="outlined-multiline-static"
          label="Option 1"
          multiline
          style={{ width: "97%", marginLeft: "1rem"  }}
          className={classes.field}
          margin="normal"
          variant="outlined"
        />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={12} lg={12}>
        <TextField
        name="optionB"
        value={this.state.optionB} onChange={this.handleChange}
          id="outlined-multiline-static"
          label="Option 2"
          multiline
          style={{ width: "97%", marginLeft: "1rem"  }}
          className={classes.field}
          margin="normal"
          variant="outlined"
        />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={12}>
        <TextField
        name="optionC"
        value={this.state.optionC} onChage={this.handleChange}
          id="outlined-multiline-static"
          label="Option 3"
          multiline
          style={{ width: "97%", marginLeft: "1rem"  }}
          className={classes.field}
          margin="normal"
          variant="outlined"
        />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={12}>
        <TextField
        name="optionD"
        value={this.state.optionD} onChange={this.handleChage}
          id="outlined-multiline-static"
          label="Option 4"
          multiline
          style={{ width: "97%", marginLeft: "1rem"  }}
          className={classes.field}
          margin="normal"
          variant="outlined"
        />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={1}>
        <TextField
        name="marks"
        value={this.state.marks} onChange={this.handleChange}
          className={classes.field}
          label="marks"
          multiline
          style={{ width: "97%", marginLeft: "1rem", borderColor: "primary !important"  }}
          margin="normal"
          variant="outlined"
        />
        </GridItem> 

        <GridItem lg={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          
          <RadioGroup
            aria-label="Answer"
            name="radio"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: "97%", marginLeft: "1rem"  }}

          >
            <FormControlLabel value="right" control={<Radio color="secondary" />} label="Right answer"/>
            <FormControlLabel value="wrong" control={<Radio color="secondary" />} label="Wrong answer" />
          />
          </RadioGroup>
        </FormControl>
        </GridItem>
        <div>
        <Button color="info" style={{ width: "100%", marginLeft: "2rem", marginBottom: "1rem", float: "left"  }}>
                Add Question
              </Button>
        </div>
      </GridContainer>
      </Card>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
