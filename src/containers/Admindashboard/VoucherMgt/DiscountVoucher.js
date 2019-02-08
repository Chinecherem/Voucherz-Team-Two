import React from 'react';
import AppHeader from '../components/AppHeader';
import CreateIcon from ".././components/CreateIcon";
import { Table, Header} from 'semantic-ui-react';
import axios from "axios";
import {FormGroup, Label, Input, Form} from 'reactstrap';


const style={
  padding:"20px"
}

class  Voucher  extends React.Component{

  constructor(props){
    super(props)
    

    this.state ={
      discount: [],
      search: ""
    }
  }
  
    changeHandler = (e)=>{
      e.preventDefault()
      this.setState({search: e.target.value})
    }

  componentDidMount() {
    axios.get(`http://172.20.20.107:8082/api/voucher/vouchers`)
      .then(res => {
        const voucher = res.data;
        this.setState({ voucher: voucher});
        // console.log(this.state.voucher)
      })
  }


    switchedHandler = (e) =>{
      e.preventDefault()
      this.setState({
          switched: false
      })
    }

  render(){
      let voucher = this.state.voucher.filter((v) =>{
        return v.code.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
    return(
      <div className='productsContainer'>
      <AppHeader pageTitle='Voucher' />
      <div className='mainContainer' >
        <CreateIcon />
        <Form onSubmit = { (e) => e.preventDefault()}>
           <FormGroup>
              <Label size="lg" hidden>Enter seach input</Label>
                 <Input type="text" 
                 placeholder="Search by Code" 
                 bsSize="lg" 
                  name="search"
                 value={this.state.search} 
                 onChange={this.changeHandler}
                 />
              </FormGroup>
            </Form>
        <Table compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>Voucher Type</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Start Date </Table.HeaderCell>
              <Table.HeaderCell>Expiry Date </Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Additional Info</Table.HeaderCell>
             <Table.HeaderCell>Voucher Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {voucher.map(item=> (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell >{item.code}</Table.Cell>
                    <Table.Cell>{item.voucherType}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell>{item.startDate}</Table.Cell>
                    <Table.Cell>{item.expiryDate}</Table.Cell>
                    <Table.Cell>{item.codeValue}</Table.Cell>
                    <Table.Cell>{item.additionalInfo}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
    )
      
  }
}

export default Voucher;