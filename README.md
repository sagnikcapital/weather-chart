![React](https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png)

This project demonstrates how to create a React application with interactive charts using react-chartjs-2 and Chart.js. It also includes functionality to fetch and display the user's current latitude and longitude using the Geolocation API.

### System requirements

- Node(18.20.2)
- Npm (10.5.0)
- React(18.3.1) 

### Installation
```sh
$ git clone https://github.com/sagnikcapital/weather-chart.git
```
```sh
$ cd weather-chart
```
```sh
$ npm install
```
```sh
$ npm start
```

### React Chart JS
> Refer: https://react-chartjs-2.js.org/docs/migration-to-v4

### React Bootstrap
> Refer: https://react-bootstrap.netlify.app/docs/getting-started/introduction 

### Open weather API
> Refer: https://openweathermap.org/api

### `Useeffects` Lifecycle hook
```js
const { useState, useEffect } = React;

const ForExample = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  //On load or on mount 
  useEffect(
    () => {
      console.log("effect");
    },
    [username]
  );

  //On destroy DOM
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  const handleName = e => {
    const { value } = e.target;

    setName(value);
  };

  const handleUsername = e => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleName} />
        <input value={username} onChange={handleUsername} />
      </div>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
};
``` 

```js
/**
 * 
 */
useEffect(() => {
  /* ComponentDidMount code */
}, []);

/**
 * 
 */
useEffect(() => {
  return () => {
   /* componentWillUnmount code */
  }
}, []);
/**
 * we need to set at least one variable as hook's dependency 
 * (in this case, var1 and var2)
 */
useEffect(() => {
  /* componentDidUpdate code */
}, [var1, var2]);
```
> Refer: https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount

> Refer: https://dev.to/prototyp/react-useeffect-explained-with-lifecycle-methods-296n

### Usestate Hook
> useState is a React Hook that lets you add a state variable to your component.
```js
import { useState } from 'react';
const myComponent = () => {
 const [state, setState] = useState(initialState);
 setState('This is a state');
}
```
### React Hook Form
> Refer: https://react-hook-form.com

### `userRef` hook
>  is a React Hook that lets you reference a value.
```js
const chartRef = useRef();

const input = chartRef.current;
```

### Home Page
![Home](/public/blobs/home.png)