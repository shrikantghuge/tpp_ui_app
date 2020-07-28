import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Policy extends React.Component {
    render() {
      return (
        <div className="panel-group policy-outer-div" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapse-heading">
                            <span>Your Account Details</span>
                            <span className="collapse-icon">+</span>
                        </a>
                    </h6>
                </div>
                <div id="collapse1" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <ul className="collapse-text">
                            <li>Your account number, name and sort code</li>
                            <li>Your account balance</li>
                            <li>Any other name by which </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapse-heading">
                            <span>Your Account Transactions for the last 12 months</span>
                            <span className="collapse-icon">+</span>
                        </a>
                    </h6>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul className="collapse-text">
                            <li>Your account number, name and sort code</li>
                            <li>Your account balance</li>
                            <li>Any other name by which </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapse-heading">
                            <span>Your Account Features and Benefits</span>
                            <span className="collapse-icon">+</span>
                        </a>
                    </h6>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul className="collapse-text">
                            <li>The type of account you have</li>
                            <li>The fees, charges and interest you pay</li>
                            <li>The benefits, services, rewards, and interest your account offers </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapse-heading">
                            <span>Your Regular Payments</span>
                            <span className="collapse-icon">+</span>
                        </a>
                    </h6>
                </div>
                <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul className="collapse-text">
                            <li>Your direct debits</li>
                            <li>Your standing orders</li>
                            <li>Other payee agreements you have set up</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Policy;