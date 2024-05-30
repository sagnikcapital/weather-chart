import { useState, useEffect, useRef } from "react";


const About = () => {

  const [aboutValue, setaboutValue] = useState('Hi');

  return (
    <p className="text-align-center">{ aboutValue }</p>
  );
}

export default About;