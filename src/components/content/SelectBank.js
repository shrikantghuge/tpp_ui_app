import React from 'react';
import history from '../history/History';

class SelectBank extends React.Component {
    render() {
      return (
        <React.Fragment>
          {/*Authenticate*/}
          <div className='text-center selbank-outer-div'>
            <h4>Which Bank Account would you like to Connect?</h4>
            {/*TO DO: CSS work for searchbox*/}
            {/* <input type='text' />
            <p>Or select from the popular banks below</p> */}
            <div onClick={()=>{history.push('/authenticate')}}><span></span>FireCrest Bank</div>
            <div onClick={()=>{history.push('/authenticate')}}><span></span>L & C Bank</div>
            <div onClick={()=>{history.push('/authenticate')}}><span></span>Greenview Bank</div>
          </div>  
        </React.Fragment>
      );
    }
  }

  export default SelectBank;