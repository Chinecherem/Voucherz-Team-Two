import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FormLoader from '../Loading'
import { Segment } from 'semantic-ui-react';
import {withRouter} from "react-router-dom"
// import {token} from "../../../components/AccessToken"


const style={
    form:{
        marginLeft: "70px",
        marginRight: "70px"
    },
    button:{
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
        marginLeft: "500px"
    },
    input: {
        
    },
    options:{
    },
    formText:{
        fontSize: "16px"
    }
   
}

class DiscountVoucher extends React.Component{

    constructor(props){
        super(props)

        this.state={
            newUser:{
                voucherType: "Discount",
                category: '',
                startDate: '',
                expiryDate: "",
                charSet: "",
                length: "",
                prefix: "",
                suffix: "",
                numOfCode: '',
                discountType:"",
                amount:"",
                percentage: "",
                unit: "",
                additionalInfo: "",
                codeValue: ""
            },
            isLoading: true,
            isError: false,
            token: localStorage.getItem("token")
        }
    }



    numberChangehandler = (e) => {
        const value= e.target.value;
        const name= e.target.name;
        const reg =  /^[1-9]\d*$/g
        if( value === "" || reg.test(e.target.value)){
            this.setState(
                prevState =>({
                    newUser: {
                        ...prevState.newUser,
                        [name]: value
                    }
                })
            )
           
        }else{
            e.preventDefault()
        }

    }

   prefixSuffixHandler = (e) =>{
    const value= e.target.value;
    const name= e.target.name;
       const regex = /^[a-z]+$/i;
       if((regex.test(value) || value === "")  && value.length  <= 3){
           this.setState(
                prevState =>({
                    newUser: {
                        ...prevState.newUser,
                        [name]: value
                    }
                })
            )
        //    
       }else {
            e.preventDefault()
       }
   }

   percentageHandler = (e) =>{
       const value= e.target.value;
        const name= e.target.name; 
       let num = /^[1-9]\d*$/g
       if(value === "" || (num.test(e.target.value) && !(e.target.value > 100)) ){
            this.setState(
                prevState =>({
                    newUser: {
                        ...prevState.newUser,
                        [name]: value                        }
                     })
                    ) 
                  }else{e.preventDefault()}
             }

    stringChangeHandler =(e) => {
        const value= e.target.value;
        const name= e.target.name;
        this.setState(
            prevState =>({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            })
        )
    }
    // valueChangeHandler = () =>{
    //     const value= this.state.amount || this.st;
    //     const name= e.target.name;
    //     this.setState(
    //         prevState =>({
    //             newUser: {
    //                 ...prevState.newUser,
    //                 [name]: value
    //             }
    //         })
    //     )
    // }

    isEnabled =() =>{
            if(this.state.newUser.category !== "" && this.state.newUser.startDate !== "" && this.state.newUser.expiryDate !== ""
             && this.state.newUser.charSet !== "" && this.state.newUser.length !== "" && this.state.newUser.numOfCode !== "" 
            && this.state.newUser.discountType !=="" && this.state.newUser.codeValue !== "" && ( this.state.newUser.amount !== "" 
            || this.state.newUser.percentage !== ""  || this.state.newUser.unit !== "")){
               return(false)
            }else{
                return(true) 
        }
    }

    // componentWillMount(){
    //     let token = localStorage.getItem("token");
    //     this.setState({token})
    //     console.log(this.state.token)
    // }
    
    handleFormSubmit = (e) =>{
        e.preventDefault()
        let userData = this.state.newUser
        console.log(userData)
        this.setState({isLoading: false})
                  fetch(`http://172.20.20.107:8083/api/voucher-management-service/create/${this.state.token}`, {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers:{   
                        'Accept':  "application/json",
                        'Content-Type': "application/json"
                    },
                }).then(res =>{
                    res.json(); 
                    if(res.status === 201){
                        this.setState({isLoading: true})
                        console.log(res.status)                    
                        console.log("Successfully Submitted")
                        this.props.history.push(`/merchant/voucher`)
                        this.setState({
                            newUser:{
                                voucherType: "Value",
                                category: '',
                                startDate: "",
                                expiryDate: "",
                                charSet: "",
                                length: "",
                                prefix: "",
                                suffix: "",
                                numOfCode: '',
                                codeValue: "",
                                additionalInfo: ""
                            }
                        })
                       }
                       else{
                        this.setState({isLoading: true})
                       }
                      
                })
                .catch(error =>{
                    this.setState({isError: true})
                    
                } );                
           }

        //    componentDidUpdate =(prevProps, prevState) =>{
        //     if(this.state.isLoading){
        //         setTimeout(() =>{
        //             this.setState({isLoading: false, successLoading: true})
        //         }, 5000)
                
        //     }

        // }

