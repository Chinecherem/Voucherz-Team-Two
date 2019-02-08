import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class FormLoader extends React.Component{
    render(){
        return(
            <Dimmer active>
                 <Loader indeterminate size="big">Loading Voucher</Loader>
          </Dimmer>
        )
    }
    
}

export default FormLoader