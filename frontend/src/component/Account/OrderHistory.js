/**
 *  Account Page Order History
 */
import React, { Component  } from 'react';
import { Row,Container,Col ,Modal, ModalBody, ModalHeader  } from 'reactstrap';
import Sitebar from './Sitebar';
import OrderData from '../../api/userOrder';
import { Link } from 'react-router-dom';

class OrderHistory extends Component {
    constructor(props){
      super(props);
      this.state={
        modal: false,
        Order:OrderData,
        ViewOrder:''
      }
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    onViewOrder(data)
    {
        this.setState({
          ...this.state,
          ViewOrder:data
        })
        this.toggle()
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
       const OrderHistory = this.state.Order;
       const ViewOrderdata=this.state.ViewOrder;
       return (
        <div>
        <div className="inner-intro">
          <Container>
              <Row className="intro-title align-items-center">
                  <Col md={6} className="text-left">
                      <div className="intro-title-inner">
                      <h1>My Account</h1>
                      </div>
                  </Col>
                  <Col md={6}  className="text-right">
                      <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                      <li className="home">
                          <span>
                          <Link className="bread-link bread-home" to="/">Home</Link>
                          </span>
                      </li>
                      <li><span>My Account</span></li>
                      </ul>
                  </Col>
              </Row>
          </Container>
          </div>
        <div className="section-ptb">
        <Container>
             <Row>
               <Sitebar />
              <Col lg={9} className="mt-4 mt-lg-0">
                <Row>
                <Col lg={12}>
                  <div className="table-responsive">
                      <table class="table orderhistory-table mb-0">
                          <thead class="thead-light">
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Total</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          {OrderHistory !== null ?
                             <tbody>
                                {OrderHistory.map((Ordervalue) =>
                                      <tr>
                                        <td>{Ordervalue.orderid}</td>
                                        <td>{Ordervalue.date}</td>
                                        <td>{Ordervalue.status}</td>
                                        <td>${Ordervalue.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</td>
                                        <td><Link className="action-button"  onClick={() => this.onViewOrder(Ordervalue)}  href="#">View</Link></td>
                                      </tr>
                                )}

                             </tbody>
                          :
                            null
                          }


                        </table>
                      </div>
                    </Col>
                  </Row>
                   {/* modal-view */}
                   <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-view modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    {ViewOrderdata !== null ?
                    <ModalBody>
                      <div className="success-screen">
                      <div className="thank-you text-center">
                        <i className="fa fa-check-circle-o"></i>
                        <h1 className="text-white">Thank You</h1>
                        <span>Success! We received your payment. Your order will be processed soon.</span>
                        <strong className="text-white">Transaction ID:{ViewOrderdata.orderid}</strong>
                      </div>
                      <div className="delivery p-4 p-md-5 bg-light text-center">
                        <span className="h5">Expected Date Of Delivery</span>
                        <h2 className="mb-0 mt-2">{ViewOrderdata.date}</h2>
                      </div>
                      <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                      <Row>
                        <Col lg={6}>
                        <h6>Ship To</h6>
                          <ul className="list-unstyled mb-0">
                            <li>Ciyashop</li>
                            <li>#1457</li>
                            <li>126-632-2345</li>
                            <li>support@ciyashop.com</li>
                            <li>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</li>
                          </ul>
                        </Col>
                        <Col lg={6} className="text-lg-right mt-4 mt-lg-0">
                          <h6>Summary</h6>
                          <ul className="list-unstyled mb-0">
                            <li><span>Order ID:</span> <strong>{ViewOrderdata.orderid}</strong></li>
                            <li><span>Order Date:</span> <strong>{ViewOrderdata.date}</strong></li>
                            <li><span>Order Total:</span> <strong>${ViewOrderdata.price + ViewOrderdata.tax + 50}.00</strong></li>
                          </ul>
                        </Col>
                      </Row>
                      </div>
                      <div className="ordered-detail">
                        <h5 className="mb-4">Your Ordered Details</h5>
                        <div className="table-responsive">
                        <table class="table mb-0">
                          <tbody>
                            <tr className="ordered-item">
                              <td className="ordered-image">
                                 <img alt="img 01"  src={require(`../../assets/images/shop/img-02.jpg`)} className="img-fluid" />
                              </td>
                              <td  className="ordered-name">
                                <h6 className="mb-0">Product Name</h6>
                                <span>{ViewOrderdata.productname}</span>
                              </td>
                              <td className="ordered-quantity">
                                <h6 className="mb-0">Quantity</h6>
                                <span>{ViewOrderdata.qty}</span>
                              </td>
                              <td className="ordered-price">
                              <h6 className="mb-0">Price</h6>
                              <span>${ViewOrderdata.price}.00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                        <div className="table-responsive">
                        <table class="table total-table table-borderless mt-4 mb-0">
                          <tbody>
                            <tr>
                              <td>Subtotal</td>
                              <td className="text-right">${ViewOrderdata.price}.00</td>
                            </tr>
                            <tr>
                            <td>Shipping</td>
                              <td className="text-right">$50.00</td>
                            </tr>
                            <tr>
                            <td>Tax(GST)</td>
                              <td className="text-right">${ViewOrderdata.tax}.00</td>
                            </tr>
                            <tr className="border-top">
                            <td><strong className="h5">Total</strong></td>
                              <td className="text-right h5"><strong>${ViewOrderdata.price + ViewOrderdata.tax + 50}.00</strong></td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>
                    </div>
                    </ModalBody>
                    :
                      null
                    }
                  </Modal>
              </Col>
            </Row>
            </Container>
            </div>
            </div>
        )

    }
}
export default OrderHistory;
