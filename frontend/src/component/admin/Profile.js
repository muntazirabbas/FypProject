/**
 *  Admin Profile Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container,FormGroup,Form,Input,Button } from 'reactstrap';
import Adminsitebar from './Adminsitebar';
import AdminProfileDetail from '../../widgets/AdminProfileDetail';
import Common1 from '../../api/common';

class Profile extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
      const Profile=Common1['0']['profile'];
   return (
            <div className="section-ptb">
            <Container>
              <AdminProfileDetail />
             <Row>
                <Adminsitebar />

              <Col lg={9} className="mt-4 mt-lg-0">
                <Row>
                <Col lg={12}>
                  <div className="woocommerce-Address">
                    <div className="woocommerce-Address-title">
                      <h5 class="mb-0">Profile Information</h5>
                      <Link class="edit" to="/admin-panel/Profileedit">Edit</Link>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                      <ul class="list-unstyled mb-0">
                        <li><span>First name:</span><strong>{Profile.firstname}</strong></li>
                        <li><span>Last name:</span><strong>{Profile.lastname}</strong></li>
                        <li><span>Gender:</span><strong>{Profile.gender}</strong></li>
                        <li><span>DOB:</span><strong>{Profile.dob}</strong></li>
                        <li><span>Phone no:</span><strong>{Profile.phoneno}</strong></li>
                        <li><span>Email:</span><strong>{Profile.email}</strong></li>
                        <li><span>Address:</span><strong>{Profile.address}</strong></li>
                      </ul>
                    </div>
                  </div>
                </Col>
                </Row>
              </Col>
            </Row>
            </Container>
            </div>
        )

    }
}
export default Profile;
