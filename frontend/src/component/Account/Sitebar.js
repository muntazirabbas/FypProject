/**
 *  Account Page Site bar
 */
import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Nav, NavItem } from 'reactstrap';

class Sitebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ord_Hist: false,
            Prof_act:false,
            Add_act:false,
            Saved_card:false
            
        }
    }
    
    SetActiveClass() {
        this.state = {
            Ord_Hist: false,
            Prof_act:false,
            Add_act:false,
            Saved_card:false
            
        }

        let pathname = document.location.href;
        let pathArray = pathname.split('/');
        let pageName = pathArray[pathArray.length -1];
        if(pageName.toLowerCase() == "orderhistory")
        {
            this.state.Ord_Hist = true;
            
        } 
        else if (pageName.toLowerCase() == "accountprofile" || pageName.toLowerCase() == "accountprofileedit")
        {
            this.state.Prof_act = true;
        }
        else if (pageName.toLowerCase() == "address"  || pageName.toLowerCase() == "addressedit")
        {
            this.state.Add_act = true;
        }
        else if (pageName.toLowerCase() == "savedcards"  || pageName.toLowerCase() == "savedcardsadd")
        {
            this.state.Saved_card = true;
        }
        
        return true;

    }

    render() {
        return (
            <Fragment>
                {this.SetActiveClass()  ?
            <Col lg={3}>
                <div className="woocommerce-MyAccount-navigation">
                    <Nav className="flex-column">
                        <NavItem >
                            <Link to='/Account/OrderHistory'  className={`${this.state.Ord_Hist == true ? 'active' : '' } nav-link nav-custo OrderHistory`}      > <i className="fa fa-tachometer"></i> Order History </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Account/AccountProfile"   className={`${this.state.Prof_act == true ? 'active' : '' } nav-link nav-custo AccountProfile`}  > <i className="fa fa-user-o"></i> Profile </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Account/Address"  className={`${this.state.Add_act == true ? 'active' : '' } nav-link nav-custo Address`}  > <i className="fa fa-map-marker"></i> Address </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Account/SavedCards" className={`${this.state.Saved_card == true ? 'active' : '' } nav-link  nav-custo SavedCards`}    > <i className="fa fa-credit-card"></i> Saved Cards </Link>
                        </NavItem>
                    </Nav>
                </div>
            </Col>
            :
            <div></div>
        }
        </Fragment>
        )
    }
}
export default Sitebar;