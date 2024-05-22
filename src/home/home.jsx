import React from 'react';
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PieChart from '../charts/piechart';
import BarChart from '../charts/barchart';
import GoogleMapComponent from '../maps/map';
import RechartBar from '../charts/rechartbar';
import './home.css';

function Home(){
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [currentDate, setCurrentDate] = useState(new Date());
  const chartRef = useRef();
  useEffect(() => {
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
    const input = chartRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save('weather-charts.pdf');
    });
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
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Single</h5>
            </div>
            <div className="card-body">
              <RechartBar latitude={location.latitude} longitude={location.longitude} />
            </div>
          </div>
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
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={exportToPdf}>Export to PDF</button>
        </div>
      </div>
    </div>
  );
}
export default Home;