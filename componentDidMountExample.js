import React, { Component, Fragment } from 'react'

class App extends Component {
    state = {
        number: 0,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                number: 1000,
            })
        }, 3000)
    }

    render() {

        return (
            <Fragment>
                <h1>this number is going to change in three second:
                    <span style={{ color: 'red' }}>
                        {this.state.number}
                    </span>
                </h1>
            </Fragment>

        )
    }
}

export default App
