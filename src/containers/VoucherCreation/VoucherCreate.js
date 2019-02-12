import React from "react";
import {PanelGroup, Panel} from 'react-bootstrap';
import ValueVoucher from './VoucherComponent/ValueVoucher';
import DiscountVoucher from './VoucherComponent/DiscountVoucher';
import GiftVoucher from './VoucherComponent/GiftVoucher';
import AppHeader from '../.././components/AppHeader';


const style = {
    Title:{
        textAlign: "center",

    },
    header:{
        color: "black",
        padding: "16px",
        fontSize: "30px"
    }
}
class VoucherCreation extends React.Component{
    render(){
        return(
        <div>
          <AppHeader />
            <div className='mainContainer' >
            <PanelGroup accordion id="vouchercreation">
                <Panel eventKey="1">
                     <Panel.Heading >
                           <Panel.Title toggle style={style.Title}>
                              <h1 style={style.header}>DISCOUNT VOUCHER</h1>
                              <p>A coupon code consists of letters or numbers that consumers enter into a promotional box on a checkout page to obtain a discount on the purchase.<br/>
                                e.g, 10% discount off, #3000 value off or 3 units of bags 
                              </p>
                           </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <DiscountVoucher />
                    </Panel.Body>
                </Panel> 
                <Panel eventKey="2">
                    <Panel.Heading >
                        <Panel.Title toggle style={style.Title}>
                              <h1 style={style.header}>GIFT VOUCHER</h1>
                              <p>A gift voucher is a card or piece of paper that you buy at a shop and give to someone, which entitles the person to exchange it for goods worth the same amount.<br />
                                e.g A gift worth #20,000
                              </p>
                           </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                            <GiftVoucher />
                    </Panel.Body>
                </Panel> 
                <Panel eventKey="3">
                    <Panel.Heading>
                         <Panel.Title toggle style={style.Title}>
                              <h1 style={style.header}>VALUE VOUCHER</h1>
                              <p>A voucher is a bond of the redeemable transaction type which is worth a certain monetary value and which may be spent only for specific reasons or on specific goods<br/>
                                e.g, an airtime worth #100 which can all be redeemable at once
                              </p>
                           </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                            
                           <ValueVoucher />   
                           
                    </Panel.Body>
                </Panel>                
            </PanelGroup>
            </div>
            </div>
        )
    }
}

export default VoucherCreation;