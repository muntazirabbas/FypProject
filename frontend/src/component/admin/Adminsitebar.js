/**
 *  Admin Site Bar
 */
import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, NavItem, Nav } from 'reactstrap';

class Adminsitebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Coll_act: false,
            Prof_act:false,
            Sett_act:false

        }
    }
     SetActiveClass() {
        this.state = {
            Coll_act: false,
            Prof_act:false,
            Sett_act:false

        }
        let pathname = document.location.href;
        let pathArray = pathname.split('/');
        let pageName = pathArray[pathArray.length -1];
        if(pageName.toLowerCase() == "collaboration")
        {
            this.state.Coll_act = true;
        }
        else if (pageName.toLowerCase() == "profile" || pageName.toLowerCase() == "profileedit")
        {
            this.state.Prof_act = true;
        }
        else if (pageName.toLowerCase() == "settings")
        {
            this.state.Sett_act = true;
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
                                    <Link className={`${this.state.Prof_act == true ? 'active' : '' } adminprofile nav-link admin-nav`} to="/admin-panel/Profile" > <i className="fa fa-user-o"></i> Profile</Link>
                                </NavItem>
                                <NavItem >
                                    <Link className={`${this.state.Coll_act == true ? 'active' : '' } collaboration nav-link admin-nav`} to="/admin-panel/Collaboration"  > <i className="fa fa-map-marker"></i> Collaboration</Link>
                                </NavItem>
                                <NavItem >
                                    <Link className={`${this.state.Sett_act == true ? 'active' : '' } account nav-link admin-nav`} to="/admin-panel/Settings" > <i className="fa fa-cogs"></i> Account Settings</Link>
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
export default Adminsitebar;
