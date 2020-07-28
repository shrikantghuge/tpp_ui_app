import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Consent from './Consent'
import SelectBank from './SelectBank'
import BankLogin from './BankLogin'
import Authorise from './Authorise'
import history from '../history/History';

class MainContent extends React.Component {
    render() {
      return (
        <div className='main-content'>
          <div className='outer-div'>
            <Switch>
              <Route path="/consent" exact>
                <Consent />
              </Route>
              <Route path="/selectBank" exact>
                <SelectBank />
              </Route>
              <Route path="/authenticate" exact>
                {/*On select of Bank*/}
                <h4 className='text-center'>GREENVIEW BANK</h4>
                <div className="progress progressbar">
                  <div className="progress-bar bg-info" style={{width:"40%"}}></div>
                </div>
                <p>
                  You are now leaving psd2 app and we are securely transferring you over to Greenview Bank
                </p>
                <a className="redirect-link" href='/bankLogin'>Click here to redirect</a>
              </Route>
              <Route path="/bankLogin" exact>
                <BankLogin />
              </Route>
              <Route path="/addAccount" exact>
                {/*On click of login again redirects to authorisation*/}
                {/*Authorise*/}
                <h4>Please select the accounts you want to add.</h4>
                <div className='acc-container'>
                  <input type='checkbox' />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>Greenview Gold</label>
                  <p>10476778901234</p> 
                </div>
                <div className='acc-container'>
                  <input type='checkbox' />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>Greenview Platinum</label>
                  <p>10476778901234</p> 
                </div>
                <button type="button" className="btn btn-info form-control add-acc-btn" onClick={()=>{history.push('/authorise')}}>Next</button>
              </Route>
              <Route path="/authorise" exact>
                <Authorise />
              </Route>
              <Route path="/success" exact>
                {/*When click on confirm*/}
                <h4 className='text-center'>PSD2 App</h4>
                <div className="progress progressbar">
                  <div className="progress-bar bg-info" style={{width:"40%"}}></div>
                </div>
                <p>You have been securely logged off from Greenview Bank and will shortly be transferred back to psd2 app</p>
                <a className="redirect-link" href='/consent'>Click here to redirect</a>
              </Route>
              <Redirect from="/" to="/consent" />
            </Switch>
          </div>  
        </div>
      );
    }
  }

  export default MainContent;