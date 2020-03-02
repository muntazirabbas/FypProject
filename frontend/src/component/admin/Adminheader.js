/**
 *  Admin Header
 */
import React, { Component } from 'react';
import { Row, Col,Container,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Navbar,NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse } from 'reactstrap';
import profile from '../../assets/images/testimonials/img-02.jpg';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Common from '../../api/common';

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          modal1: false,
          dropdownOpen: false,
          isOpen: false
        };
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
    }
    toggle2() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggle3() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    Changeclass(val){
        var removeelems = document.getElementsByClassName("nav-item");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });

        if(val == "report")
        {
            document.querySelector(".report").classList.add("active");
        }
        if(val == "invoice")
        {
            document.querySelector(".invoice").classList.add("active");
        }
        if(val == "profile")
        {
            document.querySelector(".profile").classList.add("active");
        }
        if(val == "backhome")
        {
            document.querySelector(".backhome").classList.add("active");
        }
    }
    render() {
        const Profile=Common["0"]["profile"];
        return (
                <div className="admin-menu">
                <Container>
                    <Row className="align-items-center">
                    <Col md={12}>
                    <div className="d-flex align-items-center positive-reletive">

                    <Link to="/"><img className="img-fluid logo" src={logo} alt="logo"/></Link>

                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2} className="profile-dropdown ml-auto">
                        <DropdownToggle caret className="btn-white">
                        <img className="img-fluid rounded-circle profile-img" src={profile} alt="profile"/>
                        <div className="d-none d-sm-block">
                        <h6 className="mb-0">{Profile.firstname+' '+Profile.lastname}</h6>
                        <span className="text-dark">{Profile.email}</span>
                        </div>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.Changeclass('profile')}  className="nav-link"  tag={Link} to="/admin-panel/Profile"><i className="fa fa-user-circle-o"></i>Profile</DropdownItem>
                            <DropdownItem onClick={() => this.Changeclass('profile')}className="nav-link"  tag={Link} to="/admin-panel/Settings"><i className="fa fa-cog"></i>Account settings</DropdownItem>
                            <DropdownItem onClick={() => this.Changeclass('profile')}  className="nav-link" tag={Link} to="/"><i className="fa fa-sign-out"></i>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                    <Navbar light expand="md"  className="bg-white">
                        <NavbarToggler onClick={this.toggle3} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                            <NavItem className="active report">
                                <Link  to="/admin-panel/Reports" className="nav-link" onClick={() => this.Changeclass('report')}><i className="fa fa-line-chart"></i>Reports</Link>
                            </NavItem>
                            <NavItem className="invoice">
                                <Link to="/admin-panel/Invoices" className="nav-link" onClick={() => this.Changeclass('invoice')}><i className="fa fa-inbox"></i>invoices</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-shopping-cart"></i>Products
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem onClick={() => this.Changeclass('product')} className="nav-link"   tag={Link} to="/admin-panel/Product"><i className="fa fa-cart-plus"></i>Products</DropdownItem>
                                    <DropdownItem onClick={() => this.Changeclass('product')} className="nav-link"   tag={Link} to="/admin-panel/product-add"><i className="fa fa-cart-arrow-down"></i>Add Product</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="profile">
                                <Link to="/admin-panel/Profile" className="nav-link" onClick={() => this.Changeclass('profile')}><i className="fa fa-user-circle-o"></i>Profile</Link>
                            </NavItem>
                            <NavItem className="backhome">
                                <Link to="/" className="nav-link" onClick={() => this.Changeclass('backhome')}><i className="fa fa-home"></i>Back to home</Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
                </div>
                )
    }
}
export default AdminHeader;
