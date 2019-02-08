import  React  from "react";
import {Form} from 'semantic-ui-react';


 
class DiscountVoucher extends React.Component{
    
    state ={
        discount:[
            {key: 1, text: "Amount", value: 'amount', name: "amount"},
            {key: 2, text: "Percentage", value: "percent", name: "percent"},
            {key: 3, text: "Unit", value: "unit", name: "unit"}
        ]
    }

handleClick (event, name){
    this.setState({[event.target.name]: event.target.value});
    if(event.target.value === "amount"){
        console.log('amoutn')
    }
}


    render(){
        return(
            <div>
                <Form>
                <Form.Field>
                    <select onClick={(event, name)=>this.handleClick.bind(this, event, name)}>
                    {this.state.discount.map(item =>
                        <option 
                        key={item.id} 
                        value={item.value} 
                        name={item.name}
                       
                        >{item.text}</option>  )}
                    </select>
                </Form.Field>
                       
                        <Form.Group widths="equal">
                        <Form.Input label="Amount" placeholder="Enter Amount" type="text"/>
                        <Form.Input label="Percentage" placeholder="Enter Amount" type="text"/>
                        <Form.Input label="Unit" placeholder="Enter Amount" type="text"/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default DiscountVoucher;