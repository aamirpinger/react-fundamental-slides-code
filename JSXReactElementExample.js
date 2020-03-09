// JSX in React Example code


import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1> Hello World </h1>

console.log(element)

ReactDOM.render(
    element,
    document.getElementById('root')
)


//****************************************************
// run one at a time

/*
import React from 'react';
import ReactDOM from 'react-dom';

const cityArray = ["Karachi", "Lahore", "Peshawer", "Quetta"]

const myElement = <ul>
   {
       cityArray.map((city) => <li key={city}> {city} </li>)
   }
</ul>

ReactDOM.render(
   myElement,
   document.getElementById('root')
);


*/
