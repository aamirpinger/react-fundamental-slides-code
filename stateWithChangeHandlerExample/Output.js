import React from 'react';
import typeOfProps from 'prop-types'

// **************************************************************************
//
//  To use 'prop-types' you have to install prop-types
//
//   npm install prop-types --save
//
// **************************************************************************



// class Output extends Component {
const Output = (props) => {
    // render() {
    //const name = this.props.name
    const { name, var2 } = props

    return (
        <h1> {`Output : ${name}, ${var2}`} </h1>

    );
}
// }


Output.propTypes = {
    name: typeOfProps.oneOfType([typeOfProps.string, typeOfProps.bool]).isRequired,
    var2: typeOfProps.string,

}

export default Output;
