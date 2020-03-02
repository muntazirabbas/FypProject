/**
 *  Admin Invoive Page
 */
import React, { Component } from 'react';
import { Row, Col,Container,Form,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import invoice from '../../api/invoice.js';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

class Invoices extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        modal1: false,
        dropdownOpen: false,
        isOpen: false,
        invoices:invoice,
        searchProduct:'',
        invoiceview:''
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

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    onSearchProduct(searchText){
      if(searchText === '')
      {
        this.setState({
            ...this.state,
            invoices:invoice,
            searchProduct:searchText
        })
      }
      else
      {
        let SearchBuyer= invoice.filter((invo)=>{
            if(searchText === searchText.toLowerCase()){
                let buyer = invo.buyer.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                return (
                  buyer
               )
            }
            else {
               let buyer = invo.buyer.toUpperCase().indexOf(searchText.toUpperCase()) > -1
               return (
                  buyer
               )
            }
        });
        this.setState({
          ...this.state,
          searchProduct:searchText,
          invoices:SearchBuyer
        })
      }
    }
    onDeleteInvoicePopup(data)
    {
        this.data=data;
        this.toggle1();
    }
    onDeleteInvoice(res){
      if(res)
      {
        let deleteInvoice=this.data;
        let newdata=this.state.invoices.filter((InvoiceList)=>InvoiceList.id !== deleteInvoice.id)
        this.setState({
            ...this.state,
            modal1:false,
            invoices:newdata
        })
      }
    }

    onViewInvoicePopup(data)
    {
      this.setState({
        invoiceview:data
      })
      this.toggle();
    }


    render() {
      const viewInvoice = this.state.invoiceview;
      const columns = [
        {
           maxWidth: 75,
           Header: 'No.',
           accessor: 'id'
        },
        {
           sortable: false,
           Header: 'Transaction Id',
           accessor: 'invoiceid'
        },
        {
           minWidth: 160,
           Header: 'Buyer',
           accessor: 'buyer',
        },
        {
           Header: 'Date',
           accessor: 'date',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Payment',
          accessor: 'payment',
        },
        {
           Header: 'Price',
           accessor: 'price',
        },
        {
           Header: 'Debit',
           accessor: 'debit',
        },
         {
           Header: 'Action',
           accessor: 'action',
           Cell: props => {
              return (
                 <div>
                    <Link className="view-button" onClick={() => this.onViewInvoicePopup(props.original)} > View <i className="fa fa-eye pl-2"></i></Link>
                    <a  className="delete-button"
                       onClick={() => this.onDeleteInvoicePopup(props.original)}
                    >Delete <i className="fa fa-trash-o pl-2"></i>
                    </a>
                 </div>
              )
           },
        }
     ]

    return (
      <div>
      <div className="section-ptb">
      <Container>
        <Row>
        <Col lg={12}>
           <div className="mb-0">
              <h4>Invoice List</h4>
              </div>
              <div className="mb-4">
                <form>
                <div class="form-group">
                  <input type="text" class="form-control"  placeholder="Search Invoice" value={this.state.searchProduct} onChange={(e) => this.onSearchProduct(e.target.value)}></input>
                </div>
                </form>
              </div>
                <ReactTable className="invoices-table"
                    data={this.state.invoices}
                    columns={columns}
                    minRows={1}
                    defaultPageSize={5}
                />
                  {/* modal-view */}
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-view modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    {viewInvoice !== null ?
                    <ModalBody>
                      <div className="success-screen">
                      <div className="thank-you text-center">
                        <i className="fa fa-check-circle-o"></i>
                        <h1 className="text-white">Thank You</h1>
                        <span>Success! We received your payment. Your order will be processed soon.</span>
                        <strong className="text-white">Transaction ID:{viewInvoice.invoiceid}</strong>
                      </div>
                      <div className="delivery p-4 p-md-5 bg-light text-center">
                        <span className="h5">Expected Date Of Delivery</span>
                        <h2 className="mb-0 mt-2">{viewInvoice.date}</h2>
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
                            <li><span>Order ID:</span> <strong>{viewInvoice.invoiceid}</strong></li>
                            <li><span>Order Date:</span> <strong>{viewInvoice.date}</strong></li>
                            <li><span>Order Total:</span> <strong>${viewInvoice.price + viewInvoice.tax + 50}.00</strong></li>
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
                              {typeof(viewInvoice.pictures) != 'undefined' ?
                                <td className="ordered-image">
                                  <img  src={require(`../../assets/images/${viewInvoice.pictures}`)}  className="img-fluid" />
                                </td>
                              :
                                null
                              }

                              <td  className="ordered-name">
                                <h6 className="mb-0">Product Name</h6>
                                <span>{viewInvoice.productname}</span>
                              </td>
                              <td className="ordered-quantity">
                                <h6 className="mb-0">Quantity</h6>
                                <span>{viewInvoice.qty}</span>
                              </td>
                              <td className="ordered-price">
                              <h6 className="mb-0">Price</h6>
                              <span>${viewInvoice.price}.00</span>
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
                              <td className="text-right">${viewInvoice.price}.00</td>
                            </tr>
                            <tr>
                            <td>Shipping</td>
                              <td className="text-right">$50.00</td>
                            </tr>
                            <tr>
                            <td>Tax(GST)</td>
                              <td className="text-right">${viewInvoice.tax}.00</td>
                            </tr>
                            <tr className="border-top">
                            <td><strong className="h5">Total</strong></td>
                              <td className="text-right h5"><strong>${viewInvoice.price + viewInvoice.tax + 50}.00</strong></td>
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

                  {/* modal-delete */}
                  <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="modal-delete modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle1}></ModalHeader>
                    <ModalBody>
                      Are You Sure You Want To Delete This Invoice Permanently?
                    </ModalBody>
                    <ModalFooter className="justify-content-center pt-4">
                      <Link className="action-button" to="#" onClick={(res)=>this.onDeleteInvoice(res)}>Yes</Link>
                      <Link className="action-button no" to="#" onClick={this.toggle1}>No</Link>
                    </ModalFooter>
                  </Modal>
                  </Col>
                </Row>
                </Container>
                </div>
              </div>
          )

    }
}
export default Invoices;
