import React from 'react';


class UserInput extends React.Component {
    //function UserInput(props) {

    state = {
        txt: ''
    }

    handleSubmit = () => {
        const { changeValue } = this.props
        const val = document.getElementById("userinp").value
        changeValue(val)
    }

    handleChange = (e) => {
        //*****************************************************************************
        //
        // these below commented lines are for the user input validation
        // these below lines will not let user input any character other then numbers
        //
        //*****************************************************************************
        //
        // if (isNaN(e.target.value)) {
        //     console.log("only numbers")
        // } else {
        //     this.setState({ txt: e.target.value })
        // }

        //*****************************************************************************
        //
        // if you uncomment following line then first comment below line
        //
        //*****************************************************************************
        
        this.setState({ txt: e.target.value })
    }
    render() {
        // const { changeValue, children } = this.props

        return (
            <div>
                <input
                    id="userinp"
                    type="text"
                    name="userInput"
                    onChange={this.handleChange}
                    value={this.state.txt}
                />

                <button onClick={this.handleSubmit}>
                    submit
                </button>

            </div>
        );
    }
}

export default UserInput;
