import React from 'react';
import './layout.css';
import StepNavigation from '../step/StepNavigation';
import MainContent from '../content/MainContent';
import { BrowserRouter } from 'react-router-dom';

class Layout extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div className='header'></div>
          <div className='outer-container'>
            <StepNavigation />
            <MainContent />
          </div>
        </BrowserRouter>
      );
    }
  }

  export default Layout;