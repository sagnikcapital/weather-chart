import React from 'react';
import { useState, useEffect } from 'react';
import PieChart from '../charts/piechart';
import BarChart from '../charts/barchart';
import './home.css';

function Home(){
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    console.log('this');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return(
    <div className="App container">
      <h1 className="text-center my-4"></h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Weather Chart</h5>
            </div>
            <div className="card-body">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title"></h5>
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