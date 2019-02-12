import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {withRouter} from 'react-router-dom';
import {FormGroup,  Label, Input} from 'reactstrap';
import Loading from "../../containers/VoucherLoader"

const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]

  const style={
    error:{
      textAlign: "center",
      color: "red"
    }
  }

class SignUpForm extends React.Component {

  state={
  newUser: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobileNo: "",
    role: "",
    confirmPassword: ""
   },
   confirm: false,
   isLoading: false,
   isError : false
  }
  
  changeHandler = (e) =>{
        const value= e.target.value;
        const name= e.target.name;
        this.setState(
          prevState =>({
            newUser:{
              ...prevState.newUser,
              [name]: value
            }
          })
      )
  }
  

  FormHandleSubmit =(e) =>{
    e.preventDefault();
    this.setState({isLoading: true})
    let userData = this.state.newUser
    console.log(userData)
    fetch("http://172.20.20.107:8080/register",{
        method: "POST",
        body: JSON.stringify(userData),
        headers:{
            'Accept':  "application/json",
            'Content-Type': "application/json"
        },
    }).then(response => response.json())
      .then(body =>{
        console.log(body)
        this.setState({isLoading: false})
        if(body.code === "201"){
          this.props.history.push("/confirmationPage")
          this.setState({isLoading : false})
        }else{
        this.setState({isLoading: false, isError: true})
        }
      })
  
  }


  render() {
   
    return (
      <div>
        {this.state.isLoading ? <Loading /> : null}
        {this.state.isError ? <p style={style.error}>Registration failed, Pls checl your fields again</p> : null}
        <Form onSubmit={this.FormHandleSubmit}>    
          <div className='form-group'>
            <Field 
              value={this.state.newUser.firstname}
              onChange={this.changeHandler}
              label='First Name'
              placeholder='John'
              name='firstname'
              type='text'
              component={renderField}
            />
          </div>
         <div className='form-group'>
            <Field
              label='Last Name'
              placeholder='Doe'
              name='lastname'
              value={this.state.newUser.lastname}
              onChange={this.changeHandler}
              type='text'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='john@doe.com'
              name='email'
              value={this.state.newUser.email}
              onChange={this.changeHandler}
              type='email'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <FormGroup>
              <Label size="lg">Role</Label>
             <Input 
                type="select"
                name="role"
                value={this.state.newUser.role}
                onChange={this.changeHandler}>
                <option value="">Choose...</option>
                <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                <option value="ROLE_USER"> ROLE_USER</option>
              </Input>
            </FormGroup>
          </div>
          <div className='form-group'>
            <Field
              label='Phone Number'
              name='mobileNo'
              value={this.state.newUser.mobileNo}
              onChange={this.changeHandler}
              type='text'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Password'
              placeholder='*********'
              name='password'
              type='password'
              value={this.state.newUser.password}
              onChange={ this.changeHandler}
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Confirm Password'
              placeholder='*********'
              name='confirmPassword'
              type='password'
              value={this.state.newUser.confirmPassword}
              onChange={ this.changeHandler}
              component={renderField}
            />
          </div>

          <Button
            className='btnCommon btnPrimary'
            type='submit'
            >Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {

  const errors = {};

  if (!values.firstname || !values.lastname) {
    errors.name = 'Required';
  } else if ((values.firstname.length < 2) ||(values.lastname.length < 2)) {
    errors.name = 'Minimum 2 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if(!values.mobileNo){
    errors.mobileNo = 'Required';
  } else if(!/^[0]\d{10}$/.test(values.mobileNo)){
    errors.mobileNo = "Invalid Mobile Number"
  }

  if (!values.password && !values.confirmPassword) {
    errors.password = 'Required';
    errors.confirmPassword = 'Required'
  } else if (values.password.length > 8) {
    errors.password = 'Maximum 8 characters';
  } else if (values.password !== values.confirmPassword){
    errors.confirmPassword = "Password must be equal"
  } else if(!/^[a-zA-Z0-9]+$/.test(values.password)){
    errors.password = "Password must contain both letters and numbers"
  }

  return errors;
}

const renderField  = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} placeholder={placeholder}/>
    {touched && (error && <p className='error'>{error}</p>)}
  </div>
)

// const dropdownrole  = ({ input,  label, type, placeholder, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <select {...input}   type={type} placeholder={placeholder} data={colors}>
//     </select>
//     {touched && (error && <p className='error'>{error}</p>)}
//   </div>
// )


SignUpForm = reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm);

export default withRouter(SignUpForm)