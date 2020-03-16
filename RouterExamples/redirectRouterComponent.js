// ************************************************************************************************
//  This example illustrate how to programmatically redirect from one route to another in react
//
//  App.js file
//
// *************************************************************************************************

import React, { Component, Fragment } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

function ErrorComponent() {
    return <h1>404 - ERROR</h1>
}

function LoginComponent() {
    return <h1>User Login Page</h1>
}

function ComponentHw() {
    return <h1>HELLO WORLD</h1>
}

class ComponentSlogan extends Component {
    state = {
        userLogin: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((ps) => ({
                userLogin: !ps.userLogin,
            }))
        }, 2000)
    }

    render() {
        return (this.state.userLogin)
            ? <h1> PAKISTAN ZINDABAD </h1>
            : <Redirect to="/login" />
    }
}

class App extends Component {


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={LoginComponent />} />
                    <Route exact path="/helloworld" render={() => <ComponentHw text="router render example" />} />
                    <Route exact path="/" component={ComponentSlogan} />
                    <Route exact component={ErrorComponent} />
                </Switch>
                <Link to="/helloworld">Goto to Hello World Page</Link>
            </Fragment>


        )
    }
}

export default App
