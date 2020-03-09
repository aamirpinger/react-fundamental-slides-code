import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import Output from './Output';


class App extends Component {
    state = {
        userText: "Aamir",
        var2: "Pinger",
    }


    handleChange = (val) => {
        this.setState((prevState) => ({
            ...prevState,
            userText: prevState.userText + ' - ' + val,
        }))

    }

    render() {

        return (
            <Fragment>
                <UserInput changeValue={this.handleChange} />
                <br />
                <br />
                <Output name={this.state.userText} var2={this.state.var2} />
            </Fragment>

        );
    }
}

export default App;
