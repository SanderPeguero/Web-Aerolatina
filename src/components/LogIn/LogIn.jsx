import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isFromValid, isValueValid } from '../../form/formFramework'
import { auth } from '../../Store/actions/authActions'
import { Box, Container, Grid, Input, TextField } from '@mui/material';
import { Component } from "react"
import { connect } from 'react-redux';

const theme = createTheme();

class LogIn extends Component {

    state = {
      isFormValid: false,
        formControls: {

            email:{
                value: "",
                type: "email",
                label: "Email",
                errorMessage: "Invalid Email",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },

            password:{
                value: "",
                type: "password",
                label: "Password",
                errorMessage: "Wrong Password",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    
    loginHandler = () => {
      this.props.auth(
          this.state.formControls.email.value,
          this.state.formControls.password.value,
          true
      )
  }

  signUpHandler = () => {
      this.props.auth(
          this.state.formControls.email.value,
          this.state.formControls.password.value,
          false

          
      )
      
  }


  submitHandler = event => {
      event.preventDefault()
  }

  onChangeHandler = ( event, controlName ) => {
      const formControls = {...this.state.formControls}
      const formControl = {...formControls[controlName]}

      formControl.value = event.target.value;
      formControl.touched = true
      formControl.valid = isValueValid(formControl.value, formControl.validation)

      formControls[controlName] = formControl
      this.setState({
          formControls: formControls,
          isFormValid: isFromValid(formControls)
      })
  }

  renderInputs(){
    return Object.keys(this.state.formControls).map((formControlName, index) => {
      const formControl = this.state.formControls[formControlName]
      return (
       <ThemeProvider theme={theme} key={formControlName + index}>
        <Container component="main" maxWidth="xs">
          <Box
             sx={{
                  marginTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#e1f5fe'
            
                 }}>
            <Box  sx={{ mt: 0 }}>
             <Grid container >
              <Grid item xs={0} sm={0}>
                <TextField
                type={formControl.type}
                value={formControl.value.toString()}
                label={formControl.label}
                errormessage={formControl.errorMessage}
                valid={formControl.valid.toString()}
                touched={formControl.touched.toString()}
                shouldvalidate={Boolean(formControl.validation).toString()}
                onChange={event => this.onChangeHandler(event, formControlName)}
                />
              </Grid>
             </Grid>
             
            </Box>
          </Box>
        </Container>
       </ThemeProvider>
    )
    })
  }

  render(){
    return(
        <div >
          <div>
            <h1>Log In</h1>
              <form action="" onSubmit={this.submitHandler} >
                    
                {this.renderInputs()}

                  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={this.loginHandler}
                  disabled={!this.state.isFormValid}
             >
              Log In
             </Button>
                </form>
            </div>
        </div>
    )
}

}

function mapDispatchToProps(dispatch){
  return{
    auth: (email, password, isLogIn) => dispatch(auth(email,password,isLogIn))
  }
}
export default connect(null, mapDispatchToProps)(LogIn)