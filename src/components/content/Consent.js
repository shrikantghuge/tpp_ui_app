import React from 'react';
import history from '../history/History';
import Policy from './Policy';

class Consent extends React.Component {
    render() {
      return (
        <React.Fragment>
          {/*Consent*/}
          <h4 className="text-center">Consent</h4>
          <Policy />
          <hr />
          <p>
            We will access your account information from your account(s) until: <b>Monday 20 Feb 2018</b>
          </p>
          <p className='text-center'>
            <button type="button" className="btn btn-info">Cancel</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-info" onClick={()=>{history.push('/selectBank')}}>Confirm</button>
          </p>
        </React.Fragment>
      );
    }
  }

  export default Consent;