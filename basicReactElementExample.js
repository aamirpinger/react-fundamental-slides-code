// Basic example of creating element in .js file 
// React.createElement has 3 part 
// React.createElement( /* type */, /* props */, /* nested content */ );

import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('div', null, 'Hello World')

console.log(element)

ReactDOM.render(
    element,
    document.getElementById('root')
)

//****************************************************************************
// run one at a time

/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('div', {
className: anyCssClass
}, 'Hello World')

console.log(element)

ReactDOM.render(
    element,
    document.getElementById('root')
)

*/

//****************************************************************************
// run one at a time

/*

const element = React.createElement("ol",{className: heading}, 
    React.createElement("li",null, "Aamir") 
    React.createElement("li",null, "Irfna") 
    React.createElement("li",null, "Pinger") 
);

*/


//***************************************************************************************

