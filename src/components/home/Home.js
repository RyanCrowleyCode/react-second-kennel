import React, { Component } from 'react'
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <address>
                    Visit Us at the Nasvhille North Location
                <br />500 Puppy Way
            </address>
                <picture>
                    <img className="main-image" src={require('./main.jpg')} alt="Dogs" />
                </picture>
            </React.Fragment>
        )
    }
}

export default Home