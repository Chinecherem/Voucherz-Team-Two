import React from 'react';
import AppHeader from '../components/AppHeader';
import {Header, Form, Icon} from "semantic-ui-react"




const style={
    header: {
          marginLeft: "-20px",
         marginRight: "-15px",
         padding: "20px",
         fontSize: "30px"
    },
    form: {
      marginTop: "30px",
      fontSize: "20px"
    },
    formInput:{
      borderRadius: "20px !important"
    }
}


const Profile = () =>
  <div className='profileContainer'>
    <AppHeader pageTitle='Profile' />
    <div className='mainContainer'>
        <div>
          <Header style={style.header}>
            <Header.Content>My Profile</Header.Content>
            <Icon name="user" />
          </Header>  
        </div>
        <Form style={style.form}>
          <Form.Input fluid label='Name' placeholder='Dabiri Mayowa' readOnly style={style.formInput}/>
          <Form.Input fluid label='Email Address' placeholder='mayowad43@gmail.com' type="email" readOnly />
          <Form.Input fluid label="Account Owner" placeholder="mayowad43@gmail.com"  readOnly/>
      </Form>
    </div>
  </div>;

export default Profile;
