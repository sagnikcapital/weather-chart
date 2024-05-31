import { useState, useEffect } from "react";
import './about.css';

const About = () => {
  const [aboutValue, setAboutValue] = useState("Hi");

  useEffect(() => {
    /**On mounted Dom*/
    setAboutValue("I am Sagnik");
  }, []);

  useEffect(() => {
    /**On destroy */
    return () => {
      setAboutValue("Cleaned up");
    };
  });

  // https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount

  // const paraRef = useRef();

  return (
    // <p className="text-align-center paragraph">{ aboutValue }</p>
    <section className="app-wrapper">
      <div className="about-container">
        <header className="about-header">
          <h1>About WeatherApp</h1>
          <p>Your reliable source for accurate weather information.</p>
        </header>
        <section className="about-content">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              At WeatherApp, we strive to provide you with the most accurate and up-to-date weather
              information to help you plan your day better. Whether it s a sunny day or a stormy
              night, we ve got you covered.
            </p>
          </div>
          <div className="about-card">
            <h2>Features</h2>
            <ul>
              <li>Real-time weather updates</li>
              <li>7-day weather forecasts</li>
              <li>Weather alerts and warnings</li>
              <li>Interactive weather maps</li>
              <li>User-friendly interface</li>
            </ul>
          </div>
          <div className="about-card">
            <h2>Contact Us</h2>
            <p>
              Have any questions or feedback? Feel free to reach out to us at { aboutValue } {" "}
              <a href="mailto:support@weatherapp.com">support@weatherapp.com</a>.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;