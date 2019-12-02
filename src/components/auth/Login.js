import React, { Component } from 'react'

class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        /* 
            the change event will happen when an input field changes, like
            when the user types in a key into the input field. Every time they
            type a key, an event happens, and for each of those events we will
            change state. Because the "id" of that input field is named the same
            as one of the keys in state, [evt.target.id] is the key we add to
            stateToChange, and evt.target.value is whatever the user is typing.
        */
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // function to run when the user clicks to login
    handleLogin = evt => {
        // don't refresh the page
        evt.preventDefault()
        /* 
            For now, just store the email and password that
            the user enters into local storage.
        */
        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
        this.props.history.push("/")
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Please sign in</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="email@address"
                            // why not just required, why autoFocus=""
                            required="" autoFocus=""
                        />
                        <label htmlFor="email">Email Address</label>

                        <input onChange={this.handleFieldChange} type ="password"
                            id="password"
                            placeholder="password"
                            required=""
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">
                        Sign In
                    </button>
                </fieldset>

            </form>
        )
    }

}

export default Login