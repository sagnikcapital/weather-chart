![React](https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png)

This project demonstrates how to create a React application with interactive charts using react-chartjs-2 and Chart.js. It also includes functionality to fetch and display the user's current latitude and longitude using the Geolocation API.

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