    render(){
        if(this.state.isError){
            return(
                <h1>Error Creating Vouchers</h1>
            )
        }else{
            return(
                <div>  
                 <Segment>        
                    {this.state.isLoading ? null : <FormLoader />}
                    <Form style={style.form}  onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label size="lg" for="category">Category</Label>
                            <Input
                               required
                                bsSize="lg"
                                id="category"
                                type="text"
                                name="category"
                                value={this.state.newUser.category}
                                onChange={this.stringChangeHandler} />
                        </FormGroup> 
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">Start Date</Label>
                                        <Input
                                        required
                                        style={style.input}
                                        bsSize="lg" 
                                        type="date" 
                                        name="startDate"
                                        value={this.state.newUser.startDate}
                                        onChange={this.stringChangeHandler}/> 
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">Expiry Date</Label>
                                    <Input
                                    required
                                    style={style.input}
                                    bsSize="lg"
                                    type="date"
                                    name="expiryDate"
                                    value={this.state.newUser.expiryDate}
                                    onChange={this.stringChangeHandler}/> 
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                <Label size="lg">Prefix</Label>
                                <Input
                                required
                                  style={style.input}
                                    bsSize="lg"
                                    type="text" 
                                    name="prefix"
                                    placeholder="enter prefix" 
                                    value={this.state.newUser.prefix}
                                    onChange={this.prefixSuffixHandler}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">Suffix</Label>
                                    <Input
                                        required
                                        style={style.input}
                                        bsSize="lg" 
                                        type="text" 
                                        name="suffix"
                                        placeholder="enter prefix"
                                        value={this.state.newUser.suffix}
                                        onChange={this.prefixSuffixHandler}/>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">Voucher Length</Label>
                                     <Input
                                          required
                                        style={style.input}
                                        bsSize="lg" 
                                        type="text" 
                                        name="length" 
                                        value={this.state.newUser.length}
                                        onChange={this.numberChangehandler}/> 
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">No. of Vouchers</Label>
                                    <Input
                                        required
                                        style={style.input}
                                        bsSize="lg" 
                                        type="text"
                                        name="numOfCode"
                                        value={this.state.newUser.numOfCode}
                                        onChange={this.numberChangehandler}/>
                            </FormGroup>
                            </Col>
                        </Row>      
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg">Charset</Label>
                                    <Input
                                        required
                                        style={style.input}
                                        bsSize="lg"
                                        type="select"
                                        name="charSet"
                                        value={this.state.newUser.charSet}
                                        onChange={this.stringChangeHandler}>
                                    <option value="select">Choose...</option>
                                    <option value="Integer">Integer</option>
                                    <option value="Alphanumeric"> Alphanumeric</option>
                                    <option value="Alphabet">Alphabet</option>
                                </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label size="lg"> Discount Type</Label>
                                    <Input
                                      required
                                        style={style.input}
                                        bsSize="lg"
                                        type="select"
                                        name="discountType"
                                        value={this.state.newUser.discountType}
                                        onChange={this.stringChangeHandler}>
                                            <option>Choose...</option>    
                                            <option value="Amount">Amount </option>
                                            <option value="Percentage">Percentage</option>
                                            <option value="Unit">Unit</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>    
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label size="lg">Amount</Label>
                                    <Input 
                                    required
                                    style={style.input}
                                        bsSize="lg"
                                        disabled={this.state.newUser.discountType !== "Amount" ? true : false}
                                        type="text"
                                        name="amount"
                                        placeholder="#21"
                                        value={this.state.newUser.amount}
                                        onChange={this.numberChangehandler}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label size="lg">Percentage</Label>
                                    <Input 
                                    required
                                    style={style.input}
                                        bsSize="lg"
                                        disabled={this.state.newUser.discountType !== "Percentage" ? true : false}
                                        type="text"
                                        name="percentage"
                                        placeholder="21"
                                        value={this.state.newUser.percentage}
                                        onChange={this.percentageHandler}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label size="lg">Unit</Label>
                                    <Input
                                    required
                                    style={style.input}
                                        bsSize="lg"
                                        disabled ={this.state.newUser.discountType !== "Unit" ? true : false} 
                                        type="text"
                                        name="unit"
                                        placeholder="2000"
                                        value={this.state.newUser.unit}
                                        onChange={this.stringChangeHandler}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                             <Col md={6}>
                                 <FormGroup>
                                       <Label size="lg">Value</Label>
                                       <Input
                                       required
                                        bsSize="lg"
                                        type="text"
                                        name="codeValue"
                                        placeholder="hu"
                                        value={this.state.newUser.codeValue}
                                        onChange={this.stringChangeHandler}/>
                                   </FormGroup>
                                </Col>
                                <Col md={6}>
                                   <FormGroup>
                                       <Label size="lg">Additional Info</Label>
                                        <Input 
                                            required
                                            bsSize="lg"
                                            type="textarea" 
                                            name="additionalInfo"
                                            value={this.state.newUser.additionalInfo}
                                            onChange={this.stringChangeHandler} 
                                             id="exampleText" />
                                   </FormGroup>
                               </Col>
                        </Row>
                    <Button 
                    disabled={this.isEnabled() }
                        color="primary" 
                        type="submit" 
                        size="lg" style={style.button}>Submit</Button>
                    </Form>
                </Segment>
              </div>
            )
        }

       
    }
}

export default withRouter( DiscountVoucher)