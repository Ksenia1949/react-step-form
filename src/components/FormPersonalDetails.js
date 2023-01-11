import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'



export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
        
        <React.Fragment>
            <AppBar title="Enter Your Personal Details " />
            <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaulValue={values.firstName}
            />
            <br />
            <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaulValue={values.city}
            />
            <br />
            <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaulValue={values.bio}
            />
            <br />
           <RaisedButton
           label="Continie"
           primary={true}
           style={styles.button}
           onClick={this.continue}
            />
           <RaisedButton
           label="Back"
           primary={false}
           style={styles.button}
           onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails
