import React from 'react';
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PieChart from '../charts/piechart';
import BarChart from '../charts/barchart';
import GoogleMapComponent from '../maps/map';
import RechartBar from '../charts/rechartbar';
import SendDetailsModal from '../modals/detail';
import { Circles } from 'react-loader-spinner';
import LineChartComponent from '../charts/linechart';
import Header from '../layouts/header';
import Compass from '../compass/compass';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home(){
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chartRef = useRef();
  useEffect(() => {
    /**Fetch geo location */
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

    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // 86400000 ms = 24 hours

    return () => clearInterval(timer);
  }, []);

  const exportToPdf = () => {
    setIsLoading(true);
    const input = chartRef.current;
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [canvas.width, canvas.height] });
      pdf.addImage(imgData, 'PNG', 100, 100);
      pdf.save('weather-charts.pdf');
    });
  };

  /**Handle submit */
  const handleSendDetails = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 2000); // Adjust the time as needed
  };
  return(
    <div className="App container">
      <h1 className="text-center my-4"></h1>
      <div className="row" ref={chartRef}>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Weather Chart of {currentDate.toDateString()}</h5>
              <p>Current Location <b>{location.latitude}</b> and <b>{location.longitude}</b></p>
            </div>
            <div className="card-body">
              <BarChart latitude={location.latitude} longitude={location.longitude} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm single-title">
            <div className="card-header">
              <h5 className="card-title">Single</h5>
            </div>
            <div className="card-body">
              {/* <RechartBar latitude={location.latitude} longitude={location.longitude} /> */}
              <LineChartComponent latitude={location.latitude} longitude={location.longitude} />
            </div>
          </div>
        </div>
        <div className='row'>
            <Compass />
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={exportToPdf}>Export to PDF</button>

          <button className='btn btn-secondary ml-2' onClick={handleSendDetails}>Send Details</button>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card mb-4 shadow-sm">
              
              <div className="card-body">
                <GoogleMapComponent latitude={location.latitude} longitude={location.longitude} />
              </div>
            </div>
          </div>
        </div>
        {isLoading && (
        <div className="loader-container">
          <Circles
            height="100"
            width="100"
            color="#00BFFF"
            ariaLabel="loading"
          />
        </div>
      )}
        <SendDetailsModal show={showModal} handleClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}
export default Home;