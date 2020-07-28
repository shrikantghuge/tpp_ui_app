import React from 'react';
import './step.scss';
import'bootstrap/dist/css/bootstrap.min.css';
import history from '../history/History';

class StepNavigation extends React.Component {
  render() {
    const location = history.location&&history.location.pathname
    return (
      <div className='step-outer-div text-center'>
        <React.Fragment>
          <span className="step-container">
            {
              location === '/consent'?
                <span className="step active">1</span>
              :
              <span className="step">1</span>
              // <span className="step">✓</span>
            }
            <span className="step-heading">Consent</span>
          </span>
          <span className="step-line"><hr/></span>
          <span className="step-container">
            {
              location === '/bankLogin'?
                <span className="step active">2</span>
              :
              <span className="step">2</span>
              // <span className="step">✓</span>
            }
            <span className="step-heading">Authenticate</span>
          </span>
          <span className="step-line"><hr/></span>
          <span className="step-container">
            {
              location === '/addAccount'||location === '/authorise'?
                <span className="step active">3</span>
              :
              <span className="step">3</span>
              // <span className="step">✓</span>
            }
            <span className="step-heading">Authorise</span>
          </span>
        </React.Fragment>
      </div>
    );
  }
}

export default StepNavigation;