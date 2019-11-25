import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'

class ApplicationViews extends Component {

    render() {
        return (
            // setting up all of the routes, so that when the url matches the path, React will know what component to render
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalCard />
                }} />
            </React.Fragment>
        )
    }

}

export default ApplicationViews