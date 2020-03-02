/**
 * Admin Profile Detail
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import adminprofile from '../assets/images/testimonials/img-02.jpg';
import Common from '../api/common';
class AdminProfileDetail extends Component{
    render(){
        const Profile=Common['0']['profile'];
        return(
            <Row>
                <Col lg={12}>
                <div className="admin-profile">
                    <div className="admin-profile-image">
                    <img className="img-fluid rounded-circle" src={adminprofile} alt="profile"/>	
                    </div>
                    <div className="admin-profile-info">
                        <h6 className="mb-0">{Profile.firstname+' '+Profile.lastname}</h6>
                        <span className="text-dark">{Profile.email}</span>
                    </div>
                   {Profile.phoneno != '' ? 
                        <div className="admin-profile-number ml-auto">
                            <strong className="h2"> <i className="fa fa-phone-square pr-2"></i>{Profile.phoneno}</strong>
                        </div>
                    :
                        null
                    }
                    
                </div>
                </Col>  
            </Row>
        )
    }
} 
export default AdminProfileDetail;
