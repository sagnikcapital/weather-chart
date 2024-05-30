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

### Set Default Node and NPM version
```sh
$ nvm alias default <version>
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

```js
const validationConfig = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
    note: {
      required: 'Note is required',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  }

  /**Form control validation */
   <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', validationConfig.email)}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          className={`form-control ${errors.note ? 'is-invalid' : ''}`}
          {...register('note', validationConfig.note)}
        />
        {errors.note && <div className="invalid-feedback">{errors.note.message}</div>}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary details-send">Send</button>
      </div>
   </form>
```

### `userRef` hook
>  is a React Hook that lets you reference a value.
```js
import { useRef } from 'react';

const chartRef = useRef();

const input = chartRef.current;
```

### Home Page
![Home](/public/blobs/home.png)

### Send Details
![Details](/public/blobs/send-details.png)

### Use `.env` values in Vite
```js
import.meta.env.KEY_NAME_FROM_ENV
```
```js
 <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
```
> Refer: https://vitejs.dev/guide/env-and-mode

### `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.
```js
const id = useId()
```
- Generating unique IDs for accessibility attributes
```js
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
}

<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
```

### React Empty tag
Apart from the regular React.Fragment syntax, there’s a very simple and easy JSX syntax available to use fragments, which is expressed by an empty JSX tag like below, This is a shorter syntax for React Fragments.
```js
<> </>
```

### `<StrictMode>`

> find common bugs in components early during development.
```js
<StrictMode>
  <App />
</StrictMode>
```

### `foreachloop` 
```js
let users = ['Alice', 'Bob', 'Charlie'];

let userElements = users.map(function(user) {
  return <li>{user}</li>;
});

// Now we can use `userElements` in JSX:
return (
  <ul>
    {userElements}
  </ul>
);
```
> Refer: https://www.altcademy.com/blog/how-to-use-foreach-in-reactjs

### `useEffect` in About
```js
import { useEffect } from "react";

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
```