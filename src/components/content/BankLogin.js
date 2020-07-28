import React from 'react';
import history from '../history/History';

class BankLogin extends React.Component {
    render() {
      return (
        <React.Fragment>
          {/*After Redirection*/}
          <p>This information is not visible to psd2 app</p>
          <div className="form-group">
            <label><b>User ID</b></label>
            <p>You will have received when you first signed up to online banking</p>
            <input type='text' className="form-control" />
          </div>
          <div className="form-group">
            <label><b>Password</b></label>
            <p>Your password is between 6 to 15 characters, You received it when you first signed up</p>
            <input type='password' className="form-control" />
          </div>
          <div className="form-group">
            <label><b>Use your SmartKey to generate a secure code</b></label>
            <input type='text' className="form-control" />
            {/*TO DO: add info button about this field*/}
          </div>
          <button type="button" className="btn btn-info form-control bank-login-btn" onClick={()=>{history.push('/addAccount')}}>Log in</button>
          <p><a href='#forget'>Forgotten your login details?</a></p>  
        </React.Fragment>
      );
    }
  }

  export default BankLogin;