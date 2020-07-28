import React from 'react';
import history from '../history/History';
import Policy from './Policy';

class Authorise extends React.Component {
    render() {
      return (
        <React.Fragment>
          {/*On click of Next button*/}
          <h4>Authorisation</h4>
          <p>
            Psd2 app has requested repeat access to account information from your selected accounts.
          </p>
          <hr />
          <Policy />
          <hr />
          <p>
            Psd2 app will access account information from your account(s) until: <b>Monday 20 Feb 2018</b>
          </p>
          <p className='text-center'>
            <button type="button" className="btn btn-info">Deny</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-info" onClick={()=>{history.push('/success')}}>Confirm</button>
          </p>
          <p>
            You can stop any service provider's access to your account from online banking or from the mobile banking app
          </p>
        </React.Fragment>
      );
    }
  }

  export default Authorise;