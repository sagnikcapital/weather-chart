import  { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = ({ latitude, longitude }) => {
  const [data, setData] = useState({
    labels: ["Humidity", "Temperature", "Rainy", "Visibility", "Cloud", "WindSpeed"],
    datasets: [
      {
        label: "Weather Stat",
        data: [0, 0, 0, 0, 0, 0], // initial placeholder data
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  /**Fetch Weather details */
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (latitude && longitude) {
        const API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2b144ed66c94782b99a3d9465633b082&units=metric`;
        try {
          const response = await fetch(API);
          const weatherData = await response.json();
          console.log(weatherData);

          const updatedData = {
            labels: ["Humidity", "Temperature", "Rainy", "Visibility", "Cloud", "WindSpeed"],
            datasets: [
              {
                label: "Weather Stat",
                data: [
                  weatherData.main.humidity,
                  weatherData.main.temp,
                  weatherData.rain ? weatherData.rain["1h"] * 10 : 0,
                  weatherData.visibility / 100, //weatherData.visibility < 5000 ? 1 : 0, // simplistic way to represent mist
                  weatherData.clouds.all,
                  weatherData.wind.speed * 10,
                ],
                backgroundColor: [
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                ],
                borderColor: [
                  "rgba(75, 192, 192, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          };

          setData(updatedData);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  const options = {
    scales: {
      x: {
        beginAtZero: false,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

BarChart.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default BarChart;