import { useState, useEffect, useRef } from "react";


const About = () => {

  const [aboutValue, setAboutValue] = useState('Hi');

  useEffect(()=>{
    /**On mounted Dom*/
    setAboutValue('I am Sagnik');
  },[]);

  useEffect(() =>  {
    /**On destroy */
    return() => {
      setAboutValue('Cleaned up');
    };
  });

  // https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount

  const paraRef = useRef();

  // setAboutValue('This is a new line');

  return (
    <p className="text-align-center paragraph">{ aboutValue }</p>
  );
}

export default About;