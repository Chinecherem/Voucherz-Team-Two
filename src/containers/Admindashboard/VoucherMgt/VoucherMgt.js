import React from 'react';
import AppHeader from '../../../components/AppHeader';
import { Table, Header} from 'semantic-ui-react';
import axios from "axios";
import {FormGroup, Label, Input, Form} from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Loading from "../../VoucherLoader";



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
      isLoading: false,
      search: "",
      isError: false,
      count: 2
    }
    this.email = localStorage.getItem("email")
  }
  
    changeHandler = (e)=>{
      e.preventDefault()
      this.setState({search: e.target.value})
    }

    updateHandler = () =>{
        this.setState({count : this.state.count + 1})
        
    }
    componentDidUpdate = () => {
        axios.get(`http://172.20.20.107:8082/vouchers/${this.state.count}/2`)
    }



  componentDidMount() {
    this.setState({isLoading: true})
    axios.get(`http://172.20.20.107:8082/vouchers/1/20`)
      .then(res => {
        console.log(res.data.count)
        if(res.data.content === ""){
          this.setState({isError: true})
        }
        else{
          const voucher = res.data.content;
          this.setState({ voucher: voucher, isLoading: false});
         
        }
        // console.log(this.state.count)
        // console.log(res)
        
      })
    //   .then(body =>  console.log(body)) 
    //   .catch(error =>{
    //     if(this.state.voucher === null){
          
    //     }
    //   })
      
    }

  render(){
      let voucher = this.state.voucher.filter((v) =>{
        return v.code.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1  ||
               v.voucherType.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
      return(
        <div className='productsContainer'>
        <AppHeader pageTitle='Voucher' />
        <div className='mainContainer' >
        {this.state.isLoading ? <Loading /> : null}
          <Header as="h1" style={style.Header}>List of Vouchers </Header>
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
              {this.state.isError ? <h1 style={style.Error}>No Voucher Created</h1>: <Table striped>
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
              }
          <Pagination size="lg" aria-label="Page navigation example">
             <PaginationItem>
              <PaginationLink onClick={this.updateHandler}>
                 Next Page
             </PaginationLink>
            </PaginationItem>
     </Pagination>
 
        </div>
      </div>
      )
  }
}

export default Voucher;