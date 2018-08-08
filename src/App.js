import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/layout/topnavbar';
import Footer from './components/layout/footer';
import LeftNavBar from './components/layout/leftnavbar';
import RightFilterNavBar from './components/layout/rightfilternavbar';
import ResultBar from './components/layout/resultbar';



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="dashBoardBox">
          <TopNavbar />
          <LeftNavBar />
          <RightFilterNavBar />
          <div id="content-wrapper">
            <div>

            </div>
          </div>

          <ResultBar />
        </div>
      </div>
    );
  }
}

export default App;
