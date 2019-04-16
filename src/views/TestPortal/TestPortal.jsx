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
    question:"Whatever is the question, state here.",
    options: "",
    optionA: "option A",
    optionB: "option B",
    optionC: "option C",
    optionD: "option D"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
        <div>
      <Card>
          <CardBody className={classes.questionarea} name="question">
            {this.state.question}
          </CardBody>
        </Card>
        <Card>
        <GridContainer>
        <GridItem lg={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          
          <RadioGroup
            aria-label="options"
            name="options"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: "97%", marginLeft: "1rem"  }}

          >
            <FormControlLabel value="option A" control={<Radio color="secondary" />} label={this.state.optionA}/>
            <FormControlLabel value="option B" control={<Radio color="secondary" />} label={this.state.optionB} />
            <FormControlLabel value="option C" control={<Radio color="secondary" />} label={this.state.optionC}/>
            <FormControlLabel value="option D" control={<Radio color="secondary" />} label={this.state.optionD} />
          />
          </RadioGroup>
        </FormControl>
        </GridItem>
        <div>
            <Button color="info" style={{  marginLeft: "2rem", marginBottom: "1rem", float: "left"  }}>
                Previous
            </Button>
            <Button color="info" style={{  marginLeft: "2rem", marginBottom: "1rem", float: "left"  }}>
                next
            </Button>      
        </div>
      </GridContainer>
      </Card>
      </div>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
