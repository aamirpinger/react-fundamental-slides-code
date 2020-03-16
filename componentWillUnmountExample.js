import React, { Component } from 'react';
import ReactDOM from 'react-dom';
function ComponentHw() {

    return <h1>HELLO WORLD</h1>
}

function ComponentSlogan() {
    return <h1>PAKISTAN ZINDABAD</h1>
}


class App extends Component {
    state = {
        number: 0,
    }

    componentDidMount() {
        //after 3 second this setTimeout will remove <App> from browser DOM
        // and render this new  <Slogan/> on browser DOM
        setTimeout(() => {
            ReactDOM.render(<ComponentSlogan />, document.getElementById('root'))
        }, 3000)
    }

    componentWillUnmount() {
        // when <App/> component will be unmounted after 3 seconds
        //this function will invoke autometically
        alert("component unmount event invoked")
    }


    render() {
        return (
            //Always remember componentWillUnmount event will be invoke
            //only when there is a change at browser DOM
            // and in our app browser DOM we have rendered <App/> through
            // index.js file. so to change on browser DOM we again need to
            // run ReactDOM.render which in this example is componentDidMount
            // method will run


            //conditional rendering below will not invoke componentWillUnmount() method
            // because actually <App/> is rendered and below component is just a child of
            // <App/> component
            <ComponentHw />
        )
    }
}

export default App
