import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';
import NavBar from '../NavBar';
// import { passwordChange } from '../../actions';
import { connect } from 'react-redux';


class PasswordChangeForm extends React.Component { 

    state ={
      email: "",
        newUser:{
            password: "",
            confirmPassword: ""
        }
       
    }
    
    
  handleSubmit = (e) => {
      let userData = this.state.newUser
    fetch(`http://172.20.20.107:8080/user/password/reset/${this.state.email}`,{
        method: "PUT",
        body: JSON.stringify(userData),
        headers:{
            'Accept':  "application/json",
            'Content-Type': "application/json"
        },
    }).then(res =>{ 
        res.json()
    }).then(response => console.log(response))
      .catch(error =>console.log(error))
   }

   mailHandler = (e) =>{
     this.setState({email: e.target.value})
   }

   changeHandler = (e) =>{
      const name= e.target.name;
     const  value = e.target.value;
       this.setState(
           prevState =>({
               newUser:{
                   ...prevState.newUser,
                   [name]: value
               }
           })
       )
   }


  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }


  render() {
 
    return (
        <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Change Your Password</h1>
              <Divider />
              {this.renderError()}
              <Form onSubmit={this.handleSubmit}>  
              <div className='form-group'>
                    <Field
                      label='Email'
                      name='emai;'
                       type='email'
                       value={this.state.newUser.email}
                       component={renderField}
                       onChange={this.mailHandler}
                      />
                </div>  
                <div className='form-group'>
                    <Field
                      label='New Password'
                      name='password'
                       type='password'
                       value={this.state.newUser.password}
                       onChange={this.changeHandler}
                       component={renderField}
                      />
                </div>
                <div className='form-group'>
                  <Field
                    label='Confirm Password'
                   value={this.state.newUser.confirmPassword}
                     name='confirmPassword'
                     type='password'
                     onChange={this.changeHandler}
                     component={renderField}
                   />
               </div>
             <Button
                className='btnCommon btnPrimary'
                type='submit'>Submit</Button>
             </Form>
            </Card>
          </div>
        </div>     
      </div>
        
    );
  }
}




const validate = values => {

    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address';
    }
    if (!values.password && !values.confirmPassword) {
      errors.password = 'Required';
      errors.confirmPassword = 'Required'
    } else if (values.password.length > 8) {
      errors.password = 'Maximum 8 characters';
    } else if (values.password !== values.confirmPassword){
      errors.confirmPassword = "Password must be equal"
    }
  
    return errors;
  }
  
  const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} value={value}/>
      {touched && (error && <p className='error'>{error}</p>)}
    </div>
  )

  PasswordChangeForm = reduxForm({
    form: 'PasswordChangeForm',
    validate
  })(PasswordChangeForm);

  const mapStateToProps = state => ({
    form: state.form,
    auth: state.auth
  })

export default connect(mapStateToProps )(PasswordChangeForm);