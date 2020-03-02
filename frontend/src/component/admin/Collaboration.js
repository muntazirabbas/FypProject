/**
 *  Admin Panel Collaboration Bar
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Adminsitebar from './Adminsitebar';
import AdminProfileDetail from '../../widgets/AdminProfileDetail';
import MyCollaboration from '../../api/collaboration';

class Collaboration extends Component {

    constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal1: false,
      collaboration:MyCollaboration,
      filedValue:{},
      error:{}
    };

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle1() {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  }

  onDeleteCollaboration(data)
  {
     this.data=data;
     this.toggle1();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onDeleteCollaborations(res)
  {
      if(res)
      {
          let deletedcollabration = this.data;
          let newdata=this.state.collaboration.filter((CollaborationList)=> CollaborationList.id !== deletedcollabration.id)
          this.setState({
            ...this.state,
            collaboration:newdata,
            modal1:false


          })
      }
  }

  handleValidation()
  {
      let filedValue=this.state.filedValue;
      let errors = {};
      let formIsValid = true;

      //User Name
      if (!filedValue["name"]) {
        formIsValid = false;
        errors["name"] = "Please Enter User Name";
      }

      if (typeof filedValue["name"] !== "undefined") {
          if (!filedValue["name"].match(/^[a-zA-Z ]+$/)) {
            filedValue = false;
            errors["name"] = "Please Enter Valid User Name";
          }
      }

       //Email Name
       if (!filedValue["email"]) {
        formIsValid = false;
        errors["email"] = "Please Enter Email Address";
      }

      if (typeof filedValue["email"] !== "undefined") {
          if (!filedValue["email"].match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            filedValue = false;
            errors["email"] = "Please Enter Valid Email Address";
          }
      }

    this.setState({ error: errors });
    return formIsValid;
  }


  AddUserSubmit(e)
  {
    e.preventDefault();
    if(this.handleValidation()){
       return true;
    }
  }

  handleChange(filed,e)
  {
    let filedValue=this.state.filedValue;
    filedValue[filed] = e.target.value;
    this.setState({filedValue});
  }

  render() {
    const collabroations=this.state.collaboration;

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
                      <h5 class="mb-0 ">Collaboration</h5>
                      <a class="add-user btn btn-primary ml-auto" onClick={this.toggle} href="#">Add user</a>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                    <div className="table-responsive">
                      <table class="table table-striped collaboration-table mb-0">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>image</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Access</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    {collabroations.length > 0 ?
                      <tbody>
                        {collabroations.map((collabro) =>
                                <tr>
                                  <td>{collabro.id}</td>
                                  <td>
                                    <img src={require(`../../assets/images/testimonials/${collabro.image}`)} alt="profile" className="img-fluid rounded-circle user-image" />
                                  </td>
                                  <td>{collabro.name}</td>
                                  <td>{collabro.email}</td>
                                  <td className="text-success">{collabro.access}</td>
                                  <td>
                                    <a className="delete-button" onClick={()=>this.onDeleteCollaboration(collabro)} href="#"> Delete <i className="fa fa-trash-o pl-2"></i></a>
                                  </td>
                                </tr>
                        )}
                      </tbody>
                  :
                  <tbody>
                    <tr>
                      <td colspan="6"><div class="no-data-found">No Data Available</div></td>
                    </tr>
                    </tbody>

                  }
                   </table>
                 </div>
              </div>
            </div>


            {/* modal add user */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-add-user modal-dialog-centered">
            <ModalHeader toggle={this.toggle}></ModalHeader>
              <form onSubmit={this.AddUserSubmit.bind(this)}>
                  <ModalBody>
                     <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" value={this.state.filedValue['name']} onChange={this.handleChange.bind(this,'name')} placeholder="Name"></input>
                        <span className="error">{this.state.error["name"]}</span>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" value={this.state.filedValue['email']} onChange={this.handleChange.bind(this,"email")} placeholder="Email"></input>
                        <span className="error">{this.state.error["email"]}</span>
                      </div>
                      <div class="form-group">
                        <label>Role</label>
                        <select name="rows" className="select2 w-100 d-block">
                            <option value="read" selected="selected">User</option>
                            <option value="admin">Admin</option>
                            <option value="write">Operator</option>
                        </select>
                      </div>
                  </ModalBody>
                  <ModalFooter className="justify-content-start pt-4">
                    <Button type="submit" className="action-button btn-primary">Submit</Button>
                    <Button className="action-button no" href="#" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                  </form>
                </Modal>

              {/* modal-delete */}
                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="modal-delete modal-lg modal-dialog-centered">
                <ModalHeader toggle={this.toggle1}></ModalHeader>
                  <ModalBody>
                  Are You Sure You Want To Delete This User Permanently?
                  </ModalBody>
                  <ModalFooter className="justify-content-center pt-4">
                    <Link className="action-button" onClick={(res)=>this.onDeleteCollaborations(res)}>Yes</Link>
                    <Link className="action-button no"  onClick={this.toggle1} >No</Link>
                  </ModalFooter>
                </Modal>


                  </Col>
                </Row>
              </Col>
            </Row>
           </Container>
          </div>
        )

    }
}
export default Collaboration;
