import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({latitude, longitude}) => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        const API_KEY = '2b144ed66c94782b99a3d9465633b082';
        const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          
          const transformedData = data.list.map(item => ({
            name: new Date(item.dt * 1000).toLocaleDateString(),
            temperature: item.main.temp,
            humidity: item.main.humidity,
            pressure: item.main.pressure
          }));

          setWeatherData(transformedData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchWeatherData();
    }
  }, [latitude, longitude]);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={weatherData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        <Line type="monotone" dataKey="pressure" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;