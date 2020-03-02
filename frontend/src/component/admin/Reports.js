/**
 *  Report Page
 */
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import TransactionList from '../../api/TransactionList.json';
import TransferList from '../../api/Transfer.json';
import ExpenseCategoryList from '../../api/ExpenseCategory.json';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Reports extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    const Monthoptions = {
      animationEnabled: true,
      title: {
        horizontalAlign: "left"
      },
      axisX: {
        interval: 1,
        intervalType: "month"
      },
      axisY: {
        title: "Sales (in USD)",
        prefix: "$",
        includeZero: false
      },
      data: [{
        lineColor: "#03d39f",
        markerColor: "#03d39f",
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2019, 0), y: 24875 },
          { x: new Date(2019, 1), y: 25984 },
          { x: new Date(2019, 2), y: 68547 },
          { x: new Date(2019, 3), y: 32400 },
          { x: new Date(2019, 4), y: 25687 },
          { x: new Date(2019, 5), y: 36584 },
          { x: new Date(2019, 6), y: 21458 },
          { x: new Date(2019, 7), y: 52500 },
          { x: new Date(2019, 8), y: 36587 },
          { x: new Date(2019, 9), y: 12479 },
          { x: new Date(2019, 10), y: 36857 },
          { x: new Date(2019, 11), y: 85478 }
        ]
      }]
    }



    const Weekhoptions = {
      animationEnabled: true,
      title: {
        horizontalAlign: "left"
      },
      axisX: {
        valueFormatString: "DDD DD MMM"
      },
      axisY: {
        title: "Sales (in USD)",
        prefix: "$",
        includeZero: false
      },
      data: [{
        lineColor: "#03d39f",
        markerColor: "#03d39f",
        yValueFormatString: "$#,###",
        xValueFormatString: "DDD DD MMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2019, 5, 16), y: 34875 },
          { x: new Date(2019, 5, 17), y: 35984 },
          { x: new Date(2019, 5, 18), y: 78547 },
          { x: new Date(2019, 5, 19), y: 42400 },
          { x: new Date(2019, 5, 20), y: 35687 },
          { x: new Date(2019, 5, 21), y: 46584 }

        ]
      }]
    }


    const Yearoptions = {
      animationEnabled: true,
      title: {
        horizontalAlign: "left"
      },
      axisX: {
        interval: 1,
        intervalType: "year"
      },
      axisY: {
        title: "Sales (in USD)",
        prefix: "$",
        includeZero: false
      },
      data: [{
        lineColor: "#03d39f",
        markerColor: "#03d39f",
        yValueFormatString: "$#,###",
        xValueFormatString: "YYYY",
        type: "spline",
        dataPoints: [
          { x: new Date(2014, 0), y: 24875 },
          { x: new Date(2015, 0), y: 24875 },
          { x: new Date(2016, 0), y: 25984 },
          { x: new Date(2017, 0), y: 68547 },
          { x: new Date(2018, 0), y: 32400 },
          { x: new Date(2019, 0), y: 25687 },

        ]
      }]
    }



    return (




      <div className="section-ptb">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-sm-flex reports-tab w-100 mb-0">
                <h4>Reports</h4>
              </div>
            </Col>
          </Row>
          <div>
            <div>
               <Tabs>
                <TabList>
                  <Tab>Week</Tab>
                  <Tab>Month</Tab>
                  <Tab>Year</Tab>
                </TabList>
                <TabPanel>
                  <CanvasJSChart options={Weekhoptions} />
                </TabPanel>
                <TabPanel>
                  <CanvasJSChart options={Monthoptions} />
                </TabPanel>
                <TabPanel>
                  <CanvasJSChart options={Yearoptions} />
                </TabPanel>
              </Tabs>
            </div>
            <div className="reports-table">
            <Tabs>
              <TabList>
                <Tab>Transaction List</Tab>
                <Tab>Transfer Report</Tab>
                <Tab>Expense Category</Tab>
              </TabList>

              <TabPanel>
                <div class="tab-pane fade show active" id="transaction-list" role="tabpanel" aria-labelledby="transaction-list-tab">
                  <div className="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Transaction Id</th>
                          <th scope="col">Date</th>
                          <th scope="col">Type</th>
                          <th scope="col">Account</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Debit</th>
                          <th scope="col">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TransactionList.map((T, index) =>
                          <tr>
                            <td>{T.TransactionID}</td>
                            <td>{T.Date}</td>
                            <td className="text-success">{T.Type}</td>
                            <td>{T.Account}</td>
                            <td>{T.Amount}</td>
                            <td>{T.Debit}</td>
                            <td>{T.Balance}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div class="tab-pane fade show active" id="transaction-list" role="tabpanel" aria-labelledby="transaction-list-tab">
                  <div className="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Transaction Id</th>
                          <th scope="col">Date</th>
                          <th scope="col">Account</th>
                          <th scope="col">Type</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Balance</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TransferList.map((T, index) =>

                          <tr>
                            <td>{T.TransactionID}</td>
                            <td>{T.Date}</td>
                            <td>{T.Account}</td>
                            <td className="text-success">{T.Type}</td>
                            <td>{T.Amount}</td>
                            <td>{T.Balance}</td>
                            <td>{T.Status}</td>

                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div class="tab-pane fade show active" id="transaction-list" role="tabpanel" aria-labelledby="transaction-list-tab">
                  <div className="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Item No</th>
                          <th scope="col">Date</th>
                          <th scope="col">Type</th>
                          <th scope="col">Company Name</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ExpenseCategoryList.map((T, index) =>
                          <tr>
                            <td>{T.ItemNo}</td>
                            <td>{T.Date}</td>
                            <td>{T.Type}</td>
                            <td>{T.CompanyName}</td>
                            <td>{T.Amount}</td>
                            <td>{T.Status}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          </div>

        </Container>

      </div>
    )

  }
}
export default Reports;
