// ************************************************************************************************
//  This example illustrate how to use <Switch> component with react route components
//
//  App.js file
//
// *************************************************************************************************

import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

function ComponentHw(props) {
    return <h1>{`HELLO WORLD ${props.text}`}</h1>
}

function ComponentSlogan() {
    return <h1>PAKISTAN ZINDABAD</h1>
}

function ErrorComponent() {
    return <h1>404 - ERROR</h1>
}
class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    {
                        //to check switch functionality try typing wrong route in
                        // browser URL for example: http://localhost:3000/pakistan
                    }

                    <Route exact path="/" component={ComponentSlogan} />

                    <Route exact path="/helloworld" render={() => <ComponentHw text="router render example" />} />
                    <Route exact component={ErrorComponent} />

                </Switch>
                <Link to="/helloworld">Goto to Hello World Page</Link>
            </Fragment>
        )
    }
}

export default App
