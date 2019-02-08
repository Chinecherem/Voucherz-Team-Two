import React from 'react';
import Header from '../components/AppHeader';
import {Segment} from 'semantic-ui-react';



const Settings = () =>{
  return(
<div className='settingsContainer'>
    <Header pageTitle='Settings' />
    <div className='mainContainer'>
    <Segment>
      <h2>Tings</h2>
      </Segment>
  </div>
  </div>
  )
}
  

export default Settings;