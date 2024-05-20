import React from 'react';
import { useState, useEffect } from 'react';
import PieChart from '../charts/piechart';
import BarChart from '../charts/barchart';
import './home.css';

function Home(){
  return(
    <div className="App container">
      <h1 className="text-center my-4">My React Charts</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Weather Chart</h5>
            </div>
            <div className="card-body">
              {/* <BarChart /> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Votes Pie Chart</h5>
            </div>
            <div className="card-body">
              {/* <PieChart /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;