import React from 'react';
import ReactDOM from 'react-dom';

class MyFirstReactComponent extends React.Component {
   render() {
       const cityArray = ["Karachi", "Lahore", "Peshawer", "Quetta"]

       return (
           <ul>
               {
                   cityArray.map((city) => <li key={city}> {city} </li>)
               }
           </ul>
       )}
}

ReactDOM.render(
   <MyFirstReactComponent />,
   document.getElementById('root')
);
