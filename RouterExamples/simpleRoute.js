// ************************************************************************************************
//  This example illustrate how add simple routes in the react app
//
//  App.js file
//
// *************************************************************************************************

import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

function ComponentHw(props) {
    return <h1>{`HELLO WORLD ${props.text}`}</h1>
}

function ComponentSlogan() {
    return <h1>PAKISTAN ZINDABAD</h1>
}


class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={ComponentSlogan} />

                <Route exact path="/helloworld" render={() => <ComponentHw text="router render example" />} />


                <Link to="/helloworld">Goto to Hello World Page</Link>
            </Fragment>
        )
    }
}

export default App

