import React from 'react';
import AppHeader from '../components/AppHeader';
import { Table, Header} from 'semantic-ui-react';
import axios from "axios";
// import Update from './Update';
import {FormGroup, Label, Input, Form} from 'reactstrap';
// import Loader from "./VoucherLoader"


const style={
  Header: {
    padding:"20px"
  },
  Error: {
    width: "50%",
    margin: "100px auto",
    fontSize: "40px",
    textAlign:"center",
    textTransform: "uppercase",
    color: "red"
  }

}

class  Voucher  extends React.Component{

  constructor(props, user){
    super(props)
    this.state ={
      voucher : [],
      isLoading: true,
      search: "",
      isError: false
    }
    this.email = localStorage.getItem("email")
  }
  
    changeHandler = (e)=>{
      e.preventDefault()
      this.setState({search: e.target.value})
    }

  componentDidMount() {
    axios.get(`http://172.20.20.107:8083/api/voucher-management-service/voucher/merchant/${this.email}`)
      .then(res => {
        if(res.data === ""){
          this.setState({isError: true, isLoading: false})
        }
        else{
          const voucher = res.data;
          console.log(res)
          this.setState({ voucher: voucher, isLoading: false});
        }
      }).then(body =>  console.log(body)) 
      // .catch(error =>{
      //   if(this.state.voucher === null){
          
      //   }
      // })
  }


  render(){
      let voucher = this.state.voucher.filter((v) =>{
        return v.code.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
              //  v.voucherType.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
      return(
        <div className='productsContainer'>
        <AppHeader pageTitle='Voucher' />
        <div className='mainContainer' >
          <Header as="h1" style={style.Header}>List of Vouchers </Header>
          {this.state.isLoading === true ? <Loader /> : null}
          <Form onSubmit = { (e) => e.preventDefault()}>
             <FormGroup>
                <Label size="lg" hidden>Enter seach input</Label>
                   <Input type="text" 
                   placeholder="Search by Code or Voucher Type" 
                   bsSize="lg" 
                    name="search"
                   value={this.state.search} 
                   onChange={this.changeHandler}
                   />
                </FormGroup>
              </Form>
              {this.state.isError ? <h1 style={style.Error}>Error Loading Vouchers, Pls try again Later</h1>: <Table striped>
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
                      <Table.Cell><Update 
                       code={item.code}
                       voucherType={item.voucherType}
                       category={item.category}
                       startDate={item.startDate}
                       expiryDate={item.expiryDate}
                      prefix={item.prefix}
                      suffix={item.suffix}
                       length={item.length}
                       charSet={item.charSet}
                       additionalInfo={item.additionalInfo}
                       codeValue={item.codeValue}
                       numOfCode={item.numOfCode}
                       id={item.id}
                       onHide={this.switchedHandler} 
                       /></Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          
            
          </Table>
              }
        </div>
      </div>
      )
  }
}

export default Voucher;