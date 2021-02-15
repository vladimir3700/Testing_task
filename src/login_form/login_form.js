//import React from 'react';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Component} from 'react';
import { FormErrors } from './FormErrors';
import store from 'store';

import "./login_form.css";

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      error: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
     

  }

  //onSubmit(e) {
    //e.preventDefault();

    //const { email, password } = this.state;
    //const { history } = this.props;
    //this.setState({ error: false });

    //if (!(email === 'george@gmail.com' && password === 'foreman')) {
      //return this.setState({ error: true });
    //}
    //store.set('loggedIn', true);
    //history.push('/home');

    //console.log("you're logged in. yay!");
    //store.set('loggedIn', true);
  //}



  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is not corrected';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
 
<Form className = "Form" onSubmit={this.onSubmit}>

        <h2>Login</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
    <Form.Group controlId="formBasicEmail" className = {`form-group ${this.errorClass(this.state.formErrors.email)}`}>
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="For example: email@gmail.com" name = "email"
           value={this.state.email}
           onChange={this.handleUserInput}
           />
           <Form.Text className="text-muted">
           We'll never share your email with anyone else.
           </Form.Text>
    </Form.Group>

   
    <Form.Group controlId="formBasicPassword" className = {`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Minimum 6 symbols" name="password"
           value={this.state.password}
           onChange={this.handleUserInput}
          />
          </Form.Group>
         <Button variant="primary" type="submit">
          Log in
        </Button>
    </Form>
 )
}
}

export default Login;
