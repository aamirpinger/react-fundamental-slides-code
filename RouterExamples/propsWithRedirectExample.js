// **************************************************************************
//
//  App.js file
//
// **************************************************************************

import React, { Component, Fragment } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

function ErrorComponent() {
    return <h1>404 - ERROR</h1>
}

function LoginComponent(props) {
    console.log(props)
    return <h1>
        {`User Login Page - the props value received in
        variable humanType is : ${props.location.state.humanType}
        and the value of variable age received as a router props is : ${props.location.state.age}
        `}
    </h1>
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
            : <Redirect to={{
                pathname: "/login",
                state: {
                    referrer: this.props.location.pathname,
                    humanType: "Cat Person",
                    age: 12,
                }
            }}
            />
    }
}

class App extends Component {


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={LoginComponent} />
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
