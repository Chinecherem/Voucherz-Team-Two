import React from 'react';
import AppHeader from '../../components/Header';
import {Segment} from 'semantic-ui-react';



class TokenMgt extends React.Component{

    render(){
        return(
            <div className='settingsContainer'>
              <AppHeader pageTitle='Token Management' />
              <div className='mainContainer'>
                  <Segment>
         
                  </Segment>
             </div>
            </div>
        )
    }
}
  

export default TokenMgt;