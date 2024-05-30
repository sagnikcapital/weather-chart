import { useState, useEffect, useRef } from "react";


const About = () => {

  const [aboutValue, setAboutValue] = useState('Hi');

  useEffect(()=>{
    /**On mounted Dom*/
    setAboutValue('I am Sagnik');

    /**On destroy */
    return() => {
      setAboutValue('Cleaned up');
    };
  },[]);

  const paraRef = useRef();

  // setAboutValue('This is a new line');

  return (
    <p className="text-align-center paragraph">{ aboutValue }</p>
  );
}

export default About;